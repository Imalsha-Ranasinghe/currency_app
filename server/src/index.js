const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//all currencies
app.get("/getAllCurrencies", async (req, res) => {
  const nameURL =
    "https://openexchangerates.org/api/currencies.json?prettyprint=false&show_alternative=false&show_inactive=false&app_id=833988a39b0b4b7db4b6e3802cce8488";

  try {
    const nameResponse = await axios.get(nameURL);
    const nameData = nameResponse.data;

    return res.json(nameData);
  } catch (err) {
    console.error(err);
  }
});

//get target amount
app.get("/convert", async (req, res) => {
  const { date, sourceCurrency, targetCurrency, sourceAmount } = req.query;

  try {
    const dataURL = `https://openexchangerates.org/api/historical/${date}.json?app_id=833988a39b0b4b7db4b6e3802cce8488`;

    const dataResponse = await axios.get(dataURL);
    const rates = dataResponse.data.rates;

    //rates
    const sourceRate = rates[sourceCurrency];
    const targetRate = rates[targetCurrency];

    //final target value
    const targetAmountValue = (targetRate / sourceRate) * sourceAmount;

    return res.json(targetAmountValue.toFixed(2));
  } catch (err) {}
});

//listen to a port
app.listen(5000, () => {
  console.log("Server is running onport 5000");
});

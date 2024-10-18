import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function MainPage() {
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [sourceAmount, setSourceAmount] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);
  const [currencyNames, setCurrencyNames] = useState([]);

  //get all currency names

  useEffect(() => {
    const getCurrencyNames = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/getAllCurrencies"
        );
        setCurrencyNames(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getCurrencyNames();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5000/convert", {
        params: {
          date,
          sourceCurrency,
          targetCurrency,
          sourceAmount,
        },
      });

      setTargetAmount(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-200 h-full p-12">
      <div className="bg-white white p-8 rounded-lg shadow-lg w-full max-w ">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          Effortless Currency Exchange at Your Fingertips
        </h1>
        <p className=" px-2 opacity-70">
          Stay ahead in the global marketplace with our easy-to-use currency
          converter. Whether you're traveling, shopping internationally, or
          conducting business across borders, our converter provides real-time
          exchange rates to help you make informed financial decisions. Simply
          enter the amount, choose your currencies, and get instant, accurate
          conversions right at your fingertips. Start converting today!
        </p>
        <div>
          <section>
            <form onSubmit={handleSubmit}>
              <div className=" px-12 pt-12 pb-8 ">
                <label
                  htmlFor={date}
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Date
                </label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="Date"
                  id={date}
                  name={date}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>

              <div className="mb-5 px-12 ">
                <label
                  htmlFor={sourceCurrency}
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Source Currency
                </label>
                <select
                  onChange={(e) => setSourceCurrency(e.target.value)}
                  type=""
                  id={sourceCurrency}
                  name={sourceCurrency}
                  value={sourceCurrency}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select Source Currency"
                  required
                >
                  <option>Select Source Currency </option>
                  {Object.keys(currencyNames).map((currency) => (
                    <option
                      className="flex-col p-1"
                      key={currency}
                      value={currency}
                    >
                      {currencyNames[currency]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-5 px-12 ">
                <label
                  htmlFor={targetCurrency}
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Target Currency
                </label>
                <select
                  onChange={(e) => setTargetCurrency(e.target.value)}
                  type=""
                  id={targetCurrency}
                  name={targetCurrency}
                  value={targetCurrency}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select Source Currency"
                  required
                >
                  <option>Select Target Currency </option>
                  {Object.keys(currencyNames).map((currency) => (
                    <option
                      className="flex-col p-1"
                      key={currency}
                      value={currency}
                    >
                      {currencyNames[currency]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-5 px-12 ">
                <label
                  htmlFor={sourceAmount}
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Amount in Source Currency
                </label>
                <input
                  onChange={(e) => setSourceAmount(e.target.value)}
                  type="number"
                  id={sourceAmount}
                  name={sourceAmount}
                  value={sourceAmount}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 bloc
                k w-full p-2.5"
                  placeholder=""
                  required
                />
              </div>

              <button className="bg-blue-900 border border-blue-800 text-white text-l font-semibold rounded-lg w-full p-2.5 hover:bg-blue-800">
                Submit
              </button>
            </form>

            {targetCurrency == 0 ? " " :
            <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out">
              <h2 className="text-2xl font-bold text-blue-900 text-center mb-4">
                Conversion Result
              </h2>
              <p className="text-center text-lg text-slate-700 font-semibold">
                {sourceAmount} {currencyNames[sourceCurrency]} {" = "}
                <span className="text-lg text-slate-700 font-semibold">
                  <span className="font-bold text-slate-950 ">
                  {targetAmount} {" "}
                  </span>    
                 {currencyNames[targetCurrency]}
              </span>
              </p>
            </div>
            }

          </section>
        </div>
      </div>
    </div>
  );
}

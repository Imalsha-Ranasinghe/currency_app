import React, { useState } from "react";

export default function MainPage() {
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [sourceAmount, setSourceAmount] = useState("");
  const [targetAmount, setTargetAmount] = useState("");

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
            <form>
              <div className=" px-12 pt-12 pb-8 ">
                <label
                  htmlFor={date}
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Date
                </label>
                <input
                  type="Date"
                  id={date}
                  name={date}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>

              <div class="mb-5 px-12 ">
                <label
                  htmlFor={sourceCurrency}
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Source Currency
                </label>
                <select
                  type=""
                  id={sourceCurrency}
                  name={sourceCurrency}
                  value={sourceCurrency}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select Source Currency"
                  required
                >
                  <option>USD</option>
                </select>
              </div>

              <div class="mb-5 px-12 ">
                <label
                  htmlFor={targetCurrency}
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Target Currency
                </label>
                <select
                  type=""
                  id={targetCurrency}
                  name={targetCurrency}
                  value={targetCurrency}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select Source Currency"
                  required
                >
                  <option>USD</option>
                </select>
              </div>

              <div class="mb-5 px-12 ">
                <label
                  htmlFor={sourceAmount}
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Amount in Source Currency
                </label>
                <input
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

              <button
                type="button"
                className="bg-blue-900 border border-blue-800 text-white text-l font-semibold rounded-lg w-full p-2.5 hover:bg-blue-800"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

const axios = require("axios");
const integratedEndpoint = "https://api.exchangeratesapi.io/latest";
const convertBaseToCurrency = require("../utils");

const getRates = (req, res) => {
  const { base, currency } = req.query;
  // const arrayOfCurrency = [currency].map((item) => {
  //   return item;
  // });
  //do some simple validation
  if (!base || !currency) {
    return res.status(404).json({
      results: {
        success: false,
        message: "Base or Currency cannot be empty",
      },
    });
  }
  let temp = {};

  const baseUrl = `${integratedEndpoint}?base=${base}`;
  axios
    .get(baseUrl)
    .then((response) => {
      //get the date of the response
      const date = response.data.date;
      // convert the req.query.currency to an array and split it to get individual currency
      const arrayOfCurrency = currency.split(",");
      arrayOfCurrency.map((item) => {
        // convertBaseToCurrency is a fumction to convert the base currency to the other currencies
        return (temp[item] = convertBaseToCurrency(response.data.rates, item));
      });

      res.json({
        results: {
          base: base,
          date: date,
          rates: temp,
          exampleCurrency: currency,
        },
      });
    })
    .catch((error) => {
      res.status(404).json({
        success: false,
        message: `The Currency ${base} was ${error.response.statusText}`,
      });
    });
};

module.exports = getRates;

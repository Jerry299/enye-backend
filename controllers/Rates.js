const axios = require("axios");
const integratedEndpoint = "https://api.exchangeratesapi.io/latest";

const getRates = (req, res) => {
  const { base, currency } = req.query;
  const arrayOfCurrency = [currency].map((item) => {
    return item;
  });
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
  console.log(`${integratedEndpoint}?base=${base}`);
  axios
    .get(`${integratedEndpoint}?base=${base}`)
    .then((response) => {
      const date = response.data.date;
      temp = response.data;
      console.log(temp);
      res.json({
        results: {
          base: base,
          date: date,
          rates: {
            A: 12,
            b: 23,
            c: 45,
          },
          exampleCurrency: currency,
        },
      });
    })
    .catch((error) => {
      console.log("error=====", error.response.statusText, "+++++Errorrr");
      res.status(404).json({
        success: false,
        message: `The Currency ${base} was ${error.response.statusText}`,
      });
    });
};

module.exports = getRates;

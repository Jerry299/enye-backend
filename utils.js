const convertBaseToCurrency = (base, arrayOfOtherCurrency) => {
  const result = arrayOfOtherCurrency.map((currency) => {
    return base * Number(currency);
  });
  return result;
};

module.exports = convertBaseToCurrency;

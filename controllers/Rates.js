const getRates = (req, res) => {
  const api = "https://api.exchangeratesapi.io/latest";
  console.log("name", req.query.name);
  res.json({
    success: true,
    message: `Your Name is ${req.query.name}`,
  });
};

module.exports = getRates;

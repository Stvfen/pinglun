const twikoo = require('twikoo');
exports.default = async (req, res) => {
  await twikoo({ req, res });
};

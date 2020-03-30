const crypto = require('crypto');

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX'); // 9a12d804
};

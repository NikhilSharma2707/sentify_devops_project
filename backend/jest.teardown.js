const mongoose = require('mongoose');

module.exports = async () => {
  await mongoose.disconnect();
  // Wait 1 second to allow any lingering handles to complete, then force exit.
  setTimeout(() => process.exit(0), 1000);
};

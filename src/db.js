var fs = require('fs');

function DB() {
  this.filename = __dirname + '/../db/db.json';
  this.data = JSON.parse(fs.readFileSync(this.filename));
}

DB.prototype.getNewsletters = function() {
  return this.data.newsletters;
};

module.exports = DB;

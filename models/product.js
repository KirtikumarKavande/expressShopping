const dirPath = require("../util/path");
const path = require("path");
const fs = require("fs");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(dirPath, "data", "product.json");

    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(dirPath, "data", "product.json");

   return fs.readFile(p, (err, fileContent) => {
      if (err) {
        // return [];
        cb([])
      }
    //   return JSON.parse(fileContent);
    cb(JSON.parse(fileContent))
    });
  }
};

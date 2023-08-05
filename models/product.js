const products=[]
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save(){
    console.log('this',this)
    products.push(this)

  }

  static fetchAll(){
    return products
  }
};

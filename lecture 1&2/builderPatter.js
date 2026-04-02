class Product {
  #name = "nothing";
  #price = "nothing";
  #type = "nothing";
  constructor(builder) {
    this.#name = builder.name;
    if (builder.price > 0) {
      this.#price = builder.price;
    } else {
      return {};
    }
    this.#type = builder.type;
  }

  displayProduct() {
    console.log("displayed Product is : " + this.#name + " price is:  "+ this.#price+" type of product: "+ this.#type);
  }

  static get Builder() {
    class Builder {
      constructor(name, price, type) {
        this.name = "";
        this.price = 0;
        this.type = "";
      }
      setName(name) {
        this.name = name;
        return this;
      }
      setPrice(price) {
        this.price = price;
        return this;
      }
      setType(type) {
        this.type = type;
        return this;
      }

      build() {
        return new Product(this);
      }
    }
    return Builder;
  }
}


let p = new Product.Builder()
                .setName("iphone")
                .setPrice(1000)
                .setType("phone")
                .build();
p.displayProduct();
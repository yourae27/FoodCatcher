const MaterialPrice = require("./config.js");

class Material{
    constructor(name) {
        this.name = name;
        this.price = this.getPrice(name);
    }

    getPrice(name) {
        return MaterialPrice[name];
    }

    
}

module.exports = Material
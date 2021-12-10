function CarsObjectModel(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let setOfCars = [];

let brands = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "BYD",
    "Tesla",
];
let models = [
    "500C",
    "Giulietta",
    "DB9",
    "A4",
    "Continental GT",
    "Serie 3",
    "E6",
    "Model 3",
];
let years = [2014, 2010, 2004, 1995, 2003, 1975, 2010, 2020];

for (let i = 0; i < 8; i++) {
    setOfCars.push(new CarsObjectModel(brands[i], models[i], years[i]));
}

console.log(setOfCars);

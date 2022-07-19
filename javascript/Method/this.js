const cat = {
  name: "Blue Steele",
  color: "gray",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name}`);
  },
};

cat.meow();
const meow2 = cat.meow;
meow2();

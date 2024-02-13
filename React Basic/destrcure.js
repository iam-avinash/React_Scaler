let person = {
  name: "alex",
  age: "25",
  role: "SDE",
  place: "Delhi",
  salary: "no Idea",
};

// let name = person.name;
// console.log(name);

let { name, age, role } = person;
console.log(name, age, role);

let { place: placeofPerson } = person;
console.log(placeofPerson);

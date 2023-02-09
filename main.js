const persons = [
  {
    id: 1,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 2,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 3,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041,
  },
  {
    id: 4,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "female",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012,
  },
];

function findID(idHuman) {
  let personsID = persons.find((item) => item.id == idHuman);
  return personsID;
}

console.log(findID(1));

function findGender(genderHuman) {
  const personsGender = persons.filter((item) => item.gender == genderHuman);
  return personsGender;
}

console.log(findGender("male"));

function addOBJleft(leftOBJ) {
  return persons.unshift(leftOBJ);
}

console.log(addOBJleft("Huseyn Ahadzada"));

function addOBJright(rightOBJ) {
  return persons.push(rightOBJ);
}

console.log(addOBJright("Ayxan Mustafayev"));

function genderEvery(argsEvery) {
  let personsEvery = persons.every((item) => item.gender == argsEvery);
  return personsEvery;
}

console.log(genderEvery("male"));

function genderSome(argsSome) {
  let personsSome = persons.some((item) => item.gender == argsSome);
  return personsSome;
}

console.log(genderSome("female"));


console.log(persons);

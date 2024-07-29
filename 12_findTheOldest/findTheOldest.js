const findTheOldest = function (people) {
    var oldestPerson = people.reduce((oldest, person) => {
        const age = getAge(person.yearOfBirth, person.yearOfDeath);
        return age > getAge(oldest.yearOfBirth, oldest.yearOfDeath) ? person : oldest;
    });
    return oldestPerson;

};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
// Do not edit below this line
module.exports = findTheOldest;

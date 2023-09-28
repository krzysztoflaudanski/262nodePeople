const fs = require('fs');

const genders = ['M', 'F'];

const female = [
  "Anna", "Maria", "Katarzyna", "Małgorzata", "Agnieszka", "Ewa", "Joanna", "Magdalena", "Aleksandra", "Natalia",
  "Dorota", "Iwona", "Patrycja", "Justyna", "Monika", "Karolina", "Kamila", "Barbara", "Aneta", "Kinga",
  "Paulina", "Renata", "Martyna", "Alicja", "Izabela", "Marzena", "Ola", "Karina", "Ania", "Klaudia",
  "Nina", "Klaudia", "Weronika", "Daria", "Dominika", "Elżbieta", "Aurelia", "Jolanta", "Ewelina", "Agata",
  "Marta", "Nadia", "Olga", "Sylwia", "Kornelia", "Kaja", "Elena", "Ilona", "Amelia", "Rozalia"
];

const male = [
  "Adam", "Piotr", "Krzysztof", "Tomasz", "Andrzej", "Jan", "Michał", "Marek", "Łukasz", "Rafał",
  "Daniel", "Wojciech", "Sebastian", "Bartosz", "Artur", "Filip", "Damian", "Mariusz", "Arkadiusz", "Grzegorz",
  "Dariusz", "Sławomir", "Tadeusz", "Mikołaj", "Dawid", "Radosław", "Jacek", "Kamil", "Kacper", "Jarek",
  "Robert", "Tadek", "Przemysław", "Błażej", "Kuba", "Paweł", "Mateusz", "Łukasz", "Maksymilian", "Maciej",
  "Bartłomiej", "Dominik", "Piotrek", "Hubert", "Adrian", "Mikołaj", "Józef", "Kornel", "Bogdan", "Zbigniew"
];

const lastName = [
  "Nowak", "Kowalski", "Wiśniewski", "Wójcik", "Kowalczyk", "Kamiński", "Lewandowski", "Zieliński", "Szymański", "Woźniak",
  "Dąbrowski", "Kozłowski", "Jankowski", "Mazur", "Wojciechowski", "Kwiatkowski", "Krawczyk", "Kaczmarek", "Piotrowski", "Grabowski",
  "Zając", "Pawłowski", "Michalski", "Król", "Nowakowski", "Wieczorek", "Jabłoński", "Dudek", "Adamczyk", "Majewski",
  "Witkowski", "Walczak", "Stępień", "Gajewski", "Pawlak", "Malinowski", "Rutkowski", "Michalak", "Sikora", "Olszewski",
  "Jaworski", "Wróbel", "Nowicki", "Bednarek", "Domański", "Zalewski", "Pająk", "Górski", "Tomczak", "Lis"
];

function randChoice(arr) {
  const elem = Math.floor(Math.random() * arr.length);
  return arr[elem]
}

const people = [];

for (let i = 0; i < 20; i++) {
  const person = { gender: randChoice(genders) };
  if (person.gender === 'M') {
    person.firstName = randChoice(male)
  }
  else {
    person.firstName = randChoice(female)
  }
  const lastNameIndex = Math.floor(Math.random() * lastName.length);
  person.lastName = lastName[lastNameIndex];
  person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
  people.push(person);
}

const json = JSON.stringify(people)

fs.writeFile('people.json', json, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

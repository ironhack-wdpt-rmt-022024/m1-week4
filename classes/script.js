//Class class class :)
class Animal {
  //default values can be assigned in the constructor
  constructor(name = "buddy", species, age, size) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.size = size;
    this.eyes = 2;
    this.toys = [];
  }
  //method example
  addToy(aNewToy) {
    this.toys.push(aNewToy);
    console.log("toy added", this.toys);
  }
  takeToyAway() {
    this.toys.pop();
    console.log("A toy was taken away, he is in time out");
  }
  loggingThis() {
    console.log(this);
  }
}

class Dog extends Animal {
  constructor(name, age, size) {
    super(name, "Dog", age, size);
  }
  //****************naming the same method in a child class will overwrite the parent*********** */
  //   addToy(toy) {
  //     this.toys.push(toy);
  //     console.log("toy was added, woof woof", this.toys);
  //   }

  addMultipleToys(arrayOfToys) {
    //make a loop to loop over the array and add each toy to the array
    arrayOfToys.forEach((toy) => {
      this.addToy(toy);
    });
    console.log("This dog is a happy dog", this.toys);
  }

  speak() {
    return "WOOF WOOF!";
  }
}

const myDog = new Dog("Ragnar", 3, 30);
const myOldDog = new Dog("Thumper", 13, 8);
const houseCat = new Animal("Papaya", "cat", 8, 5);
//test for default value and to show the order matters for the constructor
// const test = new Animal(3, 55, "bird", "big bird");
// myDog.addToy("rope");
// myDog.addToy("squeeky toy!!!");
// myDog.takeToyAway();
// myDog.addToy("rope");
// houseCat.addToy("bell");
// myDog.addMultipleToys(["rope", "ball", "stick"]);
// console.log(houseCat.addToy("feather"));

// const whatMyDogSaid = myDog.speak();
// console.log(whatMyDogSaid);
// myDog.loggingThis();
// houseCat.loggingThis();

//***********extra info *****************/
//all the naming conventions
//camelCase = thisIsCamelCase
//kebab-case = separated by -
//snake_case = separated by _
//PascalCase = ThisIsPascalCase
//*******************Class activity ************* */
class SuperHero {
  //make a private value that you can access from inside the class
  #secretId;
  constructor(name, hiddenId) {
    this.name = name;
    this.#secretId = hiddenId;
  }
  revealId() {
    console.log("the real id is...", this.#secretId);
  }
}
const Batman = new SuperHero("Batman", "Bruce Wayne");
console.log(Batman.name);
console.log("the secret id is...", Batman.secretId);
Batman.revealId();
class SuperVillain {
  //static methods, these point to the actual class and not the new instance of the class
  static numberOfVillains = 0;
  static villainCount() {
    console.log(
      "the number of villains is ... ",
      SuperVillain.numberOfVillains
    );
  }
  constructor(name, universe, nemesis) {
    this.name = name;
    this.universe = universe;
    this.nemesis = nemesis;
    this.victims = [];
    //this increments the global count of villains, every time a new one is created
    SuperVillain.numberOfVillains++;
  }
  newAppearance(show) {
    this.show = show;
  }
}
const theJoker = new SuperVillain("Joker", "DC", "Bruce Wayne");
// console.log(theJoker);
// theJoker.newAppearance("deadpool");
// console.log(theJoker);

class DCVillain extends SuperVillain {
  constructor(name, nemesis) {
    super(name, "DC", nemesis);
  }
}

class MarvelVillain extends SuperVillain {
  constructor(name, nemesis) {
    super(name, "Marvel", nemesis);
  }
}

const MrFreeze = new DCVillain("MrFreeze", "Batman");
const Thanos = new MarvelVillain("Thanos", "The Avengers");
const Bane = new DCVillain("Bane", "Batman");
SuperVillain.villainCount();

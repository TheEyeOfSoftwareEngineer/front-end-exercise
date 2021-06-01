class Father {
  constructor() {
    this.age = 40;
    this.name = "jack";
  }

  sayAge() {
    return this.age;
  }

  saySex() {
    return "male";
  }
}

class Son extends Father {
  constructor() {
    super();
    this.name = "tom";
    this.age = 18;    
  }

  sayName() {
    return this.name;
  }

}

const son = new Son();
const father = new Father();

console.log(son.sayName());

//console.log(father.sayName());
console.log(son.saySex());
console.log(son.sayAge());
console.log(father.saySex());
console.log(father.sayAge());

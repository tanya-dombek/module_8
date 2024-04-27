// 8.7.1

function printInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
  
const person = {
    name: 'John',
    age: 23
}

printInfo.call(person);

// 8.7.2

function calculate(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
        break;
      case '-':
        return a - b;
        break;
      case '/':
        if (b === 0) {
          return "Ошибка: деление на ноль";
        } else {
          return a / b;
        }
        break;
      case '*':
        return a * b;
        break;
      default:
        return "Неподдерживаемая операция";
    }
  }
  
calculate.apply(null, [2, 3, "+"]);

// 8.7.3

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Sam', age: 30 },
    { name: 'John', age: 18 }
];

const adults = users.filter(user => user.age >= 18);

const names = adults.map(user => user.name);

// 8.7.4

const person = {
    name: 'John',
    age: 23
};

function setFullName(fullName) {
    this.fullName = fullName;
}

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

// 8.7.5

function uniqueSortedNumbers(arr) {
    const uniqueArr = new Set(arr);
    return Array.from(uniqueArr).sort((a, b) => a - b);
}
  
const numbers = [5, 2, 1, 2, 4, 5, 3, 10];
const uniqueSortedArr = uniqueSortedNumbers(numbers);
function createCounter(initial) {
  let value = initial;

  return {
    increment: function () {
      value++;
      return value;
    },

    decrement: function () {
      value--;
      return value;
    },

    getValue: function () {
      return value;
    },

    reset: function () {
      value = initial;
      return value;
    }
  };
}

// Перевірка роботи лічильника
const counter = createCounter(10);

let output = "";

output += "Початкове значення: " + counter.getValue() + "\n";
output += "Після increment(): " + counter.increment() + "\n";
output += "Після increment(): " + counter.increment() + "\n";
output += "Після decrement(): " + counter.decrement() + "\n";
output += "Поточне значення: " + counter.getValue() + "\n";
output += "Після reset(): " + counter.reset() + "\n";
output += "Після getValue(): " + counter.getValue() + "\n";

document.getElementById("result").innerText = output;

console.log(counter.getValue());
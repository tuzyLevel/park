let command = null;
let todos = [];

while (true) {
  command = prompt("Enter the command");
  command = command.toLowerCase();
  let input = null;
  if (command === "new") {
    input = prompt("Enter the todo things");
    todos.push(input);
    console.log(`${input} added to list`);
  } else if (command === "list") {
    console.log("**************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("**************");
  } else if (command === "delete") {
    input = parseInt(
      prompt("Enter the number of todo that is wanted to delete")
    );
    if (typeof input === "number" && !Number.isNaN(input)) {
      todos.splice(input, 1);
    } else {
      console.log("you enter wrong type do again!");
    }
  } else if (command === "quit") {
    break;
  }
}

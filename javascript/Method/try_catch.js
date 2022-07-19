// try {
//   hello.toUpperCase();
// } catch (err) {
//   console.error(err);
// }

// console.log("eeeeee");

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log("Please pass a string next time!");
  }
}

yell(333333);

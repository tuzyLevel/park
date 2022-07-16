console.log(__filename);

// 전역 this는 module.exports 가리키고있다.
console.log(this);
console.log(this === module.exports);
console.log(this === exports);

// 함수 내의 this는 global객체로 바인딩 된다.
function whatIsThis() {
  console.log("function", this === exports, this === global);
}
whatIsThis();

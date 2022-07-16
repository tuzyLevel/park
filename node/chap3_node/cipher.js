const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "1234567890123456"; //initial vector

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update("password", "utf-8", "base64");
result += cipher.final("base64");
console.log("encrypted : ", result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, "base64", "utf-8");
result2 += decipher.final("utf-8");
console.log("decrypted : ", result2);

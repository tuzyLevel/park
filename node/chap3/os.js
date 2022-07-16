const os = require("os");

console.log("operation system info");
console.log(os.arch());

console.log("os.platform(): ", os.platform());
console.log("os.type(): ", os.type());
console.log("os.uptime(): ", os.uptime());

console.log("os.hostname(): ", os.hostname());
console.log("os.release(): ", os.release());

console.log("path--------");
console.log("os.homedir()", os.homedir());
console.log(os.tmpdir());

console.log("cpu info---");
console.log(os.cpus());
console.log(os.cpus().length);

console.log(os.freemem());
console.log(os.totalmem() / 1024 ** 3 + "GB");

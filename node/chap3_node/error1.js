setInterval(() => {
  console.log("start");
  try {
    throw new Error("I will break the server");
  } catch (err) {
    console.error(err);
  }
}, 1000);

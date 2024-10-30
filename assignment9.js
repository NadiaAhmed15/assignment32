
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


delay(1000).then(() => console.log("Hi good morning"));

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      resolve(randomNumber);
    }, 2000);
  });
}

fetchData().then(data => console.log("Fetched data:", data));

function processData(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data * 2);
    }, 1000);
  });
}

processData(50).then(result => console.log("Processed data:", result));

fetchData()
  .then(data => processData(data))
  .then(result => console.log("Final result:", result))
  .catch(error => console.error("An error:", error));

let btn = document.getElementById("btn");
let input = document.getElementById("input");
let box = document.getElementById("box");

btn.addEventListener("click", async () => {
  try {
    let api = `http://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${input.value}`;
    let rawData = await fetch(api);
    let data = await rawData.json();
    box.innerText = data.current.temp_c;
  } catch (error) {
    console.log(error);
  }
});

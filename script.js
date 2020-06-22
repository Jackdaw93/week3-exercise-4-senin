let endpoint = `https://restcountries.eu/rest/v2/all`;
let options = {
  method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
};

let newElement = document.querySelector(".container .part1 ul");
let newElement2 = document.querySelector(".container .part1 p");

fetch(endpoint, options)
  .then((response) => response.json())
  .then((results) => {
    console.log(results);
    results.forEach((result) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const teks = document.createTextNode(result.name);
      // console.log(teks);
      img.setAttribute("src", result.flag);
      li.appendChild(img);
      newElement.appendChild(li);
      li.appendChild(teks);
    });
  })
  .catch((error) => console.log(error));

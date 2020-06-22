let endpoint = `https://restcountries.eu/rest/v2/all`;
let options = {
  method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
};

// let newElement = document.querySelector(".container .part1 ul");
// let newElement2 = document.querySelector(".container .part1 p");

// fetch(endpoint, options)
//   .then((response) => response.json())
//   .then((results) => {
//     results.forEach((result) => {
//       // const li = document.createElement("li");
//       // const img = document.createElement("img");
//       // const teks = document.createTextNode(result.name);
//       // // console.log(teks);
//       // img.setAttribute("src", result.flag);
//       // li.appendChild(img);
//       // newElement.appendChild(li);
//       // li.appendChild(teks);

// //       showing.innerHTML = `
// // <div class="card" style="width: 18rem;">
// //       <img src="${result.flag}" class="card-img-top" alt="...">
// //       <div class="card-body"></div>
// //       <ul class="list-group list-group-flush">
// //       <h5 class="card-title">${result.name}</h5>
// //       </ul>
// // </div>

// //       `;
// //     });
// //   })
// //   .catch((error) => console.log(error));

let position = document.querySelector(".show");

fetch(endpoint, options)
  .then((response) => response.json())
  .then((results) => {
    for (let data in results) {
      let card = document.createElement("div");
      card.innerHTML = `
      <div class="card rounded" style="width: 18rem;">
      <img src="${results[data].flag}" class="card-img-top" alt="...">
      <div class="card-body">
      
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item"> <h5 class="card-title text-center">${results[data].name}</h5></li>
     
      </ul>
    </div>
    `;
      position.appendChild(card);
    }
  });

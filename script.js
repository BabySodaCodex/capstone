alert ("hello");

//let searchBox = document.getElementById("search-box");
let goButton = document.getElementById("go-button");
let petSelect = document.getElementById("pet-select");

//goButton.addEventListener("click", function () {
// document.getElementById("results-list").textContent = searchBox.value;
//});

async function loadDogs() {
  //Fetching Data
  let response = await fetch(
    "https://student-data-api.rhyantotherescue-d9d.workers.dev/api/v1/datasets/Dogs/records?search=" +
      petSelect.value,
  );
  console.log("Status: " + response.status);
  console.log(
    "https://student-data-api.rhyantotherescue-d9d.workers.dev/api/v1/datasets/Dogs/records?search=" +
      petSelect.value,
  );
  let data = await response.json();
  let dogs = data.records;
  console.log("Records: " + dogs.length);

  //Clear Previous Results
  //document.getElementById("result-1").textContent = "";
  //document.getElementById("result-2").textContent = "";
  //document.getElementById("result-3").textContent = "";

  //Displaying Results
  // document.getElementById("result-1").textContent = dogs[0].Name + " lives at least " + dogs[0]["Minimum Life Span"] + " years.";
  // document.getElementById("result-2").textContent = dogs[1].Name + " lives at least " + dogs[1]["Minimum Life Span"] + " years.";
  //document.getElementById("result-3").textContent = dogs[2].Name + " lives at least " + dogs[2]["Temperament"] + " years." + dogs[2]["Minimum Weight"] + "pounds.";
  document.getElementById("result-image").src = dogs[0]["Image"];
  document.getElementById("result-1").textContent = dogs[0]["Name"];
  document.getElementById("result-2").textContent =
    "Lives at least " + dogs[0]["Minimum Life Span"] + " years.";
  document.getElementById("result-3").textContent =
    "Temperment: " +
    dogs[0]["Temperament"] +
    " Minimum Weight: " +
    dogs[0]["Minimum Weight"] +
    " pounds.";

  //show card
  document.getElementById("results").style.display = "block";
}

goButton.addEventListener("click", loadDogs);
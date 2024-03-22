function update() {
  //  alert("클릭");

  const cities = ["Seoul", "Tokyo", "New York", "Paris"];
  const num = parseInt(Math.random() * cities.length);

  document.getElementById("location").innerHTML = cities[num];

  document.getElementById("degree").innerHTML = parseInt(Math.random() * 20);

  document.getElementById("sat-degree").innerHTML = parseInt(
    Math.random() * 15
  );

  document.getElementById("sun-degree").innerHTML = parseInt(
    Math.random() * 15
  );

  document.getElementById("mon-degree").innerHTML = parseInt(
    Math.random() * 15
  );

  document.getElementById("tue-degree").innerHTML = parseInt(
    Math.random() * 15
  );
}

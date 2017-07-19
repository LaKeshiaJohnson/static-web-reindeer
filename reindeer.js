var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


for (let i = 0; i < reindeer.length; i++) {

  reindeerName = `<p>${colors[i] + " " + reindeer[i]}</p>`;

	//console.log(reindeerName);

var hohohoElement = document.getElementById("reindeer");

	hohohoElement.innerHTML += reindeerName;


}
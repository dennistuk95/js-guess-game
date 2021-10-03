const myColorArray = ["yellow", "blue", "red", "orange"];

// oude manieren
let i = 0;
while (i < myColorArray.length) {
    console.log(myColorArray[i]);
    i++;
}

for (let i = 0; i < myColorArray.length; i++) {
    console.log(myColorArray[i]);
}

// nieuwe manier met forEach
myColorArray.forEach((color) => console.log(color));



/*

De for loop neemt 5 regels in beslag
De forEach method neemt 1 regel in beslag

Een array method is makkelijker leesbaar omdat je eventuele fouten er direct uit haalt.

*/


const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
};

for (x in myColors) {
    console.log(myColors[x]);
}

  // Ja, je bent nu aan het itereren. Echter ben je aan het itereren over een OBJECT.
  // Array Methods zijn NIET beschikbaar op een object.
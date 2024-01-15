//opdrach1
const namen = ["Jan", "Piet", "Klaas", "Anna", "Emma", "Hugo", "Lotte", "Daan", "Femke", "Noah"];

console.log("Alle namen in de array:");
for (let i = 0; i < namen.length; i++) {
  console.log(namen[i]);
}
//opdrach2
namen.push("Sophie"); // Een nieuwe naam toevoegen met .push()

console.log("Alle namen in de array na het toevoegen van een nieuwe naam:");
for (let i = 0; i < namen.length; i++) {
  console.log(namen[i]);
}
//opdracht3
namen.splice(4, 1); // De vijfde naam verwijderen (index 4)

console.log("Alle namen in de array na het verwijderen van de vijfde naam:");
for (let i = 0; i < namen.length; i++) {
  console.log(namen[i]);
}
//opdracht4
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffleArray(namen); // Array shufflen

console.log("Nieuwe volgorde van de passagierslijst na het shufflen:");
for (let i = 0; i < namen.length; i++) {
  console.log(namen[i]);
}
//opdrach5
console.log("Passagiers stappen één voor één uit:");
while (namen.length > 0) {
  const uitgestaptePassagier = namen.shift();
  console.log(`Passagier ${uitgestaptePassagier} is uitgestapt.`);
  console.log(`Aantal passagiers nog in de bus: ${namen.length}`);
}

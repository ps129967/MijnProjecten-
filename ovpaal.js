const klanten = [
  {
    id: 163821,
    naam: "Leo Daams",
    saldo: 34,
    woonplaats: "Den Bosch"
  },
  {
    id: 145032,
    naam: "Nicole Hops",
    saldo: 18,
    woonplaats: "Maastricht"
  }
];

console.log(klanten[0]); // Displays the first customer object
console.log(klanten[1].naam); // Displays the name of the second customer

klanten[0].saldo = 40; // Update the balance of the first customer

klanten.push({
  id: 238941,
  naam: "Laura Jansen",
  saldo: 12,
  woonplaats: "Amsterdam"
});

klanten.push({
  id: 876543,
  naam: "Peter de Vries",
  saldo: 27,
  woonplaats: "Utrecht"
});

const passagierId = 163821; // ID of the passenger to be removed

const passagierIndex = klanten.findIndex(passagier => passagier.id === passagierId);

if (passagierIndex !== -1) {
  klanten.splice(passagierIndex, 1);
  console.log(`Passagier met ID ${passagierId} is verwijderd uit het systeem.`);
} else {
  console.log("Passagier niet gevonden");
}

console.log("Lijst met passagiers:");
klanten.forEach(passagier => {
  console.log(`ID: ${passagier.id}, Naam: ${passagier.naam}, Saldo: ${passagier.saldo}, Woonplaats: ${passagier.woonplaats}`);
});

const passagierId = 163821; // ID of the passenger

const passagier = klanten.find(passagier => passagier.id === passagierId);

if (passagier) {
  const incheckBedrag = 5; // Amount while checking in
  const uitcheckBedrag = 2; // Amount while checking out

  passagier.saldo -= incheckBedrag;
  speelGeluid("incheck-geluid");

  passagier.saldo -= uitcheckBedrag;
  speelGeluid("uitcheck-geluid");

  console.log(`Nieuw saldo van passagier ${passagier.naam}: ${passagier.saldo}`);
} else {
  console.log("Passagier niet gevonden");
}

function speelGeluid(geluidId) {
  const audioElement = document.getElementById(geluidId);
  audioElement.play();
}

const passagierId = 163821; // ID of the passenger

const passagier = klanten.find(passagier => passagier.id === passagierId);

if (passagier) {
  const passagierAfbeelding = document.getElementById("passagier-afbeelding");
  passagierAfbeelding.src = passagier.afbeelding;

  console.log(`Afbeelding van passagier ${passagier.naam} is weergegeven.`);
} else {
  console.log("Passagier niet gevonden");
}

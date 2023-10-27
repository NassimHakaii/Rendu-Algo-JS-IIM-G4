const musiques = ["Zoo - Kaaris", "Scarface - Booba", "Jul - Ma Jolie", "Rose - Ninho", "Anissa - Wejdene"];

function jouerMusique(musiques) {
  const musiqueAleatoire = musiques[Math.floor(Math.random() * musiques.length)];
  return musiqueAleatoire;
}

const john = { prenom: "John", santeMentale: 10 };
const trajetJohn = { radio: "Radio", feuxRouges: Array(30).fill(), changements: 0 };

trajetEnTaxi(john, trajetJohn);
function trajetEnTaxi(personnage, trajet) {
  let feuRouge = 1;
  while (feuRouge <= trajet.feuxRouges.length) {
    if (personnage.santeMentale <= 0) {
      console.log("La santé mentale de " + personnage.prenom + " est à zéro. Il ne peut plus continuer.");
      break;
    }

    const musique = jouerMusique(musiques);
    console.log("Feu rouge " + feuRouge + ": Musique jouée - " + musique + ", Feux restants - " + (trajet.feuxRouges.length - feuRouge));
    feuRouge++;

    if (musique === "Anissa - Wejdene") {
      personnage.santeMentale -- ;
      trajet.changements ++;
      console.log(personnage.prenom + " a perdu 1 de santé mentale et a changé de taxi.");
    } else {
      console.log(personnage.prenom + " reste dans le même taxi.");
    }
  }

  if (personnage.santeMentale > 0) {
    console.log(personnage.prenom + " est bien arrivé à destination après " + trajet.changements + " changements de taxi.");
  }
}

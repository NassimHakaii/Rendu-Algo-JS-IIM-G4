const caracteristiques = [
  { nom: "blonde", probaMourir: 0.3, probaInfligerDegats: 0.5, probaMourirEnInfligeantDegats: 0.2 },
  { nom: "nerd", probaMourir: 0.2, probaInfligerDegats: 0.6, probaMourirEnInfligeantDegats: 0.1 },
  { nom: "sportif", probaMourir: 0.4, probaInfligerDegats: 0.4, probaMourirEnInfligeantDegats: 0.2 },
  { nom: "beau gosse", probaMourir: 0.1, probaInfligerDegats: 0.7, probaMourirEnInInfligeantDegats: 0.2 },
  { nom: "populaire", probaMourir: 0.3, probaInfligerDegats: 0.4, probaMourirEnInInfligeantDegats: 0.3 }
];

const prenoms = ["Alicia", "Pierre", "Carol", "Dave", "Leva"];

class Jason {
  constructor() {
    this.nom = "Jason";
    this.pointsDeVie = 100;
  }

  attaquer(survivant) {
    const proba = Math.random();
    if (proba < survivant.caracteristique.probaMourir) {
      console.log(survivant.nom + " la/la " + survivant.caracteristique.nom + " a attaqué Jason mais a malheureusement été tué.");
      survivant.pointsDeVie = 0;
    } else if (proba < survivant.caracteristique.probaInfligerDegats) {
      this.pointsDeVie -= 10;
      console.log(survivant.nom + " le/la " + survivant.caracteristique.nom + " a réussi à infliger 10 points de dégâts à Jason et esquivé l'attaque de Jason.");
    } else if (proba < survivant.caracteristique.probaMourirEnInfligeantDegats) {
      this.pointsDeVie -= 15;
      console.log(survivant.nom + " le/la " + survivant.caracteristique.nom + " a infligé 15 points de dégâts à Jason, mais malheureusement, il est décédé.");
      survivant.pointsDeVie = 0;
    } else {
      console.log(survivant.nom + " le/la " + survivant.caracteristique.nom + " a attaqué Jason, mais rien de spécial ne s'est produit.");
    }
  }
}

class Survivant {
  constructor(prenom, caracteristique) {
    this.nom = prenom;
    this.caracteristique = caracteristique;
    this.pointsDeVie = 100;
  }
}

function attribuerCaracteristiques() {
  const caracteristiquesDisponibles = [...caracteristiques];
  const survivants = [];

  for (const prenom of prenoms) {
    if (caracteristiquesDisponibles.length > 0) {
      const index = Math.floor(Math.random() * caracteristiquesDisponibles.length);
      const caracteristiqueAttribuee = caracteristiquesDisponibles.splice(index, 1)[0];
      const survivant = new Survivant(prenom, caracteristiqueAttribuee);
      survivants.push(survivant);
    }
  }

  return survivants;
}

const jason = new Jason();
const survivants = attribuerCaracteristiques();

while (jason.pointsDeVie > 0 && survivants.some(survivant => survivant.pointsDeVie > 0)) {
  console.log("Tour de " + jason.nom + ":");
  survivants.forEach(survivant => {
    if (survivant.pointsDeVie > 0) {
      jason.attaquer(survivant);
    }
  });
}

if (jason.pointsDeVie <= 0) {
  const survivantsMorts = survivants.filter(survivant => survivant.pointsDeVie <= 0);
  console.log("Les survivants ont gagné, " + jason.nom + " est mort. Survivants morts : " + survivantsMorts.map(survivant => survivant.nom).join(", "));
} else {
  const survivantsMorts = survivants.filter(survivant => survivant.pointsDeVie <= 0);
  console.log("Jason a gagné. Survivants morts : " + survivantsMorts.map(survivant => survivant.nom).join(", "));
}

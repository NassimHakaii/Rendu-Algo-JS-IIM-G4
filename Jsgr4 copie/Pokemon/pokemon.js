class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    return Math.random() * 100 < this.luck;
  }

  attackPokemon(target) {
    if (this.isLucky()) {
      const damage = this.attack - target.defense;
      if (damage > 0) {
        target.hp -= damage;
      }
      console.log(this.name + " attaque " + target.name + ", inflige " + damage + " dégâts.");
      console.log(target.name + " a maintenant " + target.hp + " points de vie.");
      if (target.hp <= 0) {
        console.log(target.name + " est KO.");
      }
    } else {
      console.log(this.name + " rate son attaque contre " + target.name + ".");
    }
  }
}

const pokemon1 = new Pokemon("Charizard", 60, 40, 100, 70);
const pokemon2 = new Pokemon("Bulbasaur", 50, 35, 100, 60);

while (pokemon1.hp > 0 && pokemon2.hp > 0) {
  if (pokemon1.isLucky()) {
    pokemon1.attackPokemon(pokemon2);
  } else {
    console.log(pokemon1.name + " rate son attaque contre " + pokemon2.name + ".");
  }
  
  if (pokemon2.hp <= 0) {
    break;
  }

  if (pokemon2.isLucky()) {
    pokemon2.attackPokemon(pokemon1);
  } else {
    console.log(pokemon2.name + " rate son attaque contre " + pokemon1.name + ".");
  }

  if (pokemon1.hp <= 0) {
    break;
  }
}

if (pokemon1.hp <= 0) {
  console.log(pokemon1.name + " a perdu le combat.");
} else if (pokemon2.hp <= 0) {
  console.log(pokemon2.name + " a perdu le combat.");
}

  
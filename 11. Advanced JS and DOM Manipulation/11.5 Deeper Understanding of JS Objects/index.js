let housekeeper1 = {
    name: 'jane',
    yearsOfExperience: 12,
    cleaningRepertoire: ['bedroom', 'bathroom', 'lobby']
}

function HouseKeeper(name, yearsOfExperience, cleaningRepertoire){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
}

const housekeeper2 = new HouseKeeper('matilda', 10, ['bedroom', 'kitchen']);
console.log(housekeeper2);
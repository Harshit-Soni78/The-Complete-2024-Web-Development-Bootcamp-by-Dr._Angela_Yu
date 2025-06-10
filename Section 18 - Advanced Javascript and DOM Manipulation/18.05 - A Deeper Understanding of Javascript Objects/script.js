var housekeeper = {
    name: "Geovana",
    yearsOfExperience: 2,
    cleaningRepertoire: ["Bathroom", "Lobby", "Bedroom"],
    clean: function(){
        alert("Cleaning in progress...");
    }
};

console.log(housekeeper);
console.log(housekeeper.name);

function Housekeeper(name, yearsOfExperience, cleaningRepertoire){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function(){
        alert("Cleaning in progress...");
    }
}

var nataly = new Housekeeper("Nataly", 5, ["Bathroom", "Lobby", "Bedroom"]);
console.log(nataly);
console.log(nataly.name);

nataly.clean();

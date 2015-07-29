var SolarSystem = (function() {
	var planets = [];
	var	planetsLandedOn = 0;
	var activeSpacecraft = [];

planets.push("Mercury", "Venus", "Earth", "Mars");
planets.push("Jupiter", "Saturn", "Uranus", "Neptune");



  return {
    manufacture_date: new Date(),
    addSpacecraft: function(Spacecraft) {
      activeSpacecraft.push(Spacecraft);
    },
    getSpacecraft: function() {
    	return activeSpacecraft;
    },
    setPlanetsLandedOn: function(count) {
    	if (count < 0 || count > planet.length) {
    		throw "I don't think so. There are only " + planets.length + " planets.";
    	} else {
    	planetsLandedOn = count;
     }
    },
        getPlanetsLandedOn: function() {
    	 return planetsLandedOn;
    },
    getPlanets: function() {
    	return planets;
    }
  };
})();

SolarSystem.addSpacecraft("New Horizon");
SolarSystem.addSpacecraft("Voyager 1");
SolarSystem.addSpacecraft("Voyager 2");

console.log(SolarSystem.getPlanets());
console.log(SolarSystem.getPlanetsLandedOn());
console.log(SolarSystem.getSpacecraft());

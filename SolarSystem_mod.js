// Getter for an array of closest 5 stars to the Sun.
// Getter/setter for the estimated age of the solar system in earth years.
// Getter/setter for array of known dwarf planets.





var SolarSystem = (function (ss) {
	var closestStars = ["Alpha Centauri", " Bernard's Star", "Luhman 16", "Wolf 359", "Deathstar"];
	var	ageOfSolarSystem = 0;
	var dwarfPlanets = ["Pluto", "Ceres", "Eris", "Haumea", "Makemake"];



    ss.getClosestStar = function() {
      return closestStars;
    };

    ss.getAge = function() {
    	return ageOfSolarSystem;
    };

    ss.setAge = function(age) {
    	ageOfSolarSystem = age;
    };

    ss.getDwarfPlanets = function() {
    	return dwarfPlanets;
    };

    ss.addDwardfPlanets = function(planetoid) {
    	dwarfPlanets.push(planetoid);
    };

    	return ss;

})(SolarSystem);

console.log("SolarSystem", SolarSystem)

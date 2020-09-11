/**
Players move from island to island

Vehicle
- car
- bike

Islands are connected (bidirectional)
- wooden bridge (bikes only)
- metal bridge (car and bike)

Extenstions
- helicoptor, heli routes
- garage, switch vehicle
*/

/*
 *
 * Rules...
 *
 * - Players take turns moving from island to island
 * - Players can switch cars if their current island has a garage, but this will end their turn.
 *
 */
class Game {
  
  constructor(players, startIsland) {
    this.players = players;
    this.startIsland = startIsland;
  }

  /*
   * Add a new player to the game.
   * 
   * The player begins at the starting island.
   *
   * @return {Player}
   */  
  addPlayer(player) {

   const newVehicle = new Car(this.startIsland);

   const newPlayer = new Player(newVehicle);

   this.players.push(newPlayer);

   return newPlayer;
  }
  
  nextTurn() {
   
    // Loop through all active players
    this.players.forEach((player) => {
      
      const numHops = player.vehicle.numHops;
      
      const switchAvailable = player.vehicle.island.hasGarage;
      
      // TODO: Present player with option to switch cars
      // Wait on input
      
      const userWantsToSwitch = ...;
      
      if (userWantsToSwitch) {
        // Switch cars
        const newVehicle = ...;
        player.swapVehicle(newVehicle);
      } else {
      
        for (let i=0; i<numHops; i+=1) {
          const options = player.vehicle.island.getMoveOptions(player.vehicle));

          // Present options to each player
          // Wait on user input
          const selectedIsland =...;


          // Execute the selected move
          player.vehicle.setIsland(selectedIsland);
        }
    })
  }
  }
  
}

class Player {
 
  constructor(vehicle) {
    this.vehicle = vehicle;
  }
  
  setVehicle(vehicle) {
    this.vehicle = vehicle;
  }
}

class Vehicle {
 
  constructor(island) {
    this.island = island;
  }
  
  setIsland(island) {
    this.island = island;
  }
  
}

/*
 * Cars can make 2 hops per turn
 *
 */
class Car extends Vehicle {
  
  numHops = 2;
  
  constructor(island) {
    this.island = island;
  }
}

/*
 * Bikes can make 1 hop per turn
 *
 */
class Bike extends Vehicle {
  
  numHops = 1;
  
  constructor(island) {
    this.island = island;
  }
}

class Bridge {
  
  constructor (to, from) {
    this.to = to;
    this.from = from;
  }
  
  canFitVehicle() {
    // polymorhpic implementation in sub-classes
  }
}

class WoodenBridge {
 
  canFitVehicle(vehicle) {
    // Only fit bikes
    return vehicle instanceof Bike;
  }
}

class MetalBridge {
 
  canFitVehicle(vehicle) {
    // Only fit cars and bikes
    return vehicle instanceof Car || vehicle instanceof Bike;
  }
}

class Island {
  
  constructor(bridges, hasGarage) {
    this.bridges = bridges;
    this.hasGarage = hasGarage;
  }
  
  /*
   * Get all bridges the vehicle can cross
   *
   * @return {Array<Bridge>}
   */
  getMoveOptions(vehicle) {
    
    // Filtering bridge list based on given vehicle type
    return this.bridges.filter((bridge) => bridge.canFitVehicle(vehicle));
  }
}


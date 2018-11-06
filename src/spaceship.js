spaceshipId = 0

class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    this.id = ++spaceshipId

    if (crew.length == 0) {
      this.docked = true
    } else {
      this.docked = false
      this.addCrewToShip(crew)
    }
  }

  addCrewToShip(crew) {
    this.crew = crew

    for(const member of crew) {
      member.currentShip = this
    }
  }

}

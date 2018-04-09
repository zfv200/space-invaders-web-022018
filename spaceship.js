let galaxy = {ships: [], members:[]};

class Spaceship {
  constructor(name, crew, phasers, shields, cloaked=false, warpDrive='disengaged', phasersCharge='uncharged') {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge
    this.docked = (()=>this.crew.length===0 ? true : false)()
    galaxy.ships.push(this)
    this.crew.forEach((member)=>member.currentShip = this)
  }
}

class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = function () {
      let crewShip = (()=>galaxy.ships.filter(ship=>ship.crew.includes(this)))()
      if (crewShip.length===0) {
        return "Looking for a Rig"
      } else {
        return crewShip[0]
      }
    }()
  }

  engageWarpDrive() {
    if (this.currentShip==="Looking for a Rig") {
      return "had no effect"
    }
  }

  setsInvisibility() {
    if (this.currentShip==="Looking for a Rig") {
      return "had no effect"
    } else if (this.position==="Defender"){
      return this.currentShip.cloaked = true
    }
  }

  chargePhasers() {
    if (this.currentShip==="Looking for a Rig") {
      return "had no effect"
    }
  }
}

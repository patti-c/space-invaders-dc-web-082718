class CrewMember {

  constructor(position) {
    this.position = position;
    this.shipId = null;
    this.currentShip = "Looking for a Rig";
  }

  engageWarpDrive() {
    if(this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
    if(this.position === 'Pilot') {
      this.currentShip.warpDrive = 'engaged'
    }
  }

  setsInvisibility() {
    if(this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
    if(this.position === 'Defender') {
      this.currentShip.cloaked = true;
    }
  }

  chargePhasers() {
    if(this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
    if(this.position === 'Gunner') {
      this.currentShip.phasersCharge = 'charged';
    }
  }
}
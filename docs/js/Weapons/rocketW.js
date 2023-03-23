import { Rocket } from "../projectiles/rocket.js";
export class RocketW {
    constructor(tank) {
        console.log('created rocket');
        this.tank = tank;
    }
    fire() {
        console.log('firing rocket');
        return new Rocket(this.tank);
    }
}

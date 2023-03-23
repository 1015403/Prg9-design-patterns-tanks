import { Missile } from "../projectiles/missile.js";
export class MissileW {
    constructor(tank) {
        console.log('created missile');
        this.tank = tank;
    }
    fire() {
        console.log('firing missile');
        return new Missile(this.tank);
    }
}

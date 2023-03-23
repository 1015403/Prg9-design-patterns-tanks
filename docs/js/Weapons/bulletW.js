import { Bullet } from "../projectiles/bullet.js";
export class BulletW {
    constructor(tank) {
        console.log('created bullet');
        this.tank = tank;
    }
    fire() {
        console.log('firing bullet');
        return new Bullet(this.tank);
    }
}

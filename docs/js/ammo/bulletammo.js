import { Ammunition } from "./ammunition.js";
import { Tank } from "../tank.js";
import { BulletW } from "../Weapons/bulletW.js";
export class BulletAmmo extends Ammunition {
    constructor(position) {
        super("ammo-bullet", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.setWeapon(new BulletW(target));
        }
    }
}

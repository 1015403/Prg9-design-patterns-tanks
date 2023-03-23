import { Ammunition } from "./ammunition.js";
import { Tank } from "../tank.js";
import { MissileW } from "../Weapons/missileW.js";
export class MissileAmmo extends Ammunition {
    constructor(position) {
        super("ammo-missile", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.setWeapon(new MissileW(target));
        }
    }
}

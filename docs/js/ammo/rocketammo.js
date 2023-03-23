import { Ammunition } from "./ammunition.js";
import { Tank } from "../tank.js";
import { RocketW } from "../Weapons/rocketW.js";
export class RocketAmmo extends Ammunition {
    constructor(position) {
        super("ammo-rocket", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.setWeapon(new RocketW(target));
        }
    }
}

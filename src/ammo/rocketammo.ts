import { GameObject }       from "../gameobject.js";
import { Vector }           from "../vector.js";
import { Ammunition }       from "./ammunition.js";
import { Tank }             from "../tank.js";
import { RocketW }          from "../Weapons/rocketW.js";

export class RocketAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-rocket", position)
    }

    public onCollision(target: GameObject): void {
        if(target instanceof Tank) {
            target.setWeapon(new RocketW(target))
        }
    }
}

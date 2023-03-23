import { GameObject }       from "../gameobject.js";
import { Vector }           from "../vector.js";
import { Ammunition }       from "./ammunition.js";
import { Tank }             from "../tank.js";
import { BulletW }          from "../Weapons/bulletW.js";

export class BulletAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-bullet", position)
    }

    public onCollision(target: GameObject): void {
        if(target instanceof Tank) {
            target.setWeapon(new BulletW(target))
        }
    }
}

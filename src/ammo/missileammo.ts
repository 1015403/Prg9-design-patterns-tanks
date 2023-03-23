import { GameObject }       from "../gameobject.js";
import { Vector }           from "../vector.js";
import { Ammunition }       from "./ammunition.js";
import { Tank }             from "../tank.js";
import { MissileW }         from "../Weapons/missileW.js";

export class MissileAmmo extends Ammunition {
    constructor(position: Vector) {
        super("ammo-missile", position)
    }

    public onCollision(target: GameObject): void {
        if(target instanceof Tank) {
            target.setWeapon(new MissileW(target))
        }
    }
}

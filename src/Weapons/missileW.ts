import { Game } from "../game.js"
import { Missile } from "../projectiles/missile.js"
import { Tank } from "../tank.js"
import { Weapon } from "./weapon.js"
import { Projectile } from "../projectiles/projectile.js";

export class MissileW implements Weapon {
    private game: Game
    private tank: Tank

    constructor(tank: Tank){
        console.log('created missile')
        this.tank = tank;
    }
    public fire(): Projectile {
        console.log('firing missile')
        return new Missile(this.tank)
    }
}

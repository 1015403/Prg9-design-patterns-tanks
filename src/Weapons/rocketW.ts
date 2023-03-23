import { Game } from "../game.js"
import { Rocket } from "../projectiles/rocket.js"
import { Tank } from "../tank.js"
import { Weapon } from "./weapon.js"
import { Projectile } from "../projectiles/projectile.js";

export class RocketW implements Weapon {
    private game: Game
    private tank: Tank

    constructor(tank: Tank){
        console.log('created rocket')
        this.tank = tank;
    }
    public fire(): Projectile {
        console.log('firing rocket')
        return new Rocket(this.tank)
    }
}

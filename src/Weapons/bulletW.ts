import { Game } from "../game.js"
import { Bullet } from "../projectiles/bullet.js"
import { Tank } from "../tank.js"
import { Weapon } from "./weapon.js"
import { Projectile } from "../projectiles/projectile.js"

export class BulletW implements Weapon {
    private game: Game
    private tank: Tank

    constructor(tank: Tank){
        console.log('created bullet')
        this.tank = tank;
    }
    public fire(): Projectile {
        console.log('firing bullet')
        return new Bullet(this.tank)
    }
}

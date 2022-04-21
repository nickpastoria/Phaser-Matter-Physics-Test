class pf_Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene, world, x, y, texture) {
        super(world, x, y, texture);
        scene.add.existing(this);
        
        this.inputHandling(scene);
    }

    inputHandling(scene) {
        this.scene.input.keyboard.on('keydown', () => {
            console.log('A keydown was pressed!')
            this.applyForce(Phaser.Math.Vector2.UP);
        });
    }
}
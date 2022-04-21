class sc_Main extends Phaser.Scene {
    constructor() {
        super('sc_Main');
    }

    preload() {
        console.log('Hello from sc_Main');
        this.load.image('image_box', './assets/box.png');
    }

    create() {
        this.box = new pf_Player(this, this.matter.world, config.width/2, 10, 'image_box');
        this.ground = this.matter.add.rectangle(config.width/2, config.height, 300, 70, {isStatic: true});
    }
}
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
            gravity: {
                y: 0.5
            },
            debug: {
                showBody: true,
                showVelocity: true,
                showStaticBody: true
            }
        }
    },
    scene: [sc_Main]
};


let game = new Phaser.Game(config);
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.spritesheet('slow power',
        'assets/slow power up 1.png',
        70, 130);
    game.load.spritesheet('rewind power',
        'assets/rewind power up 1.png', 270, 120);
    game.load.spritesheet('battery down',
        'assets/battery down.png', 300, 150);
    game.load.spritesheet('battery up',
        'assets/battery up 2.png', 250, 100);
    game.load.spritesheet('freexe power',
        'assets/freexe power up.png', 150, 200);
    game.load.spritesheet('redcar', 'assets/pixel art car 1 version 2.0.png', 60, 25);
    game.load.spritesheet('bluecar', 'assets/pixel art car 1 (1).png', 60, 25);

}
var keys;
var Car1;
var car2;
var battery1;
var battery2;
var freeze;
var rewind;
var slowpower;


function create() {
    game.add.sprite(150, 200, 'battery down');
    freeze = game.add.sprite(-20, -20, 'freexe power');

    game.add.sprite(50, 50, 'slow power');


    this.redcar = this.game.add.sprite(180, 225, 'redcar')

    this.redcar.anchor.set(0.5);
    this.redcar.addChild(freeze);

    game.physics.arcade.enable(this.redcar);


    this.cursor = {
        up: this.game.input.keyboard.addKey(Phaser.Keyboard.UP),
        down: this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
        left: this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
        right: this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    };



    this.bluecar = this.game.add.sprite(90, 225, 'bluecar')


    this.bluecar.anchor.set(0.5);

    game.physics.arcade.enable(this.bluecar);

    this.bluecarControls = {
        up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)
    };


}

function update() {
    this.redcar.body.velocity.x = 0;
    this.redcar.body.velocity.y = 0;
    this.redcar.body.angularVelocity = 0;

    if (this.cursor.left.isDown) {
        this.redcar.body.angularVelocity = -250;
    } else if (this.cursor.right.isDown) {
        this.redcar.body.angularVelocity = 250;
    }
    if (this.cursor.up.isDown) {
        this.game.physics.arcade.velocityFromAngle(this.redcar.angle, 250, this.redcar.body.velocity);
    }

    this.bluecar.body.velocity.x = 0;
    this.bluecar.body.velocity.y = 0;
    this.bluecar.body.angularVelocity = 0;

    if (this.bluecarControls.left.isDown) {
        this.bluecar.body.angularVelocity = -250;
    } else if (this.bluecarControls.right.isDown) {
        this.bluecar.body.angularVelocity = 250;
    }
    if (this.bluecarControls.up.isDown) {
        this.game.physics.arcade.velocityFromAngle(this.bluecar.angle, 250, this.bluecar.body.velocity);
    }
}

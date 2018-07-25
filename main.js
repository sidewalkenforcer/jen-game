var gameState = {
    preload: preload,
    create: create,
    update: update
};

game.state.add("gameState", gameState);

function preload() {

    game.load.spritesheet('redcar', 'assets/pixel art car 1 (2).png', 60, 25);
    game.load.image('slow power',
        'assets/slow power up 1.png');
    game.load.image('rewind power',
        'assets/rewind power up 1.png');
    game.load.image('battery down',
        'assets/battery down.png');
    game.load.image('battery up',
        'assets/battery up 2.png');
    game.load.image('freexe power',
        'assets/freexe power up.png');

    game.load.spritesheet('bluecar', 'assets/pixel art car 1 (1).png', 60, 25);
    game.load.spritesheet('chicken', 'assets/New Piskel.png', 32, 32);

}
var keys;
var Car1;
var car2;
var battery1;
var battery2;
var freeze;
var rewind;
var slowpower;
var chicken;
var redcar;

function create() {

    batteryup = game.add.sprite(50, 120, 'battery up');
    game.physics.arcade.enable(batteryup);

    rewind = game.add.sprite(300, 200, 'rewind power');
    game.physics.arcade.enable(rewind);

    batterydown = game.add.sprite(150, 250, 'battery down');
    game.physics.arcade.enable(batterydown);

    freeze = game.add.sprite(-20, -20, 'freexe power');

    slowpower = game.add.sprite(150, 150, 'slow power');
    game.physics.arcade.enable(slowpower);

    chicken = game.add.sprite(200, 200, 'chicken');
    game.physics.arcade.enable(chicken);

    redcar = this.game.add.sprite(180, 225, 'redcar');

    redcar.anchor.set(0.5);

    // line makes the chicken sprite follow the car//
    redcar.addChild(chicken);

    game.physics.arcade.enable(redcar);


    this.cursor = {
        up: this.game.input.keyboard.addKey(Phaser.Keyboard.UP),
        down: this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
        left: this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
        right: this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    };



    this.bluecar = this.game.add.sprite(90, 225, 'bluecar');

    this.bluecar.anchor.set(0.5);


    game.physics.arcade.enable(this.bluecar);

    this.bluecarControls = {
        up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)
    };

   redcar.animations.add('left', [0, 1, 2, 3], 10, true);
    this.bluecar.animations.add('right', [0, 1, 2, 3], 10, true);



    slowpower.scale.setTo(0.1, 0.1);
    batterydown.scale.setTo(0.2, 0.2);
    rewind.scale.setTo(0.1, 0.1);
    batteryup.scale.setTo(0.1, 0.1)

}

function update() {
    redcar.body.velocity.x = 0;
    redcar.body.velocity.y = 0;
    redcar.body.angularVelocity = 0;

    if (this.cursor.left.isDown) {
        redcar.body.angularVelocity = -250;
    } else if (this.cursor.right.isDown) {
        redcar.body.angularVelocity = 250;
    }
    if (this.cursor.up.isDown) {
        this.game.physics.arcade.velocityFromAngle(redcar.angle, 250, redcar.body.velocity);
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

    var removeSlowpower = function (bluecar, slowpower) {
        console.log('removeSlowpower')
        slowpower.kill();
    };

    this.game.physics.arcade.overlap(
        this.bluecar, slowpower, removeSlowpower, null, this
    );
    var removeSlowpower = function (redcar, slowpower) {
        console.log('removeSlowpower')
        slowpower.kill();
    };

    this.game.physics.arcade.overlap(
        redcar, slowpower, removeSlowpower, null, this
    );

// rewind 
    var removeRewind = function (redcar, rewind) {
        console.log('removeRewind')
        rewind.kill();
    }

    this.game.physics.arcade.overlap(
        this.redcar, rewind, removeRewind, null, this
    );

    var removeRewind = function (bluecar, rewind) {
        console.log('removeRewind')
        rewind.kill();
    }

    this.game.physics.arcade.overlap(
        this.bluecar, rewind, removeRewind, null, this
    );

	
// battery 
//    var removeBattery = function (redcar, battery1) {
//        console.log('removeBattery')
//        battery1.kill();
//    }
//
//
//    this.game.physics.arcade.overlap(
//        this.redcar, battery1, removeBattery, null, this
//    );


}

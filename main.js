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
    this.game.load.image('enemy', 'assets/New P.png');

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
var blueControls;
var bluecar;

function create() {

    var level = [
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        'x                                                                        x',
        'x                                                                        x',
        'xxx     xxxxxxxxxxxxxxxxxxxxx     x                                      x',
        'x       x o                       x     x    xxxxxxxxxxxxxxxxxx          x',
        'x       x                         x     x    x                x          x',
        'x     xxx     x       xxxxxxxxxxxxx     x    x  o             x          x',
        'x       x     x                   x     x    x                x          x',
        'xxx     x     x                   x     x    xxxxxxxxxxx                 x',
        'x       x     xxxxx               x     x              x                 x',
        'x       x     x                         x              xx                x',
        'xxxxxxxxx     x       xxxxxx            x              xxxx      xxxxxxxxx',
        'x                                      xxxxxxxxx          x              x',
        'x                                      x                  x              x',
        'xxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                  x              x',
        'x       x                                      xxxxxxxxxxxxxxxxxxx       x',
        'x       x                                      x                 x       x',
        'x     xxx                                      x o               x       x',
        'x       x       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                 x       x',
        'x       x                            x         xxxxx       x     x       x',
        'xxx     x                            x             x       x     x   o   x',
        'x       x                            x      x      x       x     x       x',
        'x     xxxxxxxxxxxxxxxxxxxxxxxxx      x      x      x       x     xxxxxxxxx',
        'x                             x             x      x       x             x',
        'x                         o   x             x              x             !',
        'x                             x             x              x             !',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    ];
    var numTilesWide = level[0].length;
    var numPixelsWide = 20 * numTilesWide;

    for (var i = 0; i < level.length; i++) {

        for (var j = 0; j < level[i].length; j++) {



            var x = (20 * j);
            var y = (20 * i);

            if (level[i][j] == 'x') {
                //                    var enemy = this.game.add.sprite(30+20*j, 30+20*i, 'enemy');
                var enemy = this.game.add.sprite(x, y, 'enemy');
                var enemy = this.game.add.sprite(2 * numPixelsWide - x, y, 'enemy');

            }
        }
    }
    batteryup = game.add.sprite(50, 120, 'battery up');
    game.physics.arcade.enable(batteryup);

    rewind = game.add.sprite(300, 200, 'rewind power');
    game.physics.arcade.enable(rewind);

    batterydown = game.add.sprite(150, 250, 'battery down');
    game.physics.arcade.enable(batterydown);

    freeze = game.add.sprite(100, 50, 'freexe power');
    game.physics.arcade.enable(freeze);

    slowpower = game.add.sprite(150, 150, 'slow power');
    game.physics.arcade.enable(slowpower);

    chicken = game.add.sprite(200, 200, 'chicken');
    game.physics.arcade.enable(chicken);

    redcar = game.add.sprite(180, 225, 'redcar');
    game.physics.arcade.enable(redcar);
    redcar.anchor.set(0.5);

    // line makes the chicken sprite follow the car//
    redcar.addChild(chicken);

    this.cursor = {
        up: this.game.input.keyboard.addKey(Phaser.Keyboard.UP),
        down: this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
        left: this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
        right: this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    };



    bluecar = this.game.add.sprite(90, 225, 'bluecar');

    bluecar.anchor.set(0.5);


    game.physics.arcade.enable(bluecar);

    blueControls = {
        up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)
    };

    redcar.animations.add('left', [0, 1, 2, 3], 10, true);
    bluecar.animations.add('right', [0, 1, 2, 3], 10, true);



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

    bluecar.body.velocity.x = 0;
    bluecar.body.velocity.y = 0;
    bluecar.body.angularVelocity = 0;

    if (blueControls.left.isDown) {
        bluecar.body.angularVelocity = -250;
    } else if (blueControls.right.isDown) {
        bluecar.body.angularVelocity = 250;
    }
    if (blueControls.up.isDown) {
        this.game.physics.arcade.velocityFromAngle(bluecar.angle, 250, bluecar.body.velocity);
    }
    var removeSlowpower = function (bluecar, slowpower) {
        console.log('removeSlowpower')
        slowpower.kill();
    };

    this.game.physics.arcade.overlap(
        bluecar, slowpower, removeSlowpower, null, this
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
        redcar, rewind, removeRewind, null, this
    );

    var removeRewind = function (bluecar, rewind) {
        console.log('removeRewind')
        rewind.kill();
    }

    this.game.physics.arcade.overlap(
        bluecar, rewind, removeRewind, null, this
    );

    var removeBatteryup = function (redcar, batteryup) {
        console.log('removeBatteryup')
        rewind.kill();
    }

    this.game.physics.arcade.overlap(
        redcar, batteryup, removeBatteryup, null, this
    );
   
	
	var removeFreeze = function (redcar, freeze) {
        console.log('removeFreeze')
        freeze.kill();
    }
    this.game.physics.arcade.overlap(
        redcar, freeze, removeFreeze, null, this
    );
	
	var removeFreeze = function (bluecar, freeze) {
        console.log('removeFreeze')
        freeze.kill();
    }
    this.game.physics.arcade.overlap(
        bluecar, freeze, removeFreeze, null, this
    );

}

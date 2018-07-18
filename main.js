var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.image('red car',
        'assets/pixel art car 1 version 2.0.png');

    game.load.image('blue car', 'assets/pixel art car 1 (1).png');
    game.load.image('battery', 'assets/battery power up.gif');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

}

function create() {

    game.add.sprite(100, 100, 'blue car');
    game.add.sprite(200, 200,
        'red car');
    game.add.sprite(150, 300, 'battery');

}

function update() {}

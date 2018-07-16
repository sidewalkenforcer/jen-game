var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('blue car', 'assets/pixel art car 1 (1).png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

}

function create() {

	game.add.sprite(100, 100, 'blue car');

}

function update() {
}

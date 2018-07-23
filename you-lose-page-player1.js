var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div');

var gameState = {
    preload: preload,
    create: create,
    update: update
};

var mainmenuState = {
    preload: function () {
        game.load.image('losepage',
            'assets/you lost page.png', )
    },
    create: function () {
        game.add.sprite(0, 0, 'losepage')
    }
}

game.state.add("game", gameState);
game.state.start("game");

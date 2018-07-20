var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

}

// Any variables that we want to use in both create() and update()
// have to be declared outside of both functions.
var keys;
var player;
var ground;
var platforms;

function create() {

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');
    
    game.add.sprite(20, 20, 'star');
    
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();
    
    // Here we create the ground.
    ground = platforms.create(0, game.world.height - 64, 'ground');
    
    //  Double the size of the platform (vertically by 2 and horizontally by 2)
    ground.scale.setTo(2, 2);
    
    //  We need to enable physics on the ground so that it can move and collide with stuff
    game.physics.arcade.enable(ground);
    
    //  This stops the ground from falling away when you jump on it
    ground.body.immovable = true;
    
    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    
    //  We need to enable physics on the player so that it can move and collide with stuff
    game.physics.arcade.enable(player);
    
    //  Player physics properties.
    player.body.gravity.y = 300;
    
    //  Our controls.
    keys = game.input.keyboard.createCursorKeys();
    
    // Add animations to the player
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    
    //  Now let's create two ledges
    var ledge1 = platforms.create(400, 400, 'ground');
    var ledge2 = platforms.create(-150, 250, 'ground');
    
    // Enable physics on the platforms so you can collide with them
    game.physics.arcade.enable(platforms);
    
    // Prevent the ledges from moving
    ledge1.body.immovable = true;
    ledge2.body.immovable = true;
}

function update() {
    // Check for collisions between the player and the ground
    game.physics.arcade.collide(player, ground);
    
    // Check for collisions between the player and all platforms
    game.physics.arcade.collide(player, platforms);
    
    if (keys.left.isDown) {
        //  Move to the left
        player.body.velocity.x = -150;
        player.animations.play('left');
    }
    else if (keys.right.isDown) {
        //  Move to the right
        player.body.velocity.x = 150;
        player.animations.play('right');
    }
    else {
        //  Stop
        player.body.velocity.x = 0;
        
        //  Stand still
        player.animations.stop();
        
        // Reset animation frame
        player.frame = 4;
    }
    
    if (keys.up.isDown && player.body.touching.down) {
        player.body.velocity.y = -350;
    }
}

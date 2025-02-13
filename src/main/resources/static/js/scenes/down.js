var DownScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function DownScene ()
    {
        Phaser.Scene.call(this, { key: 'downScene', active: false });

    },
    preload: function ()
    { 	

    },

    create: function ()
    {   	
    	btnSurfer1 = this.input.keyboard.addKeys({ 'up': Phaser.Input.Keyboard.KeyCodes.UP, 'left': Phaser.Input.Keyboard.KeyCodes.LEFT, 'right': Phaser.Input.Keyboard.KeyCodes.RIGHT, 'down':Phaser.Input.Keyboard.KeyCodes.DOWN, 'space':Phaser.Input.Keyboard.KeyCodes.SPACE});
		this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, "ServerOff");
		this.background.setOrigin(0, 0);
		this.background.setScrollFactor(0);
		
	},
    
    update: function (time, delta) {
    	//CAMBIOS
    	apiRestRoutine();
    	if(serverState){
    		this.scene.start('joinScene');
    		if (game.global.DEBUG_MODE) {
    			console.log('[DEBUG] Switching to joinScene.');
			}
    	}

    	if(btnSurfer1.space.isDown && a+2000<Date.now()){
    		userList.style.display= "none";
    		this.scene.start('menuScene');
    		btnIndex = 0;
    		a = Date.now();
    		if (game.global.DEBUG_MODE) {
				console.log('[DEBUG] Switching to Main.'); 
			}
    	}

    	//FIN CAMBIOS

    }

});


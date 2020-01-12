

class EndGameStateWin extends Phaser.State {
	preload() {
		this.load.image('background', 'assets/images/backgrounds/background.jpg');
	}
	create() {
        this.stage.backgroundColor = '#fffcad';
		let backgroundImage = this.add.sprite(0, 200, 'background');
		backgroundImage.height = 1100;
	}
}

export default EndGameStateWin;

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload, 
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var peixinho;


function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');

    // Carregar o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    // Carregar o peixe
    this.load.image('peixeLaranja', 'assets/peixes/peixinho_laranja.png');

    this.load.image('peixeRosa', 'assets/peixes/peixe_rosa.png');

    this.load.image('baiacu', 'assets/peixes/baiacu_lado.png');

    this.load.image('concha', 'assets/peixes/concha.png');

    this.load.image('tartaruga', 'assets/peixes/tartaruga.png');

    this.load.image('tubarao', 'assets/peixes/tubarao.png');

    this.load.image('baiacuLaranja', 'assets/peixes/baiacu.png');



}

function create() {
    this.add.image(400, 300, 'mar');

    // Adicionar o logo na tela
    this.add.image(400, 525, 'logo').setScale(0.6);

    this.add.image(200, 425, 'baiacu').setScale(0.4);

    this.add.image(100, 525, 'concha').setScale(0.5);

    this.add.image(200, 225, 'tubarao').setScale(1.0);

    this.add.image(600, 210, 'tartaruga').setScale(1.0);

    this.add.image(650, 410, 'baiacuLaranja').setScale(1.0);



    // Adicionar o peixe na tela
    this.add.image(400, 300, 'peixeLaranja').setOrigin(0.5, 0.5).setFlip(true, false);

    peixinho = this.add.image(400,300, 'peixeRosa');

    peixinho.setFlip(true,false);
}

function update() {
    // Código para atualizar o jogo a cada frame

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}



if (peixinho == azul) {
    
}else{

}
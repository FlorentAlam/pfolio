import { Application, filters, Sprite, Texture, WRAP_MODES } from 'pixi.js';
import backgroundImage from './background.jpg';
import noise from './noise3.png';
const FPS = 24;

class PixiApp{

    constructor(home){
        this.home = home;
        this.background = new Application({resizeTo: window, width: window.innerWidth, height: window.innerHeight, backgroundColor: 0x000000, antialias: true});
        this._init();
        this._animate = this._animate.bind(this);
        requestAnimationFrame(this._animate);
        return this.background.view;
    }

    _init(){
        this.currTime = new Date().getTime();
        this.prevTime = this.currTime;
        this.noiseTexture = new Texture.from(noise);
        this.bgTexture = new Texture.from(backgroundImage);
        
        this.sprite = new Sprite(this.bgTexture);
        this.sprite.height = 2 * window.innerHeight;
        this.sprite.width = 2 * window.innerWidth;
        this.sprite.anchor.set(0.5);
        this.background.stage.addChild(this.sprite);


        this.targetPosition = {x: 0, y: 0};

        this._createDispFilter();

        this.background.stage.filters = [this.dispFilter, this.dispFilter2, this.dispFilter3];

        window.addEventListener('pointermove', (e) => {
            this.targetPosition = {x: e.clientX, y: e.clientY};
        });
    }

    _createDispFilter(){
        this.dispSprite = this._createSprite(this.noiseTexture, .4, .5);
        this.dispFilter = new filters.DisplacementFilter(this.dispSprite);

        this.dispSprite2 = this._createSprite(this.noiseTexture, .7, .4);
        this.dispFilter2 = new filters.DisplacementFilter(this.dispSprite2);

        this.dispSprite3 = this._createSprite(this.noiseTexture, 1, .8);
        this.dispFilter3 = new filters.DisplacementFilter(this.dispSprite3);
    }

    _createSprite(texture, heightMult, widthMult){
        let sprite = new Sprite(texture);
        sprite.height = heightMult * window.innerHeight;
        sprite.width = widthMult * window.innerHeight;
        sprite.texture.baseTexture.wrapMode = WRAP_MODES.REPEAT;

        this.background.stage.addChild(sprite);
        return sprite;
    }

    _animate(){
        const distance = {
            x: this.targetPosition.x - this.sprite.position.x,
            y: this.targetPosition.y - this.sprite.position.y
        }
        this.currTime = new Date().getTime();
        if(this.currTime - this.prevTime >= (60/FPS)){
            if(Math.abs(distance.x) > 0 && Math.abs(distance.y) > 0){
                this.sprite.position.x += distance.x * 0.2;
                this.sprite.position.y += distance.y * 0.2;
            }
            this.dispSprite.x += .6;
            this.dispSprite.y += .4;

            this.dispSprite2.x += .3;
            this.dispSprite2.y += .2;

            this.dispSprite2.x += .4;
            this.dispSprite2.y += .4;
            this.prevTime = this.currTime;
        }
        requestAnimationFrame(this._animate);
    }
};

export default PixiApp;
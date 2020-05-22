import { LightningElement, api } from 'lwc';

export default class Slider extends LightningElement { 
    @api minim = 0;
    @api maxim = 100;
    @api step = 1;
    @api label = "slider";
    @api sliderValue = this.minim;

    plus(){
        let x = parseFloat(this.sliderValue) + parseFloat(this.step);
        if( x <= this.maxim){
           this.sliderValue = x;
        }
    }

    minus(){
        if( (this.sliderValue - this.step) >= this.minim){
            this.sliderValue = this.sliderValue - this.step;
        }   
    }

    sliderChange(event){
        this.sliderValue = event.target.value;
    }

    get test(){
        return this.sliderValue;
    }
}
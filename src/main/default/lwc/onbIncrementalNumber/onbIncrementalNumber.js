import { api, LightningElement} from 'lwc';

export default class IncrementalNumber extends LightningElement {
    @api inputValue;
    @api step = 1;
    @api minim;
    @api maxim = 100;
    @api label = "number";
    styleErr = "slds-text-color_error slds-is-collapsed";
    errMsg;

    showError(msg, inpVal){
        this.inputValue = inpVal;
        this.styleErr = "slds-text-color_error";
        this.errMsg = msg;
        setTimeout(() => {
            this.styleErr = "slds-text-color_error slds-is-collapsed";
        }, 3000);
    }
    
    minus(){
        if( this.inputValue === undefined || this.inputValue===""){
            this.inputValue = this.minim;
        }
        else{
            let x = parseFloat((this.inputValue - this.step).toFixed(10));
            if (x < this.minim){
                this.showError("The lower limit is " + this.minim + "." , this.minim);
            }
            else{
                this.inputValue = x;
            }            
        }
    }

    plus(){
        if( this.inputValue === undefined ||  this.inputValue===""){
            this.inputValue = this.maxim;
        }
        else{
            let x = parseFloat((parseFloat(this.inputValue) + this.step).toFixed(10));
            if (x > this.maxim){
                this.showError("The upper limit is " + this.maxim + "." , this.maxim);
            }
            else{
                this.inputValue = x;
            }
        }
    }

    outOfInput(){
        if( this.inputValue != ""){
            if ( this.inputValue < this.minim ){
                this.showError("The lower limit is " + this.minim + "." , this.minim);
            }
            else{
                if ( this.inputValue > this.maxim ){
                    this.showError("The upper limit is " + this.maxim + "." , this.maxim);
                }
            }
        }   
    }

    changeInputValue(event){
        this.inputValue = event.target.value;
    }


    get test(){
        return this.inputValue;
    }

    get styleErrorClass(){
        return this.styleErr;
    }

    get errorMessage (){
        return this.errMsg;
    }
    
    
}
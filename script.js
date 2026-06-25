const display=document.querySelector('input[name="display"]');

function appendvalue(value){
    if (display.value==="00"){
        display.value=value;
    }
    else{
        display.value+=value;
    }
}

function clearDisplay(){
    display.value="00"
}

function deletevalue(){
    display.value=display.value.toString().slice(0,-1);
}

function calculate(){
    if (/[^0-9+\-*/.]/.test(display.value)){
        display.value="Invalid";
    }
    else{
        try{
            display.value=eval(display.value);
        }
        catch{
            display.value="Error";
        }
    }


}


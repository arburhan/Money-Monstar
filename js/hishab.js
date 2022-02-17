// convert 
function conversionValue(idName){

    const validInfo = document.getElementById('calculate-validate');
    const inputId = document.getElementById(idName).value;
    const inputNumber = parseFloat(inputId);
    
    if(inputNumber<0){
        validInfo.innerText ="Enter Positive value";
    }else if(isNaN(inputNumber)){
        validInfo.innerText = "Enter Psitive value";
    }else{       
        validInfo.innerText = "";
    }

    return inputNumber;
}
document.getElementById('calculate').addEventListener('click',function(){

    const income =conversionValue('income-id');
    const food =conversionValue('foodValue');
    const rent =conversionValue('rentid');
    const cloth = conversionValue('clothid');


    const totalExpValue = food+rent+cloth;
    const toalExp = document.getElementById('total-expeses');
    toalExp.innerText =  totalExpValue;

    const totalBalanceValue = income-totalExpValue;
    const balance = document.getElementById('balance');
    balance.innerText = totalBalanceValue;
})

// Saving Calculation
document.getElementById('savings').addEventListener('clicke',function(){

})
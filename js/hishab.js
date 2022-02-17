// convert 
function conversionValue(idName){

    const validInfo = document.getElementById('calculate-validate');
    const inputId = document.getElementById(idName);
    const inputNumber = parseFloat(inputId.value);
    
    if(inputNumber<0){
        validInfo.innerText ="Enter Positive value";
    }
    else if(isNaN(validInfo)){
        validInfo.innerText = "Enter Positive value";
    }
    else{       
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
    const conTotalExp = parseFloat(toalExp.innerText)

    const totalBalanceValue = income-totalExpValue;
    const balance = document.getElementById('balance');
    balance.innerText = totalBalanceValue;

    if(balance<0){
        balance.innerText = '00';
    }
    if(income<conTotalExp){
        balance.innerText = 'expense high';
    }
    
})

// Saving Calculation
document.getElementById('savings').addEventListener('click',function(){
    const income =conversionValue('income-id');
    const saveParcent = conversionValue('save-percent');

    const defParaMeter = 100;
    const parcent = (income*saveParcent)/defParaMeter;
    const saveAmount = document.getElementById
    ('save-amount');
    saveAmount.innerText = parcent;
    
    const saveAmountVal =saveAmount.innerText;
    const conSaveAmount = parseFloat(saveAmountVal);
    
    const balance = document.getElementById('balance');
    const balanceVal = balance.innerText;
    const balanceCon = parseFloat(balanceVal);
    const remainBalance = balanceCon - conSaveAmount;
    // console.log(conSaveAmount);

    const remBalance = document.getElementById('remain');
    
    remBalance.innerText = remainBalance;

    if(isNaN(balanceCon)){
        const debt = 'You are in debt';
        saveAmount.innerText = debt;
        remBalance.innerText = debt;
    } 
})
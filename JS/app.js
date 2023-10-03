function getPin (){
    const pin = genaratePin();
    const pinString = pin + '';
    if(pinString.length === 4)
    {
        return pin;
    }
    else{
       
        return getPin();
        
    }
}

function genaratePin(){
    const pincode = Math.round(Math.random()*10000)// number ta empty string diya jog korar karone number ta string hoi gese
    
    return pincode;
}

document.getElementById('gen-btn').addEventListener('click',function(){
    const code = getPin();
   
    const inputField = document.getElementById('input-area');
    inputField.value = code
})

document.getElementById('num-btn').addEventListener('click',function(event){
     const num = event.target.innerText;
     const inputNum = document.getElementById('input-num')
     const prevNum = inputNum.value;

     if(isNaN(num)){
        if(num === 'C'){
            inputNum.value = ''
        }
        else if(num === '<'){
            const deletenum = prevNum.split('')
            deletenum.pop()
            const newNum = deletenum.join('')
            inputNum.value = newNum
        }
        
     }
     else{
        
       const typedNum = prevNum + num;
       inputNum.value = typedNum;
     }
     
})

document.getElementById('sub-btn').addEventListener('click',function(){
    const typedNums = document.getElementById('input-num')
    const typedNumValue = typedNums.value
    const genrateNum = document.getElementById('input-area')
    const generateNumValue = genrateNum.value
    const rightMsg = document.getElementById('right')
    const wrongMsg = document.getElementById('wrong')

    if(typedNumValue === generateNumValue){
        
        rightMsg.style.display = 'block';
        wrongMsg.style.display = 'none'
    }
    else{
        
        wrongMsg.style.display = 'block';
        rightMsg.style.display = 'none'
    }


})
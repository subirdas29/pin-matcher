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
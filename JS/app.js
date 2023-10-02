function genaratePin (){
    const pin = getRandomPin();
    if(pin.length === 4)
    {
        return pin;
    }
    else{
        return genaratePin();
    }
}



function genaratePin(){
    const pincode = Math.round(Math.random()*10000)+'' // number ta empty string diya jog korar karone number ta string hoi gese
    return pincode;
}


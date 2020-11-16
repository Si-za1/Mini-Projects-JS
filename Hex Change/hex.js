function change(){
    var hex_num=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];  //The numbers to form the hex codes
    var hex_codes='';  // the string to make the hex codes

    for(var i=0;i<6; i++) // since the hex value is of 6 digits so taken i=6
    {
        var hex_index= Math.floor(Math.random() *hex_num.length); //it helps to generate random numbers within the length of 6 
        hex_codes+= hex_num[hex_index]; // stores the numbers in the string format as it is already declared above
    }

        document.getElementById('hex_code').innerHTML= hex_codes; //it takes the span where we have mentioned the #value and converts it into the hexcodes value
        document.body.style.background= "#" + hex_codes; // it changes the bg as per the number formed in the hex-codes
}






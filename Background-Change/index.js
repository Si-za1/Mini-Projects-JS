function change()
{
    randomColors=['red','cyan','pink','lime','blue','orange']; //Making the array which is the collection of the colors name 

    var exchange= randomColors[Math.floor(Math.random() * randomColors.length)]; 
    //To access the colors calling the floor function where the digits will be converted into the integer and random numbers will be generated within the 
    // randomcolors(array)'s length

    document.body.style.background=exchange; //accessing the document where the css property bg is called and is linked with the var exchnage 

}
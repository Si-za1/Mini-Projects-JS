function change()
{
    randomColors=['red','cyan','pink','lime','blue','orange'];

    var exchange= randomColors[Math.floor(Math.random() * randomColors.length)];

    document.body.style.background=exchange;

}
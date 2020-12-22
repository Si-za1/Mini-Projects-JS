const bg = document.querySelector('.bg');
const text= document.querySelector('.loading-text');

let loader=1;
let int = setInterval(blurring, 20);
function blurring()
{
    loader++;

    if(loader >99)
    {
        clearInterval(int);
    }

    text.innerText = `${loader}%`;
    text.style.opacity= scale(loader, 0, 100, 1, 0);
    bg.style.filter= `blur(${scale(loader, 0, 100, 20, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
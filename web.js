const colors = ['#d4d4d4', '#fde047', '#fca5a5'];
let colorIndex = 0;
const img = document.getElementById('img-change');
const hostname = location.hostname != '127.0.0.1';
function changeColor(){
    document.documentElement.style.setProperty('--change-color',colors[colorIndex] )
    if(hostname){
        if(img.src == `https://gartcod.cloud/_next/static/media/desktop.6a735a94.svg`){
            img.src = 'https://logos-world.net/wp-content/uploads/2020/08/Google-Chrome-Logo.png'
        }
        else{
            img.src = 'https://gartcod.cloud/_next/static/media/desktop.6a735a94.svg'   
        }
    }
    else{
        if(img.src == `https://gartcod.cloud/_next/static/media/desktop.6a735a94.svg`){
            img.src = 'https://logos-world.net/wp-content/uploads/2020/08/Google-Chrome-Logo.png'
        }
        else{
            img.src = 'https://gartcod.cloud/_next/static/media/desktop.6a735a94.svg'   
        }
    }
        

    colorIndex = (colorIndex + 1) % colors.length;
}
setInterval(() => {
    changeColor(); 
}, 1700);

function updates() {
    const date = new Date();
    const days = 28;
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()


    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

}

setInterval(updates, 1000);
updates();
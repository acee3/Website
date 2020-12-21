let string = "ROBOTICS_AND_CODING_CLUB";

let i = 0;

let btn = document.createElement("BUTTON");

btn.id = 'button';
btn.className = 'button';

let ranOne = Math.floor(Math.random() * Math.floor(300));
let ranTwo = Math.floor(Math.random() * Math.floor(750)) - 325;

btn.style.top = `150px`;
btn.style.left = `0px`;
btn.textContent = "Start";

document.getElementById('game').appendChild(btn);

let time = 0.00;
let stop = false;

btn.addEventListener("click", function () {
    let sound = new Audio("Resources/click.wav");
    sound.play();

    if (i < string.length && i > 0) {
        ranOne = Math.floor(Math.random() * Math.floor(300) + 25);
        ranTwo = Math.floor(Math.random() * Math.floor(750)) - 325;
        btn.style.top = `${ranOne}px`;
        btn.style.left = `${ranTwo}px`;
        btn.textContent = string.charAt(i);
        document.getElementById('puzzle').textContent = string.substring(0, i) + document.getElementById('puzzle').textContent.substring(i);
    } else if (i == string.length) {
        document.getElementById('puzzle').textContent = string.substring(0, i) + document.getElementById('puzzle').textContent.substring(i);
        btn.style.top = `150px`;
        btn.style.left = `0px`;
        btn.textContent = "Start";
        i =-1;
        document.getElementById('puzzle').style.color = '#00FF00';
        document.getElementById('puzzle').style.fontWeight = 'bold';
        stop = true;
    } else if (i == 0) {
        document.getElementById('puzzle').textContent = '________________________';
        document.getElementById('puzzle').style = 'font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 20px; color: #800000';
        stop = false;
        time =0;
        ranOne = Math.floor(Math.random() * Math.floor(300) + 25);
        ranTwo = Math.floor(Math.random() * Math.floor(750)) - 325;
        btn.style.top = `${ranOne}px`;
        btn.style.left = `${ranTwo}px`;
        btn.textContent = string.charAt(i);
        let x = setInterval(function () {
            time += 0.01;
            document.getElementById('timer').textContent = time.toFixed(2);
            if (stop) {
                clearInterval(x);
                if (time < parseInt(document.getElementById('besttime').textContent.substring(11)) || document.getElementById('besttime').textContent == 'Best Time: NOT SET') {
                    document.getElementById('besttime').textContent = "Best Time: " + time.toFixed(2);
                }
            }
        }, 10)
    } 
    i++;
});
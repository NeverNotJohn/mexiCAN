let cat_p = 0;
let jo_p = 0;
let score = 0;
let index = 1;

let kids = new Audio('static/audio/kids.mp3');
let sad = new Audio('static/audio/sad.mp3');
let ping = new Audio('static/audio/ping.mp3');
let music = new Audio('static/audio/seycara.mp3');
music.loop = true;

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

// Cat

cat_brittney = document.getElementById('cat_brittney');
cat_frances = document.getElementById('cat_frances');
cat_george = document.getElementById('cat_george');
cat_carlos = document.getElementById('cat_carlos');
cat_nick = document.getElementById('cat_nick');
cat_nylah = document.getElementById('cat_nylah');
cat_mana = document.getElementById('cat_mana');
cat_ray = document.getElementById('cat_ray');
cat_trescal = document.getElementById('cat_trescal');
cat_nando = document.getElementById('cat_nando');

// Jo

jo_brittney = document.getElementById('jo_brittney');
jo_frances = document.getElementById('jo_frances');
jo_george = document.getElementById('jo_george');
jo_carlos = document.getElementById('jo_carlos');
jo_nick = document.getElementById('jo_nick');
jo_nylah = document.getElementById('jo_nylah');
jo_mana = document.getElementById('jo_mana');
jo_ray = document.getElementById('jo_ray');
jo_trescal = document.getElementById('jo_trescal');
jo_nando = document.getElementById('jo_nando');

// Other
let ah = document.getElementById('discord');
let all = document.getElementById('all');

function start() {
    cat_brittney.classList.remove('hidden');
    jo_brittney.classList.remove('hidden');
    

}

function correct(button) {
    let test = window.getComputedStyle(button);
    let color = test.backgroundColor;

    if (color != 'rgb(0, 128, 0)')
    {
        button.style.backgroundColor = 'green';
        score++;
        index++;
        kids.play();
    }

    switch (index) {
        case 2:
            discord('Brittney',"Happy birthday Cathy, I wish you a million miniature cakes and balloons!",'static/images/pfps/brittney.webp');
            cat_frances.classList.remove('hidden');
            jo_frances.classList.remove('hidden');
            break;
        case 3:
            cat_george.classList.remove('hidden');
            jo_george.classList.remove('hidden');
            break;
        case 4:
            discord('superooof',"\"Happy birthday Cathy! You should try playing a level that corresponds to your age lol\"  (idk is she turning 19 or 20?) (is this good enough of a message, or is it meant to be longer, or...?)",'static/images/pfps/george.webp')
            cat_carlos.classList.remove('hidden');
            jo_carlos.classList.remove('hidden');
            break;
        case 5:
            cat_nick.classList.remove('hidden');
            jo_nick.classList.remove('hidden');
            break;
        case 6:
            cat_nylah.classList.remove('hidden');
            jo_nylah.classList.remove('hidden');
            break;
        case 7:
            cat_mana.classList.remove('hidden');
            jo_mana.classList.remove('hidden');
            break;
        case 8:
            cat_ray.classList.remove('hidden');
            jo_ray.classList.remove('hidden');
            break;
        case 9:
            discord('raay',"Happy birthday, but i'm still waiting to get picked up",'static/images/pfps/ray.webp');
            cat_trescal.classList.remove('hidden');
            jo_trescal.classList.remove('hidden');
            break;
        case 10:
            cat_nando.classList.remove('hidden');
            jo_nando.classList.remove('hidden');
            break;
        case 11:
            f = document.getElementById('final');
            f.classList.remove('hidden');
            all.classList.add('hidden');
            aye = document.getElementById('M');
            aye.textContent = `${score}`;
            applyRainbowEffect('haha');
            document.body.style.height = '100vh';
            
            discord('SaltyIndeed',"happy bday my senile, memory impared, cognitive deteriorated, forgetful, dory-ass, declining mantal acuitit, senior movement, cognitively frail, 4 foot 2, fun-sized, prime dunk on size, compact edition, vertically challenged, low altitude, pint-sized, little bean, too short to use the bar, microscopic, compact DDR buddy :)",'static/images/pfps/john.webp');
        
        default:
            break;
    }

}

function incorrect(button) {
    let test = window.getComputedStyle(button);
    let color = test.backgroundColor;

    if (color != 'rgb(128, 0, 0)')
    {
        button.style.backgroundColor = 'red';
        score--;
        sad.play();
    }

}

async function discord(name,text,img_path) {

    await sleep(3500);

    ping.play();

    ah.style.left = "1822px";
    $('#discord').animate({left: '1322px'});
    let d_text = document.getElementById('d_text');
    let d_name = document.getElementById('d_name');
    let d_img = document.getElementById('d_img');
    d_text.textContent = `${text}`;
    d_name.textContent = `${name}`;
    d_img.src = `${img_path}`;
}

function startt() {
    let s = document.getElementById('front');
    s.classList.add('hidden');
    all.classList.remove('hidden');
    music.play();
}


function applyRainbowEffect(elementId) {
    var rainbowText = document.getElementById(elementId);

    if (rainbowText) {
        var text = rainbowText.innerText;
        var colors = ['#ff0000', '#ff9900', '#ffff00', '#33cc33', '#3399ff', '#9933ff', '#ff33cc'];
        var interval = 500; // Change color every 500 milliseconds
        var index = 0;

        function updateColors() {
            var spannedText = '';

            for (var i = 0; i < text.length; i++) {
                var char = text.charAt(i);
                var color = colors[(i + index) % colors.length];
                spannedText += '<span style="color: ' + color + ';">' + char + '</span>';
            }

            rainbowText.innerHTML = spannedText;
            index = (index + 1) % colors.length;
        }

        // Initial call and setup the interval
        updateColors();
        setInterval(updateColors, interval);
    }
}

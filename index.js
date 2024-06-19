// Plants

let plant_1_a = document.getElementById('plant-1-a');
let plant_1_b = document.getElementById('plant-1-b');
let plant_1_c = document.getElementById('plant-1-c');
let plant_2_a = document.getElementById('plant-2-a');
let plant_2_b = document.getElementById('plant-2-b');
let plant_2_c = document.getElementById('plant-2-c');

// other

let alejandro = document.getElementById('alejandro');
let table = document.getElementById('table');
let barrel = document.getElementById('barrel');
let header = document.getElementById('header');

// audio

let hoe = new Audio('static/audio/hoe.mp3');
let seed = new Audio('static/audio/seed.mp3');
let moan = new Audio('static/audio/moan.mp3');
let twinkle = new Audio('static/audio/twinkle.mp3');
let mexican = new Audio('static/audio/mexico.mp3');
let plop = new Audio('static/audio/plop.mp3');
let kids = new Audio('static/audio/kids.mp3');
let glug = new Audio('static/audio/glug.mp3');
let burp = new Audio('static/audio/burp.mp3');
let punch = new Audio('static/audio/punch.mp3');
let bell = new Audio('static/audio/bell.mp3');

// Alejandro Frames

let frame1 = 'static/images/farmer.png';
let frame2 = 'static/images/farmer2.png';
let maker1 = 'static/images/maker1.png';
let maker2 = 'static/images/maker2.png';
let alcoholic1 = 'static/images/alcoholic1.png';
let alcoholic2 = 'static/images/alcoholic2.png';

// Variables

let step = 0;

async function bonk() {
    step++;

    switch (step) {
        case 1:
            plant_1_a.classList.remove('hidden');
            plant_2_a.classList.remove('hidden');
            hoe.play();
            mexican.play();
        break;

        case 2:
            plant_1_b.classList.remove('hidden');
            plant_2_b.classList.remove('hidden');
            hoe.play();
        break;

        case 3:
            plant_1_c.classList.remove('hidden');
            plant_2_c.classList.remove('hidden');
            hoe.play();
        break;

        case 4:
            plant_1_a.src = 'static/images/seed.png';
            plant_2_a.src = 'static/images/seed.png';
            seed.play();
        break;
    
        case 5:
            plant_1_b.src = 'static/images/seed.png';
            plant_2_b.src = 'static/images/seed.png';
            seed.play();
        break;

        case 6:
            plant_1_c.src = 'static/images/seed.png';
            plant_2_c.src = 'static/images/seed.png';
            moan.play();
        break;

        case 7:
            plant_1_a.src = 'static/images/wheet.png';
            plant_2_a.src = 'static/images/wheet.png';
        break;

        case 8:
            plant_1_b.src = 'static/images/wheet.png';
            plant_2_b.src = 'static/images/wheet.png';
        break;

        case 9:
            plant_1_c.src = 'static/images/wheet.png';
            plant_2_c.src = 'static/images/wheet.png';
            twinkle.play();
        break;

        case 10:
            header.textContent = 'Click to make Alejandrito happy!';
            header.classList.add('small');
            frame1 = maker1;
            frame2 = maker2;
            table.classList.add('hidden');
            barrel.classList.remove('hidden');
        break;

        case 11:
            barrel.classList.add('animate-on-click');
            barrel.addEventListener('animationend', () => {
                barrel.classList.remove('animate-on-click');
            });
            plop.play();
        break;

        case 12:
            barrel.classList.add('animate-on-click');
            barrel.addEventListener('animationend', () => {
                barrel.classList.remove('animate-on-click');
            });
            plop.play();
        break;

        case 13:
            barrel.classList.add('animate-on-click');
            barrel.addEventListener('animationend', () => {
                barrel.classList.remove('animate-on-click');
            });
            plop.play();
        break;

        case 14:

            barrel.classList.add('spin');
            twinkle.play();
            barrel.addEventListener('animationend', () => {
                barrel.classList.remove('spin');
            });

        break;

        case 15:
            header.textContent = 'Click to make HP drink!';
            header.classList.remove('small');
            barrel.src = 'static/images/soju.webp';
            kids.play();
        break;

        case 16:
            frame1 = 'static/images/drinker1.png';
            frame2 = 'static/images/drinker2.png';
            glug.play();
            barrel.classList.add('gloog');
            barrel.addEventListener('animationend', () => {
                barrel.classList.remove('animate-on-click');
            });
            plop.play();
        break;

        case 17:
            burp.play();
            header.textContent = 'Click to beat!';
        break;

        case 18:
            punch.play();
            frame1 = 'static/images/bonk1.png';
            frame2 = 'static/images/bonk2.png';
        break;  

        case 19:
            punch.play();
        break;

        case 20:
            punch.play();
            barrel.src = 'static/images/wtf_did_I_create.png';
            barrel.style.width = '85%';
        break;

        // End Credits

        // Congratulations!!! You unlocked an ultra rare tomagatchi
        // Happy bday Miho <3
        case 21:
            header.textContent = 'Congratulations!!! You unlocked an ultra rare Digimon!';
            bell.play();
            frame1 = 'static/images/toma.png';
            frame2 = 'static/images/toma.png';
            barrel.style.display = 'none';
            
        break;

        default:
            break;
    }

}

function applyRainbowEffect(elementId) {
    var rainbowText = document.getElementById(elementId);

    if (rainbowText) {
        var text = rainbowText.innerText;
        var colors = ['#ff0000', '#ff9900', '#ffff00', '#33cc33', '#3399ff', '#9933ff', '#ff33cc'];
        var interval = 500; // Change color every 500 milliseconds
        var index = 0;

        function updateColors() {
            var text = rainbowText.innerText;
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

function farmerAnimation() {
    let frame = 0;

    function animate() {
        frame = !frame;
        if (frame) {
            alejandro.src = frame1;
        } else {
            alejandro.src = frame2;
        }
    }
    animate();
    setInterval(animate, 500);
}

// main

applyRainbowEffect('header');
farmerAnimation();
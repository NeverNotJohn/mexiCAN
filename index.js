// Plants

let plant_1_a = document.getElementById('plant-1-a');
let plant_1_b = document.getElementById('plant-1-b');
let plant_1_c = document.getElementById('plant-1-c');
let plant_2_a = document.getElementById('plant-2-a');
let plant_2_b = document.getElementById('plant-2-b');
let plant_2_c = document.getElementById('plant-2-c');

// audio

let hoe = new Audio('static/audio/hoe.ogg');
let seed = new Audio('static/audio/seed.ogg');
let moan = new Audio('static/audio/moan.mp3');
let twinkle = new Audio('static/audio/twinkle.mp3');

// Variables

let step = 0;

async function bonk() {
    step++;

    switch (step) {
        case 1:
            plant_1_a.classList.remove('hidden');
            plant_2_a.classList.remove('hidden');
            hoe.play();
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

// main

applyRainbowEffect('header');
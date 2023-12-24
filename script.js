document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('christmasAudio');

    // Play audio on user interaction
    document.body.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        }
    });

    // Play audio on page load (may not work on some browsers)
    audio.play();

    // Generate snow
    let container = document.getElementById('container');
    generateSnow(container, 50);
});

function generateSnow(snow, count) {
    for (let i = 0; i < count; i++) {
        let leftSnow = Math.floor(Math.random() * container.clientWidth);
        let topSnow = Math.floor(Math.random() * container.clientHeight);
        let widthSnow = Math.floor(Math.random() * 50);
        let timeSnow = Math.floor((Math.random() * 5) + 5);
        let blurSnow = Math.floor(Math.random() * 20);
        let div = document.createElement('div');
        div.classList.add('snow');
        div.style.left = leftSnow + 'px';
        div.style.top = topSnow + 'px';
        div.style.width = widthSnow + 'px';
        div.style.height = widthSnow + 'px';
        div.style.animationDuration = timeSnow + 's';
        div.style.filter = "blur(" + blurSnow + "px)";
        container.appendChild(div);
    }
}
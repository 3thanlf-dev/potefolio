let sIndex = 0;
        
function showImage(n) {
    sIndex=n;
    displaySlide();
}
function nextSlide(n) {
    sIndex = sIndex + n;
    displaySlide();
}
function displaySlide() {
    let i;
    let slides = document.getElementsByClassName("slides");

    if (sIndex >= slides.length) {
        sIndex = 0;
    }

    if (sIndex < 0) {
        sIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[sIndex].style.display = "block";
}

window.addEventListener('load', function() {
    document.querySelector('.loader').classList.add('fondu-out');
})
function light(){
    let b = document.getElementsByTagName("body");
    b[0].classList.add('bodyL');
    let f = document.getElementsByTagName('footer');
    if (f.length > 0) {
        f[0].classList.add('footernoir');
        f[0].classList.remove('footerblanc');
    }
}

function footernoir(){
    let f = document.getElementsByTagName('footer');
    if (f.length > 0) {
        f[0].classList.add('footernoir');
    }
}

function dark(){
    let c = document.getElementsByClassName("bodyL");
    if (c.length > 0) { c[0].classList.remove('bodyL'); }
    let f = document.getElementsByTagName('footer');
    if (f.length > 0) {
        f[0].classList.add('footerblanc');
        f[0].classList.remove('footernoir');
        console.log('dark(): footer classes =', f[0].className);
    }
}

function removeFooterNoir(){
    let f = document.getElementsByTagName('footer');
    if (f.length > 0) {
        f[0].classList.remove('footernoir');
    }
}

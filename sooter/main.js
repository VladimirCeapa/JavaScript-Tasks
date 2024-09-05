let shot = document.querySelector('.shot'),
    hit = document.querySelector('.hit'),
    count = document.querySelector('.count strong'),
    counter = 0;

document.body.addEventListener('click', playShot);


function playShot(e) {
    let el = e.target;
    console.log(el);
    if (el.classList.contains('beer')) {
        hit.play();
        counter++;
        count.textContent=counter;
        el.classList.add('die');
    }else{
        shot.play();
    }
}
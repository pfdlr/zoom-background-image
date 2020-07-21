const slider = document.getElementById('slider');
const imgContainer = document.getElementById('image-container')

slider.value = 1;

if (!imgContainer.style.backgroundSize || parseInt(imgContainer.style.backgroundSize) < 100) {
    imgContainer.style.backgroundSize = "100%";
}

/* -------------------- RANGE SLIDER ---------------- */
slider.addEventListener('input', (e) => {
    e.preventDefault();
    const sliderValue = e.target.value;
    const x = parseFloat(sliderValue);
    let newScale = 100 * x;
    imgContainer.style.backgroundSize = `${newScale}%`;
})

/* -------------------- WHEEL ZOOM ---------------------- */
let z = 1;
function zoom(e) {
    e.preventDefault();
    const wheel = e.deltaY;
    console.log(wheel);
    const ratio = 0.5;
    let imgScale = 1;
    wheel > 0 ? z = z + ratio : z = z - ratio;

    z < 1 ? z = 1 : imgScale = 100 * z;
    z >= 20 ? z= 20 : imgScale = 100 * z;
    slider.value = z;

    if (imgScale < 100) {
        imgContainer.style.backgroundSize = `100%`
    } else {
        imgContainer.style.backgroundSize = `${imgScale}%`
    }
}
imgContainer.onwheel = zoom;

/* -------------------------- PAN ------------------------------- */

imgContainer.addEventListener('mousemove', e => {
    var mousePosX = ((e.pageX/2)/imgContainer.clientWidth*100);
    imgContainer.style.backgroundPositionX = mousePosX + "%";
    var mousePosY = (e.pageY/imgContainer.clientHeight*100);
    imgContainer.style.backgroundPositionY = mousePosY +"%";

})

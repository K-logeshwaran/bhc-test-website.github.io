let keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

function loadingBarAnimeCounter(){
    let lBLImg = document.getElementById("loading-bar-clg-logo")
    lBLImg.style.opacity = 0
    disableScroll()
    let loadingCounter = setInterval(()=>{
        let coun = document.getElementById("lc");
        let lc = parseInt(coun.innerText)
        lc+=1;
        coun.innerText = lc.toString();
        lBLImg.style.opacity = lc/100;
        if(lc==100){
            clearInterval(loadingCounter)
            coun.classList.add("loading-bar-counter-hider")
            document.getElementById("lbcontainer").classList.add("loading-bar-container-hider")
            enableScroll()
        }

    },30)

    
}

loadingBarAnimeCounter()
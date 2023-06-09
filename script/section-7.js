let clgVidTr = document.getElementById("clg-tour-vid");
let clgVidTrPlayBtn = document.getElementById("clg-tour-vid-play-btn");

clgVidTrPlayBtn.onclick = ()=>{
    clgVidTr.controls = true
    clgVidTr.play()
    clgVidTrPlayBtn.classList.toggle("hide")
}
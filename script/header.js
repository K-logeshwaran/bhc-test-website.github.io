 
  function myFunction(x) {
    let y = document.getElementById("show-cross-menu");
    let f = document.getElementById("reg-btn");
    let t = document.getElementById("show-line-menu");
    y.classList.toggle("show-nav-menu-bar");
    f.classList.toggle("hide-reg-btn");
    t.classList.toggle("hide-line-menu");
  }


let videoTourBtn = document.getElementById("videoTourBtn")
let headerClgText =  document.getElementById("header-clg-text")
let headerVidContainer = document.getElementById("header-video-container-elem")
let headerBgClrDiv =  document.getElementById("header-background-colour-div");
let headerWelcomeBtn =  document.getElementById("header-welcome-btn");
let headerVideoTag = document.getElementById("header-video-tag");
let headerInfrBtn =  document.getElementById("header-infra-btn");

videoTourBtn.onclick = (e)=>{
  headerVideoTag.src = headerVideoTag.getAttribute("data-tour-video-src")
  headerClgText.classList.add("hide-header-elements");
  headerVidContainer.classList.remove("hide-header-elements");
  headerBgClrDiv.classList.add("hide-header-elements");
  headerVideoTag.play()
}
headerInfrBtn.onclick = (e)=>{
  headerVideoTag.src = headerVideoTag.getAttribute("data-infra-video-src")
  headerClgText.classList.add("hide-header-elements");
  headerVidContainer.classList.remove("hide-header-elements");
  headerBgClrDiv.classList.add("hide-header-elements");
  headerVideoTag.play()
}

headerWelcomeBtn.onclick=(e)=>{
  headerClgText.classList.remove("hide-header-elements");
  headerVidContainer.classList.add("hide-header-elements");
  headerBgClrDiv.classList.remove("hide-header-elements");
  headerVideoTag.pause()
}

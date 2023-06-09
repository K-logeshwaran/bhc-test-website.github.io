let total = document.getElementById("hd-to-s3-height");

// let x = document.getElementById("football_img").getBoundingClientRect().left
// let y = document.getElementById("football_img").getBoundingClientRect().top
let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
const speedfootball = 2;
let animeNum = document.getElementById("number-anime");
let animeNum2 = document.getElementById("number-anime-2");
let animeNum3 = document.getElementById("number-anime-3");
let animeNum4 = document.getElementById("number-anime-4");
let ftspval = 1.2;
let speedDivValFootball = 1.2;
let maxNum4FontSize = 70;
let initNum4FontSize = 10;
// animeNum4.style.fontSize = initNum4FontSize +"px";
document.onscroll = function () {
  console.log("value W : ", window.scrollY);
  console.log("value T : ", total.clientHeight);
  console.log("value : ", window.scrollY - total.clientHeight);
  if (window.scrollY - total.clientHeight >= 0) {
    let mq2 = window.matchMedia("(max-width: 1050px)");
    let mq3 = window.matchMedia("(max-width: 570px)");
    if (mq2.matches) {
      ftspval = 0.15;
    }

    if (mq3.matches) {
      speedDivValFootball = 7;
    }

    animeNum.classList.add("footbal-num-anim-1");
    animeNum2.classList.add("footbal-num-anim-2");
    animeNum3.classList.add("footbal-num-anim-3");
    animeNum4.classList.add("footbal-num-anim-4");
    document.querySelectorAll(".left-to-right-football").forEach((item) => {
      let leftValue =
        Math.max((window.scrollY - total.clientHeight) / speedDivValFootball) +
        "px";
      //item.style.left = leftValue;
      item.style.transform = `translateX(${leftValue})`;
    });
    document.querySelectorAll(".right-to-left-football").forEach((item) => {
      let rightValue =
        Math.max(-(window.scrollY - total.clientHeight) / speedDivValFootball) +
        "px";
      //item.style.right = rightValue;
      item.style.transform = `translateX(${rightValue})`;
    });
    // document.querySelectorAll(".top-number-football").forEach((item) => {
    //   console.log(item.style);
    //   let rightValue =
    //     -Math.max((window.scrollY - total.clientHeight)/10) + "px";
    //   //item.style.right = rightValue;

    //   // if(initNum4FontSize!=maxNum4FontSize){
    //   //   // initNum4FontSize+=0.5
    //   //   // animeNum4.style.fontSize = initNum4FontSize+"px"
    //   // }
    //   item.style.transform = `translateY(${rightValue})`;
    // });

    document.querySelectorAll("#ball-image").forEach((item) => {
      console.log(item);
      let rightValue =
        Math.max((window.scrollY - total.clientHeight) / 5) + "px";
      let upValue = -Math.max((window.scrollY - total.clientHeight) / 5) + "px";
      //item.style.right = rightValue;
      item.style.transform = `translate(${rightValue},${upValue})`;
    });
  } else {
    animeNum.classList.remove("footbal-num-anim-1");
    animeNum2.classList.remove("footbal-num-anim-2");
    animeNum3.classList.remove("footbal-num-anim-3");
    animeNum4.classList.remove("footbal-num-anim-4");
  }
};
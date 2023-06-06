var swiper = new Swiper('.slide-content',{
  slidesPerView: 3,
  spaceBetween: 25,
 
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
0:{
  slidesPerView:1,
},
800:{
  slidesPerView:2,
},
1150:{
  slidesPerView:3,
},
    },
  });



 function myFunction3(t) {
     let k = document.getElementById("show-frame");
    k.classList.toggle("hide-frame")
    k.classList.toggle("show-frame-2");
    console.log(k.classList);
  }


  AOS.init();


  let btn3 =document.getElementById("show-infra-button")
    btn3.onclick=function(){
  let e=document.getElementById("show-frame");
  e.classList.toggle("hide-frame")
  e.classList.toggle("show-frame-2")
 
   }
   function myFunction4(t) {
    let k = document.getElementById("show-frame-2");
    k.classList.toggle("hide-frame-2")
     k.classList.toggle("show-frame-2-2");
     console.log(k.classList);
 }



  let btn4 =document.getElementById("show-infra-button-2")
  btn4.onclick=function(){
   let e=document.getElementById("show-frame-2");
   e.classList.toggle("hide-frame-2")
 e.classList.toggle("show-frame-2-2")
    }





    function myFunction5(t) {
      let k = document.getElementById("show-frame-3");
      k.classList.toggle("hide-frame-3")
       k.classList.toggle("show-frame-2-3");
       console.log(k.classList);
   }
  
  
  
    let btn5 =document.getElementById("show-infra-button-3")
    btn5.onclick=function(){
     let e=document.getElementById("show-frame-3");
     e.classList.toggle("hide-frame-3")
   e.classList.toggle("show-frame-2-3")
      }




      function myFunction6(t) {
        let k = document.getElementById("show-frame-4");
        k.classList.toggle("hide-frame-4")
         k.classList.toggle("show-frame-2-4");
         console.log(k.classList);
     }
    
    
    
      let btn6 =document.getElementById("show-infra-button-4")
      btn6.onclick=function(){
       let e=document.getElementById("show-frame-4");
       e.classList.toggle("hide-frame-4")
     e.classList.toggle("show-frame-2-4")
        }




        function myFunction7(t) {
          let k = document.getElementById("show-frame-5");
          k.classList.toggle("hide-frame-5")
           k.classList.toggle("show-frame-2-5");
           console.log(k.classList);
       }
      
      
      
        let btn7 =document.getElementById("show-infra-button-5")
        btn7.onclick=function(){
         let e=document.getElementById("show-frame-5");
         e.classList.toggle("hide-frame-5")
       e.classList.toggle("show-frame-2-5")
          }



          function myFunction8(t) {
            let k = document.getElementById("show-frame-6");
            k.classList.toggle("hide-frame-6")
             k.classList.toggle("show-frame-2-6");
             console.log(k.classList);
         }
        
        
        
          let btn8 =document.getElementById("show-infra-button-6")
          btn8.onclick=function(){
           let e=document.getElementById("show-frame-6");
           e.classList.toggle("hide-frame-6")
         e.classList.toggle("show-frame-2-6")
            }



            function myFunction9(t) {
              let k = document.getElementById("show-frame-7");
              k.classList.toggle("hide-frame-7")
               k.classList.toggle("show-frame-2-7");
               console.log(k.classList);
           }
          
          
          
            let btn9 =document.getElementById("show-infra-button-7")
            btn9.onclick=function(){
             let e=document.getElementById("show-frame-7");
             e.classList.toggle("hide-frame-7")
           e.classList.toggle("show-frame-2-7")
              }



              function myFunction10(t) {
                let k = document.getElementById("show-frame-8");
                k.classList.toggle("hide-frame-8")
                 k.classList.toggle("show-frame-2-8");
                 console.log(k.classList);
             }
            
            
            
              let btn10 =document.getElementById("show-infra-button-8")
              btn10.onclick=function(){
               let e=document.getElementById("show-frame-8");
               e.classList.toggle("hide-frame-8")
             e.classList.toggle("show-frame-2-8")
                }


                function myFunction11(t) {
                  let k = document.getElementById("show-frame-9");
                  k.classList.toggle("hide-frame-2-9")
                   k.classList.toggle("show-frame-2-9");
                   console.log(k.classList);
               }
              
              
              
                let btn11 =document.getElementById("show-infra-button-9")
                btn11.onclick=function(){
                 let e=document.getElementById("show-frame-9");
                 e.classList.toggle("hide-frame-9")
               e.classList.toggle("show-frame-2-9")
                  }



                  function myFunction12(t) {
                    let k = document.getElementById("show-frame-10");
                    k.classList.toggle("hide-frame-10")
                     k.classList.toggle("show-frame-2-10");
                     console.log(k.classList);
                 }
                
                
                
                  let btn12 =document.getElementById("show-infra-button-10")
                  btn12.onclick=function(){
                   let e=document.getElementById("show-frame-10");
                   e.classList.toggle("hide-frame-10")
                 e.classList.toggle("show-frame-2-10")
                    }



                    function myFunction13(t) {
                      let k = document.getElementById("show-frame-11");
                      k.classList.toggle("hide-frame-11")
                       k.classList.toggle("show-frame-2-11");
                       console.log(k.classList);
                   }
                  
                  
                  
                    let btn13 =document.getElementById("show-infra-button-11")
                    btn13.onclick=function(){
                     let e=document.getElementById("show-frame-11");
                     e.classList.toggle("hide-frame-11")
                   e.classList.toggle("show-frame-2-11")
                      }



                      function myFunction14(t) {
                        let k = document.getElementById("show-frame-12");
                        k.classList.toggle("hide-frame-12")
                         k.classList.toggle("show-frame-2-12");
                         console.log(k.classList);
                     }
                    
                    
                    
                      let btn14 =document.getElementById("show-infra-button-12")
                      btn14.onclick=function(){
                       let e=document.getElementById("show-frame-12");
                       e.classList.toggle("hide-frame-12")
                     e.classList.toggle("show-frame-2-12")
                        }


                        function myFunction15(t) {
                          let k = document.getElementById("show-frame-13");
                          k.classList.toggle("hide-frame-13")
                           k.classList.toggle("show-frame-2-13");
                           console.log(k.classList);
                       }
                      
                      
                      
                        let btn15 =document.getElementById("show-infra-button-13")
                        btn15.onclick=function(){
                         let e=document.getElementById("show-frame-13");
                         e.classList.toggle("hide-frame-13")
                       e.classList.toggle("show-frame-2-13")
                          }


                          function myFunction16(t) {
                            let k = document.getElementById("show-frame-14");
                            k.classList.toggle("hide-frame-14")
                             k.classList.toggle("show-frame-2-14");
                             console.log(k.classList);
                         }
                        
                        
                        
                          let btn16 =document.getElementById("show-infra-button-14")
                          btn16.onclick=function(){
                           let e=document.getElementById("show-frame-14");
                           e.classList.toggle("hide-frame-14")
                         e.classList.toggle("show-frame-2-14")
                            }


                            function myFunction17(t) {
                              let k = document.getElementById("show-frame-15");
                              k.classList.toggle("hide-frame-15")
                               k.classList.toggle("show-frame-2-15");
                               console.log(k.classList);
                           }
                          
                          
                          
                            let btn17 =document.getElementById("show-infra-button-15")
                            btn17.onclick=function(){
                             let e=document.getElementById("show-frame-15");
                             e.classList.toggle("hide-frame-15")
                           e.classList.toggle("show-frame-2-15")
                              }




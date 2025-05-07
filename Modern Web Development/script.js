const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    // smoothMobile:false
});

let lastScrollY = 0;
var timeout;

function circleFlaten(){
    var xscale = 1;
    var yscale = 1;
    
    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove" , function(dets){
        clearTimeout(timeout);
        
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;
        
        xprev = dets.clientX;
        yprev = dets.clientY;
        
        // if (xdiff >1.2) {
            //     xdiff = 1.2;
            // }
            // else if(xdiff <0.8){
                //     xdiff = 0.8
                // }
                // if(ydiff>1.2){
                    //     ydiff = 1.2;
                    // }
                    // else if(ydiff<0.8){
                        //     ydiff = 0.8;
                        // }
                        
        xscale = gsap.utils.clamp(0.8 , 1.5 , xdiff);
        yscale = gsap.utils.clamp(0.8 , 1.5 , ydiff);
        
        mouseCircle(xscale , yscale);
        
        timeout = setTimeout(function(){
            document.querySelector("#mouseCircle").style.transform = `translate(${dets.clientX-5}px , ${dets.clientY-4}px) scale(1,1)`
        })
    } ,100)
}

circleFlaten();

function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav" , {
        y:-10 ,
        opacity: 0 ,
        duration: 1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingElem" , {
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:.2,
        delay:-1
    })
    .from(".herofooter" , {
        y:-10 ,
        opacity: 0 ,
        duration: 1.5,
        ease:Expo.easeInOut,
        delay:-1
    })
}

function mouseCircle(xscale , yscale){
    window.addEventListener("mousemove" , function(dets){
        document.querySelector("#mouseCircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale} , ${yscale})`
    })
}



mouseCircle();
firstPageAnim();




//teeno element ko select karo , uske baad teeno par ek mousemove lagao , jab mousemove ho to ye pta karo ki mouse kaha par hai jiska matlb hai mouse ki x and y position pata karo , ab mouse ki x y position ke badle us image ko show and us image ko move karo , move karte waqt rotate karo , and jaise mouse tez chale waise rotation bhi tez ho jaye
// document.querySelectorAll(".elem").forEach(function (elema){
    //     var rotate = 0;
    //     var diffrotate = 0;
    //     elema.addEventListener("mousemove" , function(details){
        //         var diff = details.clientY - elema.getBoundingClientRect().top;
        //         diffrotate = details.clientX - rotate;
        //         rotate = details.clientX;
        
        //         gsap.killTweensOf(elema.querySelector("img"));
        
        //         gsap.to(elema.querySelector("img") , {
            //             opacity: 1,
            //             ease: Power3,
            //             top:diff,
            //             left:details.clientX,
            //             rotate:gsap.utils.clamp(-20 , 20 , diffrotate*0.5),
            //            // duration:0.3
            //         })
            //     })
            //     elema.addEventListener("mouseleave" , function(details){
                //         // gsap.killTweensOf(elema.querySelector("img"));
                //         gsap.to(elema.querySelector("img") , {
                    //             opacity: 0,
                    //             ease: Power3 ,
                    //             rotate:gsap.utils.clamp(-20 , 20 , diffrotate),
                    //             // duration:0.3
                    //         })
                    //     })
                    // });
                    
                    
                    document.querySelectorAll(".elem").forEach(function(elema) {
                        const img = elema.querySelector("img");
                        
                        if (!img) return; // Prevent errors if no image is found
                        
                        let lastX = 0;
                        
                        elema.addEventListener("mouseenter", function(e) {
                            gsap.to(img, { opacity: 1, /* duration: 0.3, */ ease: "power3" });
                        });
                        
                        elema.addEventListener("mousemove", function(e) {
                            let rect = elema.getBoundingClientRect();
                            let x = e.clientX - rect.left; // Mouse position inside `.elem`
                            let y = e.clientY - rect.top;
                            
                            let diffX =  e.clientX - lastX;
                            lastX=e.clientX;
                            let rotateAmount = gsap.utils.clamp(-20,20,diffX*0.5)
                            
                            gsap.to(img, { 
                                x: x - img.width / 2, 
                                y: y - img.height / 2, 
                                // duration: 0.2, 
                                ease: "power3" ,
                                rotate:rotateAmount
                            });
                            // gsap.to(elema,{
                                //     rotate:rotateAmount,
                                //     ease:"power3",
                                // })
                            });
                            
                            elema.addEventListener("mouseleave", function() {
                                gsap.to(img, { opacity: 0, /* duration: 0.3, */ ease: "power3" , rotate:0});
        // gsap.to(elema,{
            //     rotate:0,
            //     ease:"power3",
            // })
        });
    });
    
    
    // window.addEventListener("scroll",()=>{
        //     let scrollSpeed = Math.abs(window.scrollY - lastScrollY);
        //     lastScrollY = window.scrollY;
        
        //     let scaleFactor = Math.max(1,2-scrollSpeed*0.05);
        
        //     gsap.to("#mouseCircle",{
            //         scaleX:scaleFactor,
            //         scaleY:1/scaleFactor,
            //         duration:0.2,
            //         ease:"power3"
            //     })
            // })
            
            









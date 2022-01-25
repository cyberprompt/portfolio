
export function initSquareMove(){

    const el  = document.querySelector('html#INTRO body.INTRO #IntroApp #container #rightgutter');
    const div = document.querySelector('html#INTRO body.INTRO #IntroApp #container #rightgutter .pixelsquare');
    let x = 0; let y = 0; let mousedown = false; 

    div.addEventListener('mousedown', function(e) {         // div event mousedown     
        mousedown = true;                                   // mouse state set to true     
        //  x = div.offsetLeft - e.clientX;                 // subtract horizontal offset 
        y = div.offsetTop - e.clientY;                      // subtract vertical offset 
    }, true); 
 
    div.addEventListener('mouseup', function(e) {           // div event mouseup
        mousedown = false;                                  // mouse state set to false 
    }, true); 
 
    el.addEventListener('mousemove', function (e) {         // element mousemove to stop
        if (mousedown) {                                    // Is mouse pressed  
            document.querySelector("body").style.userSelect = "none"; // prevent annoying screen selection highlighting           
            // let xpos = e.clientX + x;                    // calculate the difference horizontally
            // div.style.left = xpos + 'px';          
            let ypos = e.clientY + y;                       // calculate the difference vertically
            ypos = ypos < 10 ? 10 : ypos;                   // limit top movement
            ypos = ypos > 190 ? 190 : ypos;                 // limit bottom movement
            div.style.top = ypos + 'px';           
            let humorlevel = (1 / ypos) * 10;
            humorlevel = humorlevel < .1 ? 0 : humorlevel;
            let humor = document.querySelectorAll(".humor");
            humor.forEach((el)=>{
                el.style.opacity = humorlevel;        
            });
        }
    }, true); 

    el.addEventListener("mouseout", function(e){
        mousedown = false;  
        el.removeEventListener("mousemove", function(){}, true);
        setTimeout(()=>{
            document.querySelector("body").style.userSelect = "auto"; // allow screen selection highlighting  
        }, 1000);                        
    }, true);

}

export function toggleMoreContact(e){       // More Contact LINK Animation
    const contactbox = document.querySelector("html#INTRO body.INTRO #IntroApp #container #rightgutter");
    const moretext = contactbox.querySelector("#morecontactlink .text");
    const moreglyph = contactbox.querySelector("#morecontactlink .glyph");
    moretext.classList.toggle("enable");
    moreglyph.classList.toggle("enable");
}

export function showMoreContact(){          // Expand/Contract Contact Box
    const contactbox = document.querySelector("html#INTRO body.INTRO #IntroApp #container #contact");
    const triggerbox = document.querySelector("html#INTRO body.INTRO #IntroApp #container #rightgutter");
    const moretext = triggerbox.querySelector("#morecontactlink .text");
    const morearrowdn = triggerbox.querySelector("#morecontactlink .glyph img#moredown");
    const morearrowup = triggerbox.querySelector("#morecontactlink .glyph img#moreup");

    const contactclasses = contactbox.classList;
    if(!contactclasses.contains("show") && !contactclasses.contains("hide")){       // no classes yet
        contactbox.classList.add("show");
        moretext.classList.toggle("show");
        setTimeout(()=>{           
        morearrowdn.classList.toggle("show");
        morearrowup.classList.toggle("show");
        },500);
        return;
    }

    if(contactclasses.contains("show")){       
        contactbox.classList.remove("show");
        contactbox.classList.add("hide");
        setTimeout(()=>{            
            contactbox.classList.remove("hide");
            moretext.classList.toggle("show");
            morearrowdn.classList.toggle("show");
            morearrowup.classList.toggle("show");            
        }, 500);
    }
}    



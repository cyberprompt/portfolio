export function showCode(which){ 
    document.querySelectorAll("blockquote.codeblock").forEach((el)=>{             // remove any other code blocks just in case
        el.classList.remove("animateprimary","animatesecondary");                      
     });       
    const thisblock = document.querySelector("blockquote#codeblock" + which + ".codeblock");  // This codeblock  
    thisblock.querySelector("code").classList.add("noscroll");                      // prevent scrollbars during animation   
    thisblock.querySelector("img").classList.add("noscroll");                       // hide close icon 
    thisblock.classList.add("animateprimary");                                      // start appearance animation 

    setTimeout((el)=>{
        thisblock.querySelector("code").classList.remove("noscroll");               // return scrollbars
        thisblock.querySelector("img").classList.remove("noscroll");                // return close icon

        /** Set up drag functionality */
        const blocktitle = thisblock.querySelector(".codetitle");        

        const onDrag = ({movementX,movementY})=>{
            let getStyle = window.getComputedStyle(thisblock);
            let leftVal = parseInt(getStyle.left);
            let topVal = parseInt(getStyle.top);
            thisblock.style.left = `${leftVal + movementX}px`;
            thisblock.style.top = `${topVal + movementY}px`;
        }

        blocktitle.addEventListener("mousedown", ()=>{
            thisblock.classList.add("dragging");
            blocktitle.addEventListener("mousemove", onDrag);
        });

        document.addEventListener("mouseup", ()=>{
            thisblock.classList.remove("dragging");
            blocktitle.removeEventListener("mousemove", onDrag);
        });        

    }, 1000);    
}

export function hideCode(which){
    const thisblock = document.querySelector("blockquote#codeblock" + which + ".codeblock");  // This codeblock 
    thisblock.classList.remove("animateprimary");                                   // clear initial animation flag
    thisblock.classList.add("animatesecondary");                                    // start removal animation
    setTimeout((el)=>{
        thisblock.classList.remove("animatesecondary");                             // cleanup        
    }, 1200);        
}


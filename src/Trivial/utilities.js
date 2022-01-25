export function clean(val){        // trivia json has encoded characters. replace them.
    const cleanArray = [    // accepts strings or arrays
        ["&quot;",`"`],
        ["&squot;",`'`],
        ["&#039;",`'`],
        ["&ldquo;",`“`],
        ["&rdquo;",`”`],
        ["&lsquo;",`‘`],
        ["&rsquo;",`’`],                         
        ["&amp;",`&`],
        ["&lt;",`<`],
        ["&gt;",`>`],
        ["&deg;",`°`],
        ["&#153;",`™`],
        ["&copy;",`©`],
        ["&reg;",`®`],         
        ["&ntilde;",`ñ`],            
        ["&aacute;",`á`],           
        ["&auml;",`ä`],
        ["&Eacute;", `É`],
        ["&eacute;",`é`],
        ["&ecirc;",`ê`],
        ["&euml;",`ë`],
        ["&eacute;",`é`],
        ["&iacute;",`í`],
        ["&Oacute;",`Ó`],
        ["&ocirc;",`ô`],
        ["&ouml;",`ö`], // Mötley
        ["&uuml;",`ü`], // Crüe
        ["&shy;",``],
        ["&sup2;",`²`] 
    ]

    const wash = (item) => {
        for(let i=0;i<cleanArray.length;i++){
            item = item.replaceAll(cleanArray[i][0],cleanArray[i][1])                
        }
        return item;
    }

    if(Array.isArray(val)){
        const washedArray = val.map(wash);
        return washedArray;
    }else{        
        cleanArray.forEach((cleaner)=>{
            val = val.replaceAll(cleaner[0],cleaner[1])
        })            
        return val;
    }

}

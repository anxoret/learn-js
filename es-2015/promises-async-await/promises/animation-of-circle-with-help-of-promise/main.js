function showCircle(cx, cy, radius) {

    let div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + "px";
    div.style.top = cy + "px";
    div.classList = "circle animated";

    document.body.append(div);

    return new Promise(function(resolve, reject){

        setTimeout( () => {
            div.style.width = radius * 2 + "px";
            div.style.height = radius * 2 + "px";
            div.style.lineHeight = div.style.height;
    
            let animationsEnd = false;
    
            div.addEventListener("transitionend", function() {
    
                if (animationsEnd == false) {
                    animationsEnd = true;
        
                    resolve(div);
    
                }
    
            });
    
        }, 0);

    });
    
};
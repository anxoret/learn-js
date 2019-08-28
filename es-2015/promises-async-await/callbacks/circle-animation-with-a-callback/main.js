function showCircle(cx, cy, radius, callback) {
  
    let div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + "px";
    div.style.top = cy + "px";
    div.classList = "circle animated";

    document.body.append(div);
    
    setTimeout( () => {
        div.style.width = radius * 2 + "px";
        div.style.height = radius * 2 + "px";
        div.style.lineHeight = div.style.height;

        let animationsEnd = false;

        div.addEventListener("transitionend", function() {

            if (animationsEnd == false) {
                animationsEnd = true;

                callback(div);

                // 2-ой случай: если внутрь имеющегося div вместить новый div в текстом: 
                // let textDiv = document.createElement("div");
                // textDiv.innerText = "Hello, world!";
                // textDiv.classList = "message-ball";
                // div.append(textDiv);
            }

        })

    }, 0);

};
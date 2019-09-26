function showNotification( {top = 0, right = 0, className, html}) {
    let div = document.createElement("div");
    div.classList.add("notification");

    div.top = top + "px";
    div.right = right + "px";
    div.classList.add(className);
    div.innerHTML = html;
    
    document.body.append(div);

    setTimeout( () => {
        div.style.display = "none";
    }, 1500)

};

// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
});
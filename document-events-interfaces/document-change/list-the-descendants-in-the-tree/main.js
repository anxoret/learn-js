function countDescendants(arrayOfLi) {

    // console.log(arrayOfLi);

    for (let li of arrayOfLi) {
        // получить количество всех <li> ниже этого <li>
        let descendantsCount = li.getElementsByTagName("li").length;

        if (!descendantsCount) continue;

        li.firstChild.data += `[${descendantsCount}]`;
    }
    
};

let arrayOfLi = document.getElementsByTagName("li");
countDescendants(arrayOfLi);

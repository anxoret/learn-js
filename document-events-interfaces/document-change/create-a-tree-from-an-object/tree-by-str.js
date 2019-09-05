let data = {

    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
	}
	
};

function createTreeDomRecurs(obj) {

    if (!Object.keys(obj).length) return;

    let ulMain = document.createElement("ul");

    for (let prop in obj){

        let newHtmlElemLi = document.createElement("li");
        newHtmlElemLi.innerHTML = prop;
        ulMain.append(newHtmlElemLi);

        let newHtmlElemUl = createTreeDomRecurs(obj[prop]);
        if (newHtmlElemUl) {
            newHtmlElemLi.append(newHtmlElemUl);
        }

    }

    return ulMain;
};

function createTree(obj) {
    let container = document.createElement("div");
    container.className = "container";
    document.body.append(container);
    container.append(createTreeDomRecurs(obj));
};

createTree(data); // создаёт дерево в контейнере



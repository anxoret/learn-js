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
      "магнолия": {
          "фыр-фыр": {
              "дрыг": {},
              "мыг": {}
          }
      }
    }
  }
};
// менее понятное и элегантное решение:
// function createTreeDomRecurs(obj) {

//     if (!Object.keys(obj).length) return;

//     let ulMain = document.createElement("ul");

//     for (let prop in obj) {

//         let newHtmlElemLi = document.createElement("li");
//         newHtmlElemLi.innerHTML = prop;
//         ulMain.append(newHtmlElemLi);

//         let newHtmlElemUl = createTreeDomRecurs(obj[prop]);
//         if (newHtmlElemUl) {
//             newHtmlElemLi.append(newHtmlElemUl);
//         }

//     }

//     return ulMain;
// };

// function createTree(obj) {
//     let container = document.createElement("div");
//     container.className = "container";
//     document.body.append(container);
//     container.append(createTreeDomRecurs(obj));
// };

// createTree(data); // создаёт дерево в контейнере

// вроде бы нормальное решение

function createTreeUsingRecursion(container, object) {

  if (!Object.keys(object).length) return;

  let ul = document.createElement("ul");
  container.append(ul);

  for (let property in object) {
      let li = document.createElement("li");
      li.innerHTML = property;
      ul.append(li);
      
      createTreeUsingRecursion(li, object[property]);
  }


};

function createTree(container, object) {
  createTreeUsingRecursion(container, object);
};

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере



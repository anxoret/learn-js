function creatAList() {

    while (true) {

        let answer = prompt("Каково содержимое пункта?", "<p>Мышь</p>");

        if (!answer) break;

        if (document.getElementsByClassName("prompt-ul")) {

            let ul = document.createElement("ul");
            ul.className = "prompt-ul";
            document.body.append(ul);

            let li = document.createElement("li");
            li.textContent = answer;
            ul.append(li);

        } else {
            let li = document.createElement("li");
            li.textContent = answer;
            ul.append(li);
        }

    }

};
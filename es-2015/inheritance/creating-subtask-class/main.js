class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        console.log("Создание задачи");
        Task.count += 1;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    // статический метод
    static getDefaultTitle() {
        return "Задача";
    }

    complete() {
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`);
    }
};

Task.count = 0; // статическое свойство

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log("Создание подзадачи");
    }

    // переопределяем метод родителя
    complete() {
        super.complete();
        console.log(`Подзадача "${this.title}" выполнена`);
    }
}

let task = new Task("Изучить Javascript");
let subtask = new SubTask("Изучить ES6", task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);
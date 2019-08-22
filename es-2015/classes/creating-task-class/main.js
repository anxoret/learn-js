class Task {

    constructor (title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log("Создание задачи");
    }

    get done() {
        return this._done === true ? "Выполнена" : "Не выполнена";
    }

    set done(value) {
        if (value !== undefined && typeof value === "boolean") {
            this._done = value;
        } else {
            console.error("Ошибка! Укажите значение true или false");
        }
    }

    complete() {
        this.done = 1;
        console.log(`Задача "$(this.title)" выполнена`);
    }

    static getDefaultTitle() {
        return "Задача";
    }
};

Task.count = 0;

let task = new Task("Убрать комнату");
console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);
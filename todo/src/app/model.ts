// var Model = {
//     user: 'Aman',
//     itmes: [
//         {action:"Brak first", done:"true"},
//         {action:"Lunch", done:"false"},
//         {action:"Diner", done:"false"},
//     ]
// };


export class Model {
    user;
    itmes;

    constructor(){
        this.user = "Aman";
        this.itmes = [
            new TodoItem("Brek First", false),
            new TodoItem("Lunch", false),
            new TodoItem("Diner", false),
        ]
    }
};

export class TodoItem {
    action;
    done;

    constructor(action:string, done:boolean){
        this.action = action;
        this.done = done;
    }
}
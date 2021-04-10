console.log(3)
const todos = [];
// let input = prompt('what would you like to do?');
let input 
while (input !== 'quit') {
    input = prompt('what would you like to do?')
    if (input == 'add') {
        let newTask = prompt('what would you like to add?')
        todos.push(newTask)
    }
    else if (input == 'list') {
        for (const thing of todos) {
            console.log(`${todos.indexOf(thing)} : ${thing}`)
            
        }
    } else if (input == 'delete') {
        let remove = prompt('what would you like to remove?')
        if (todos.includes(remove)) {
            todos.splice(todos.indexOf(remove), 1);
        } else { prompt('item not on list')}
        
        
    }
}
console.log('bye!');


        // <li>"new" - add a to-do</li>
        // <li>"list" - list all to-do's</li>
        // <li>"delete" - remove specific to-do</li>
        // <li>"quit" - quit</li>
var form = document.getElementById('submit');

var tasksToDo = [
                    document.getElementById('taskToDoOne'), 
                    document.getElementById('taskToDoTwo'), 
                    document.getElementById('taskToDoThree')
                ]

var tasksCompleted =    [
                            document.getElementById('taskCompletedOne'),
                            document.getElementById('taskCompletedTwo'),
                            document.getElementById('taskCompletedThree')
                        ]
var status=0
var taskName
function addTask() {

    var taskName = document.getElementById('taskName').value;

    for (let i = 0; i <= tasksToDo.length; i++) {
        
        if (tasksToDo[i].textContent == "" ) {
           
            tasksToDo[i].textContent = taskName;

            break

        }

    }
    
};

form.addEventListener("click", addTask)

function changeText() {
    
    for (let i = 0; i <= tasksCompleted.length; i++) {
        
        if (tasksCompleted[i].textContent =="") {
            
            tasksCompleted[i].textContent = tasksToDo[i].textContent

            tasksToDo[i].textContent = ""

            break

        }
    }

}
function deleteTask(taskToDelete) {

    tasksCompleted[taskToDelete].textContent = ""
    
}

tasksToDo[0].addEventListener("click", changeText);
tasksToDo[1].addEventListener("click", changeText);
tasksToDo[2].addEventListener("click", changeText);
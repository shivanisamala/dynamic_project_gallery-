let taskStack = [];
function addTask() {
const taskInput = document.getElementById("taskInput");
const task = taskInput.value.trim();
if (task === "") {
alert("Please enter a valid task!");
return;
}
taskStack.push(task);
taskInput.value = "";
displayStack();
}
function undoTask() {
if (taskStack.length === 0) {
alert("No tasks to undo!");
return;
}
taskStack.pop();
displayStack();
}
function displayStack() {
const stackDisplay = document.getElementById("stackDisplay");
stackDisplay.textContent = taskStack.join(", ");
}
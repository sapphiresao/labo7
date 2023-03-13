const title = document.getElementById('title');
title.style.color = 'blue';
title.textContent = 'Lab7 Assignment';

const taskHeading = document.getElementById('task');
taskHeading.style.color = 'red';
taskHeading.textContent = 'Task';

const taskDescription = document.createElement('p');
taskDescription.textContent = 'In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
taskHeading.insertAdjacentElement('afterend', taskDescription);

const taskList = document.getElementById('taskList');
const tasks = [
{ text: 'find elements in the DOM <strong>(5 points)</strong>', color: 'green', class: 'even' },
{ text: 'create/add/remove elements <strong>(5 points)</strong>', color: 'purple', class: 'odd' },
{ text: 'change content of the elements <strong>(5 points)</strong>', color: 'green', class: 'even' },
{ text: 'change styles of the elements <strong>(5 points)</strong>', color: 'purple', class: 'odd' },
{ text: 'change attributes of the elements <strong>(5 points)</strong>', color: 'green', class: 'even' },
{ text: 'change classes of the elements <strong>(5 points)</strong>', color: 'purple', class: 'odd' },
];

tasks.forEach((task) => {
const listItem = document.createElement('li');
listItem.innerHTML = task.text;
listItem.style.color = task.color;
listItem.classList.add(task.class);
taskList.appendChild(listItem);
});

const submissionHeading = document.createElement('h2');
submissionHeading.textContent = 'To submit your work, follow these instructions:';
document.getElementById('submission').insertAdjacentElement('afterend', submissionHeading);

const submissionList = document.getElementById('submissionList');
const submissionSteps = [
{ text: 'Create a new repository on Github, named lab7 <strong>(1 point)</strong>', color: 'green', class: 'even' },
{ text: 'Clone this repository to your local machine and work inside it', color: 'purple', class: 'odd' },
{ text: 'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message <strong>(1 point)</strong>', color: 'green', class: 'even' },
{ text: 'Create a new JavaScript file, called main.js, which must contain your program (assignment) described above <strong>(1 point)</strong>', color: 'purple', class: 'odd' },
{ text: 'Link this main.js file to your index.html file (Note: place your script at the end of the body section) <strong>(1 point)</strong>', color: 'green', class: 'even' },
{ text: 'Write a JavaScript program in main.js to make your index.html look identical to this HTML file <strong>(5 points)</strong>', color: 'purple', class: 'odd' },
{ text: 'After you finish your work, submit it to the Github <strong>(2 points)</strong>', color: 'green', class: 'even' },
];

submissionSteps.forEach((step) => {
    const li = document.createElement('li');
    li.innerText = step.text;
    li.style.color = step.color;
    li.classList.add(step.class);
    submissionList.appendChild(li);
    });


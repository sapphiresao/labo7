document.getElementById('title').textContent = 'Lab7 Assignment';

document.getElementById('task').textContent = 'Task';

const taskList = document.getElementById('taskList');
const tasks = [
  { text: 'find elements in the DOM (5 points)', color: 'green', class: 'even' },
  { text: 'create/add/remove elements (5 points)', color: 'purple', class: 'odd' },
  { text: 'change content of the elements (5 points)', color: 'green', class: 'even' },
  { text: 'change styles of the elements (5 points)', color: 'purple', class: 'odd' },
  { text: 'change attributes of the elements (5 points)', color: 'green', class: 'even' },
  { text: 'change classes of the elements (5 points)', color: 'purple', class: 'odd' },
];

tasks.forEach((task, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = task.text;
  listItem.style.color = task.color;
  listItem.className = task.class;
  taskList.appendChild(listItem);
});

document.getElementById('submission').textContent = 'Submission';

const submissionList = document.getElementById('submissionList');
const submissionSteps = [
{ text: 'Create a new repository on Github, named lab7 (1 point)', color: 'green', class: 'even' },
{ text: 'Clone this repository to your local machine and work inside it', color: 'purple', class: 'odd' },
{ text: 'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point)', color: 'green', class: 'even' },
{ text: 'Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point)', color: 'purple', class: 'odd' },
{ text: 'Link this main.js file to your index.html file (Note: place your script at the end of the body section)', color: 'green', class: 'even' },
{ text: 'Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points)', color: 'purple', class: 'odd' },
{ text: 'After you finish your work, submit it to the Github (2 points)', color: 'green', class: 'even' },
];

submissionSteps.forEach((step, index) => {
    const li = document.createElement('li');
    li.innerText = step.text;
    li.style.color = step.color;
    li.classList.add(step.class);
    submissionList.appendChild(li);
    });

    
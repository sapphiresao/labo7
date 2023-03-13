const title = document.createElement('h1');
title.textContent = 'Lab7 Assignment';
title.style.color = 'blue';
document.body.appendChild(title);

const hr1 = document.createElement('hr');
document.body.appendChild(hr1);

const taskHeading = document.createElement('h2');
taskHeading.textContent = 'Task';
taskHeading.style.color = 'red';
document.body.appendChild(taskHeading);

const taskDescription = document.createElement('p');
taskDescription.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
document.body.appendChild(taskDescription);

const taskList = document.createElement('ul');
document.body.appendChild(taskList);

const tasks = [
  { text: 'find elements in the DOM (<b>5 points</b>);', color: 'green', class: 'even' },
  { text: 'create/add/remove elements (<b>5 points</b>);', color: 'purple', class: 'odd' },
  { text: 'change content of the elements (<b>5 points</b>);', color: 'green', class: 'even' },
  { text: 'change styles of the elements (<b>5 points</b>);', color: 'purple', class: 'odd' },
  { text: 'change attributes of the elements (<b>5 points</b>);', color: 'green', class: 'even' },
  { text: 'change classes of the elements (<b>5 points</b>).', color: 'purple', class: 'odd' },
];

tasks.forEach((task) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = task.text;
  listItem.style.color = task.color;
  listItem.classList.add(task.class);
  taskList.appendChild(listItem);
});

const hr2 = document.createElement('hr');
document.body.appendChild(hr2);

const submissionHeading = document.createElement('h2');
submissionHeading.textContent = 'Submission';
submissionHeading.style.color = 'red';
document.body.appendChild(submissionHeading);

const submissionDescription = document.createElement('p');
submissionDescription.textContent = 'To submit your work, follow these instructions:';
document.body.appendChild(submissionDescription);

const submissionList = document.createElement('ul');
document.body.appendChild(submissionList);

const submissionSteps = [
  { text: 'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).', color: 'green', class: 'even' },
  { text: 'Clone this repository to your local machine and work inside it.', color: 'purple', class: 'odd' },
  { text: 'Create a new HTML file, called <b>index.html</b>, which has only one <h1> tag with "Hello, World!" message <strong>(1 point)</strong>.', color: 'green', class: 'even' },
  { text: 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above <strong>(1 point)</strong>.', color: 'purple', class: 'odd' },
  { text: 'Link this main.js file to your index.html file (Note: place your script at the end of the body section) <strong>(1 point)</strong>.', color: 'green', class: 'even' },
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


let input = document.getElementById('input');
let button = document.getElementById('button');
let show = document.getElementById('show');
let date = document.getElementById('date');
let time = document.getElementById('time');
let show_task = [];

button.addEventListener('click', () => {
    let newTask = { task: input.value, date: date.value, time: time.value };
    show_task.push(newTask);
    addTask(newTask);
});

function addTask(task) {
    let taskDiv = document.createElement('div');
    taskDiv.id = 'task-' + (show_task.length - 1);

    let para = document.createElement('p');
    para.innerText = task.task;

    let para1 = document.createElement('p');
    para1.innerText = task.date;

    let para2 = document.createElement('p');
    para2.innerText = task.time;

    let para3 = document.createElement('p');
    para3.id = 'days-left-' + (show_task.length - 1);

    let para4 = document.createElement('p');
    para4.id = 'time-left-' + (show_task.length - 1);

    taskDiv.appendChild(para);
    taskDiv.appendChild(para1);
    taskDiv.appendChild(para2);
    taskDiv.appendChild(para3);
    taskDiv.appendChild(para4);
    
    show.appendChild(taskDiv);

    update();
}


function update() {
    let tasks = show_task;
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let taskDate = new Date(task.date + ' ' + task.time);
        let currentDate = new Date();
        let timeDiff = taskDate.getTime() - currentDate.getTime();

        let daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
        let hoursLeft = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
        let minutesLeft = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
        let secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

        let daysLeftPara = document.getElementById('days-left-' + i);
        let timeLeftPara = document.getElementById('time-left-' + i);

        if (daysLeftPara && timeLeftPara) {
            daysLeftPara.innerText = daysLeft > 0 ? daysLeft + " days left" : "Today";
            timeLeftPara.innerText = "Time left: " + hoursLeft + " hours, " + minutesLeft + " minutes, " + secondsLeft + " seconds";
        }
    }
}

setInterval(update, 1000); 

// discover section 
const discoverSec = document.getElementById('discover');
const mainSec = document.getElementById('main');
const blogsSec = document.getElementById('blogs');
const navLeft = document.getElementById('nav-left');
const blogBtn = document.getElementById('blog-btn');

discoverSec.addEventListener('click', function () {
    blogsSec.classList.add('block');
    blogBtn.classList.add('block');
    blogsSec.classList.remove('hidden');
    blogBtn.classList.remove('hidden');
    mainSec.classList.add('hidden');
    navLeft.classList.add('hidden');
})

// back to desk 
blogBtn.addEventListener('click', function () {
    blogsSec.classList.add('hidden');
    mainSec.classList.remove('hidden');
    blogBtn.classList.add('hidden');
    navLeft.classList.remove('hidden')
})


// completed button 
const completedBtns = document.querySelectorAll('.completed-btn');
let countClick = 0;
for (let btn of completedBtns) {
    btn.addEventListener('click', function (event) {
        // alert
        alert('Board Updated Successfully')
        countClick++;
        if(countClick === completedBtns.length){
            alert('Congrats!!! You have completed all the current task.');
        };
        // decreasing assigned task 
        let textAssigned = parseInt(document.getElementById('text-assigned').innerText);
        textAssigned -= 1;
        document.getElementById('text-assigned').innerText = textAssigned;
        // increasing completed task
        let completedTask = parseInt(document.getElementById('completed-task').innerText);
        completedTask += 1;
        document.getElementById('completed-task').innerText = completedTask;
        // add to activity log
        const title = btn.parentNode.parentNode.childNodes[3].innerText; //get title to activity log msg
        const activityToAdd = document.getElementById('activity-container');
        const msgP = document.createElement('p');
        msgP.classList.add('my-3', 'mx-4', 'rounded-lg',  'p-4', 'bg-slate-100', 'text-center', 'text-lg', 'font-medium')

        // set time on the msg
        const dateNow = new Date();
        const currentTime = dateNow.toLocaleTimeString();
        msgP.innerText = `You have completed the ${title} task at ${currentTime}` //final msg of activity log
        activityToAdd.appendChild(msgP)
        // to disable clicked btn
        event.target.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none', 'bg-gray-300', 'text-black')
    })
}

// activity log clearing
document.getElementById('clear')
    .addEventListener('click', function () {
        document.getElementById('activity-container').innerHTML = "";
    })



// set day and date 
let currentDate = document.getElementById('current-date');
    const dateNow = new Date();
    const options = {weekday:'long', day: 'numeric', month: 'long', year: 'numeric'};
    const current = dateNow.toLocaleDateString('en-US', options);
    currentDate.innerText = current;


// magic button to change bg
const magicBtn = document.getElementById('magic-btn')
magicBtn.addEventListener('click', function(){
    const letterOfColor = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color = color + letterOfColor[Math.floor(Math.random() * letterOfColor.length)];
    }
    const bgBody = document.getElementById('body');
    bgBody.classList.remove('bg-slate-100')
    bgBody.classList.add(`bg-[${color}]`);
})
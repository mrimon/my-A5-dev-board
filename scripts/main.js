
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
blogBtn.addEventListener('click', function(){
    blogsSec.classList.add('hidden');
    mainSec.classList.remove('hidden');
    blogBtn.classList.add('hidden');
    navLeft.classList.remove('hidden')
})
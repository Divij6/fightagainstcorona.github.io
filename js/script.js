burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')

burger.addEventListener('click', () => {
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})








const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count<target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        }else{
            count.innerText = target;
        }
    }
    updateCount();
});
const allLinks = document.querySelectorAll('a');
// console.log(allLinks);

allLinks.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.classList.add('rip');
        ripples.style.left = x + 'rem';
        ripples.style.top = y + 'rem';
        btn.appendChild(ripples);
        console.log(e.clientX, e.target.offsetLeft);
        setTimeout(()=> {
            ripples.remove();
        }, 1000);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");
    
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percentage");
        bar.style.width = percentage + '%';
    });
});
document.querySelector('a[href="https://drive.google.com/uc?export=download&id=1-GeT7IV-mJc9sezDnX4pl8pbLbsayJSs"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior (if needed)
    window.open('https://drive.google.com/uc?export=download&id=1-GeT7IV-mJc9sezDnX4pl8pbLbsayJSs', '_blank');
});

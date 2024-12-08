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
 <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MQ5564RWDJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MQ5564RWDJ');
</script>

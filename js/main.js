//мейн

//короче тут половина не дописана и мне лень этим заниматься и вообще сейчас 1:35 ночи всем споки ноки
//а еще была идея сделать чтобы только по определенным айпишникам можно было заходить или по одноразовым паролям чтобы глеб ебаный или кто-то неверный не мог зайти но блять кому это надо мне это не надо мне лень

document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');

    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('fade-out');
            setTimeout(function() {
                loader.style.display = 'none';
            }, 700);
        }, 1000);
    });

    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').length > 1) { // проверка если не "#"
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 50,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const modal = document.getElementById('lab-modal');
    const modalCloseButtons = document.querySelectorAll('.modal-close, .modal-close-btn');
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            closeModal();
        });
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            console.log('Form submitted:', { name, email, subject, message });
            
        //обратная связь не работает]]]]]]
            contactForm.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h3>Сообщение отправлено!</h3>
                    <p>Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.</p>
                </div>
            `;
        });
    }
    
    const scrollElements = document.querySelectorAll('.fade-up, .fade-in, .fade-left, .fade-right');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementHeight = el.getBoundingClientRect().height;
        
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('active');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('active');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 90)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.classList.add(`delay-${(index + 1) * 100}`);
    });
    
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.classList.add(`delay-${(index + 1) * 100}`);
    });
    
    window.addEventListener('load', () => {
        handleScrollAnimation();
    });
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});

//1.45 ночи :: вроде работает
//2.30 ночи :: оно работает
//то что работает не удалял мб кто-то допишет
 // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Intersection Observer para animaciones
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Formulario
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Animación de éxito
            const button = e.target.querySelector('button');
            const originalText = button.innerHTML;
            button.innerHTML = '¡Mensaje enviado! ✓';
            button.classList.add('bg-green-500');
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('bg-green-500');
                e.target.reset();
            }, 3000);
        });

        // Parallax suave en hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('#inicio');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
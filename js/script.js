// Script para rolagem suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação de elementos quando entrarem na viewport
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe 'animate-on-scroll' para elementos que devem ser animados
    const elementsToAnimate = [
        '.project-section',
        '.project-card',
        '.profile',
        '.links a'
    ];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('animate-on-scroll');
        });
    });
    
    // Configura o Intersection Observer para animar elementos quando entrarem na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});

// Modo escuro/claro toggle (implementação futura)
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    // Salvar preferência no localStorage
    const isDarkMode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('preferredTheme', isDarkMode);
}

// Função para atualizar ano no footer
function updateFooterYear() {
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace(/\d{4}/, currentYear);
    }
}

// Executar quando a página carregar
window.onload = function() {
    updateFooterYear();
    
    // Verificar preferência de tema
    const preferredTheme = localStorage.getItem('preferredTheme');
    if (preferredTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}; 
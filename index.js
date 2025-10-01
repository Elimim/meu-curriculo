document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Função para ativar o modo escuro
    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    };

    // Função para desativar o modo escuro
    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    };

    // Verifica a preferência do usuário no localStorage ao carregar a página
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    }

    // Adiciona o evento de clique no botão
    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});
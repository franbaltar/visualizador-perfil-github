const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName) {
        // Mostra o estado de carregamento
        profileResults.innerHTML = '<div class="loading">Buscando perfil...</div>';

        try {
            const response = await fetch(`${BASE_URL}/users/${userName}`);

            if (!response.ok) {
                profileResults.innerHTML = '<p class="error">Usuário não encontrado. Verifique o nome e tente novamente.</p>';
                return;
            }

            const userData = await response.json();
            console.log(userData);

            profileResults.innerHTML = `
                <div class="profile-card">
                    <img src="${userData.avatar_url}" alt="${userData.name}" class="profile-avatar">
                    <div class="profile-info">
                        <h2>${userData.name || userData.login}</h2>
                        <p>${userData.bio || 'Sem biografia disponível 😢.'}</p>
                    </div>
                </div>
            `;


        } catch (error) {
            console.error('Erro ao buscar o perfil do GitHub:', error);
            profileResults.innerHTML = '<p class="error">Ocorreu um erro ao buscar o perfil. Tente novamente mais tarde.</p>';
        }

    } else {
        alert('Por favor, digite um nome de usuário do GitHub.');
    }
});

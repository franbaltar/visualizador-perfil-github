import { getGitHubUser, getGitHubUserRepos } from './githubService.js';
import { renderLoadingState, renderErrorMessage, renderProfile } from './ui.js';

const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

inputSearch.addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if (isEnterKeyPressed) {
        btnSearch.click();
    }
});

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.trim();

    if (!userName) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        return;
    }

    renderLoadingState(profileResults);

    try {
        const userData = await getGitHubUser(userName);
        const userRepos = await getGitHubUserRepos(userName);

        renderProfile(profileResults, userData, userRepos);
    } catch (error) {
        console.error('Erro ao buscar o perfil do GitHub:', error);
        const errorMessage = error.message === 'Usuário não encontrado. Verifique o nome e tente novamente.'
            ? error.message
            : 'Ocorreu um erro ao buscar o perfil. Tente novamente mais tarde.';
        renderErrorMessage(profileResults, errorMessage);
    }

});


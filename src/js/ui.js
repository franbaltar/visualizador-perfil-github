export function renderLoadingState(container) {
    container.innerHTML = '<div class="loading">Buscando perfil...</div>';
}

export function renderErrorMessage(container, message) {
    container.innerHTML = `<p class="error">${message}</p>`;
}

export function renderProfile(container, userData, userRepos) {

    const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
        <div class="repository-card">
        <a href="${repo.html_url}" target="_blank">
            <h3>${repo.name}</h3>
            <div class="repository-stats">
                <span>⭐ Stars: ${repo.stargazers_count}</span>
                <span>🍴 Forks: ${repo.forks_count}</span>
                <span>👀 Watchers: ${repo.watchers_count}</span>
                <span>💻 Language: ${repo.language || 'Não informado'}</span>
            </div>
        </a>
        </div>
    `).join('') : '<p>Este usuário não possui repositórios públicos 😢.</p>';





    container.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="${userData.name || userData.login}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || userData.login}</h2>
                <p>${userData.bio || 'Sem biografia disponível 😢.'}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>

        <div class="profile-repositories">
            <h2> Repositórios</h2>
            <div class="repositories">
                ${repositoriesHTML}
            </div>
        </div>
    `;
}

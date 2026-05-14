export function renderLoadingState(container) {
    container.innerHTML = '<div class="loading">Buscando perfil...</div>';
}

export function renderErrorMessage(container, message) {
    container.innerHTML = `<p class="error">${message}</p>`;
}

export function renderProfile(container, userData) {
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
    `;
}

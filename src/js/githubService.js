const BASE_URL = 'https://api.github.com';

export async function getGitHubUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
        throw new Error('Usuário não encontrado. Verifique o nome e tente novamente.');
    }

    return await response.json();
}

export async function getGitHubUserRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);

    if (!response.ok) {
        throw new Error('Não foi possível obter os repositórios do usuário. Tente novamente mais tarde.');
    }

    return await response.json();
}
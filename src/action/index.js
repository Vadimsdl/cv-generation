function handelError(response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Something went wrong');
}

export const getAllUsers = () => {
    return fetch('https://api.github.com/users').then((data) => handelError(data));
}

export const getCurrentUser = (username) => {
    return fetch(`https://api.github.com/users/${username}`).then((data) => handelError(data));
}

export const getRepository = (username) => {
    return fetch(`https://api.github.com/users/${username}/repos`).then((data) => handelError(data));
}

export const getRepositoryInfo = (username, repositoryName) => {
    return fetch(`https://api.github.com/repos/${username}/${repositoryName}/languages`).then((data) => handelError(data));
}
function getCharactersInfo() {
    const characterNameInput = document.getElementById('characterName')
    const characterInfo = document.getElementById('charactersInfo')

    const characterName = characterNameInput.value.toLocaleLowerCase()

    fetch(`http://localhost:3001/character/${characterName}`)
    .then(response => response.json())
    .then(data => {
        const {name, status, species, gender, origin: {name:originName}, image} = data
        characterInfo.innerHTML = `
        <img src="${image}" alt="${name}" />
        <h2>Name: ${name}</h2>
        <p>Status: ${status}</p>
        <p>Species: ${species}</p>
        <p>Gender: ${gender}</p>
        <p>Origin: ${origin}</p>
        `
    })
    .catch(error => characterInfo.innerHTML = `<p>Impossible acceder a este personaje</p>`)

}


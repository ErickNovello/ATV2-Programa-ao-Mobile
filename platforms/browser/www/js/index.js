document.addEventListener('deviceready', onDeviceReady.bind(this), false);

function onDeviceReady() {
    // Inicialize a lista de bios
    var bios = JSON.parse(window.localStorage.getItem('bios')) || [];

    // Adicione as bios à lista na página inicial
    var bioListElement = document.getElementById('bio-list');
    bios.forEach(function(bio) {
        var bioElement = createBioElement(bio);
        bioListElement.appendChild(bioElement);
    });

    // Adicione um evento de clique ao botão "Nova Bio"
    var addBioButton = document.getElementById('add-bio-button');
    addBioButton.addEventListener('click', function() {
        // Abra a tela de cadastro de bio
        window.location.href = 'cadastro.html';
    });
}

function createBioElement(bio) {
    // Crie um elemento HTML para exibir a bio
    var bioElement = document.createElement('div');
    bioElement.className = 'bio';
    bioElement.innerHTML = `
        <img src="${bio.photo}" alt="${bio.name}">
        <h2>${bio.name}</h2>
        <p>${bio.age} anos, ${bio.profession}</p>
        <p>${bio.summary}</p>
    `;
    return bioElement;
}

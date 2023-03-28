document.addEventListener('deviceready', onDeviceReady.bind(this), false);

function onDeviceReady() {
    // Adicione um evento de envio ao formulário de cadastro de bio
    var bioForm = document.getElementById('bio-form');
    bioForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Obtenha os valores do formulário
        var photo = document.getElementById('photo').value;
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var profession = document.getElementById('profession').value;
        var summary = document.getElementById('summary').value;
        // Crie um objeto bio com os valores do formulário
        var bio = {
            photo: photo,
            name: name,
            age: age,
            profession: profession,
            summary: summary
        };
        // Adicione a nova bio à lista de bios e salve no armazenamento local
        var bios = JSON.parse(window.localStorage.getItem('bios')) || [];
        bios.push(bio);
        window.localStorage.setItem('bios', JSON.stringify(bios));
        // Retorne à página inicial
        window.location.href = 'index.html';
    });
}

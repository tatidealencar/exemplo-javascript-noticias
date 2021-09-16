var noticias = [];

for (let i = 1; i <= 10; i++) {
    let noticia = {
        titulo: "Notícia " + i,
        data: moment().format('DD/MM/YYYY')
    }
    noticias.push(noticia);
}

var div = document.getElementById("noticias");

var ul = document.createElement('ul');
noticias.forEach(function(valor) {
    var li = document.createElement('li');
    li.innerHTML = valor['titulo'] + " <br>Data: " + valor['data'];
    li.style.paddingBottom = '10px';
    ul.appendChild(li);
});

div.appendChild(ul);

function addNoticia(formulario) {
    var lista = $('ul');
    var novaNoticia = document.createElement('li');
    novaNoticia.innerHTML = formulario['titulo'].value + " <br>Data: " + moment(formulario['data'].value).format('DD/MM/YYYY');
    novaNoticia.style.paddingBottom = '10px';
    lista.append(novaNoticia);
    return false;
}

function pesquisar() {
    var itemPesquisa = document.getElementById('pesquisa').value;
    var lista = document.getElementsByTagName('li');

    for (let i = 0; i < lista.length; i++) {
        lista[i].style.backgroundColor = "white";
        if (lista[i].innerText.includes(itemPesquisa)) {
            lista[i].style.backgroundColor = "yellow";
        }
    }
}

function limparFiltro() {
    var lista = document.getElementsByTagName('li');

    for (let i = 0; i < lista.length; i++) {
        lista[i].style.backgroundColor = "white";
    }
}
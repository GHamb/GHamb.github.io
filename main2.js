
console.log(localStorage.getItem('obj'))

var rep = JSON.parse(localStorage.getItem('obj'))

var nome = rep.owner.login;

var img_p = document.createElement('img')
img_p.setAttribute('src', rep.owner.avatar_url)

var p_flw = "https://api.github.com/users/GHamb/following";

var desc_rep = rep.description;

var colab = rep.collaborators_url;

var branches = "https://api.github.com/repos/GHamb/" + rep.name + "/branches";

var list_commit = "https://api.github.com/repos/GHamb/" + rep.name + "/commits";

var ling_util = rep.languages_url;


document.getElementById('nome').innerHTML = nome;
document.getElementById('img_p').appendChild(img_p)
document.getElementById('desc').innerHTML = 'Descrição : ' + desc_rep;


//requisição linguagem
const req = new XMLHttpRequest();

req.open("GET", ling_util)
req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        for (i = 0; i < this.responseText.length; i++) {
            document.getElementById('listlg').innerHTML = 'Linguagens : <br>' + Object.keys(JSON.parse(this.responseText)) + '<img id="grf"src="img/grf.png" width="50px">';

        }

    }
}
req.send()



//requisição seguidores

const req2 = new XMLHttpRequest();

req2.open("GET", p_flw)
req2.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        var salvajson = JSON.parse(this.responseText)
        var salvar = document.getElementById('peseg')

        salvar.innerHTML = 'Estou seguindo : '
        salvar.innerHTML += (salvajson.length) + ' pessoas'

    }
}
req2.send()

//requisição lista commits

const req4 = new XMLHttpRequest();

req4.open("GET", list_commit)
req4.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        var salvarc = JSON.parse(this.responseText)
        for (var i = 0; i < salvarc.length; i++) {
            document.getElementById('listcommit').innerText += ' ' + salvarc[i].commit.message + ','

            console.log(salvarc[i].commit.message)
        }

    }
}
req4.send()

//requisição branches

const req5 = new XMLHttpRequest();

req5.open("GET", branches)
req5.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var salvarb = JSON.parse(this.responseText)
        for (var i = 0; i < branches.length; i++)

            document.getElementById('branches').innerText += ' ' + salvarb[i].name + ','
    }
}
req5.send()















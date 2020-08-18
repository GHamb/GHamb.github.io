
console.log(localStorage.getItem('obj'))

var rep = JSON.parse(localStorage.getItem('obj'))

var nome = rep.owner.login;

var img_p = document.createElement('img')
img_p.setAttribute('src', rep.owner.avatar_url)

var p_flw = rep.owner.following_url;

var desc_rep = rep.description;

var colab = rep.collaborators_url;

var branches = rep.branches_url;

var list_commit = rep.commits_url;

var ling_util = rep.languages_url;


document.getElementById('nome').innerHTML = nome;
document.getElementById('img_p').appendChild(img_p)
document.getElementById('desc').innerHTML = desc_rep;


//requisição linguagem
const req = new XMLHttpRequest();

req.open("GET", ling_util)
req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        for (i = 0; i < this.responseText.length; i++) {
            document.getElementById('listlg').innerHTML = Object.keys(JSON.parse(this.responseText));

        }

    }
}
req.send()



//requisição seguidores

const req2 = new XMLHttpRequest();

req2.open("GET", p_flw)
req2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('peseg').innerHTML = JSON.parse(this.responseText)['message']

    } else if (this.status == 404) {
        document.getElementById('peseg').innerHTML = 'Not found'

    }
}
req2.send()


//requisição colaboração

const req3 = new XMLHttpRequest();

req3.open("GET", colab)
req3.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('colab').innerHTML = JSON.parse(this.responseText)['message']

    } else if (this.status == 404) {
        document.getElementById('colab').innerHTML = 'Not found'

    }
}
req3.send()



//requisição lista commits

const req4 = new XMLHttpRequest();

req4.open("GET", list_commit)
req4.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('listcommit').innerHTML = JSON.parse(this.responseText)['message']

    } else if (this.status == 404) {
        document.getElementById('listcommit').innerHTML = 'Not found'

    }
}
req4.send()

//requisição branches

const req5 = new XMLHttpRequest();

req5.open("GET", branches)
req5.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('branches').innerHTML = JSON.parse(this.responseText)['message']

    } else if (this.status == 404) {
        document.getElementById('branches').innerHTML = 'Not found'

    }
}
req5.send()















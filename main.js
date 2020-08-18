const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/Ghamb/repos")

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        const obj = JSON.parse(this.responseText)
        document.getElementById('tabela').innerHTML = "";
        for (var i = 0; i < obj.length; i++) {
            document.getElementById('tabela').innerHTML += "<tr><td> Nome: " + obj[i].name + " </td>  <td>Linguagem: " + obj[i].language + "</td><td><a target='_blank'href='" + obj[i].html_url + "'>Link: " + obj[i].html_url + "</a></td> <td>Clonar: <button  onclick='copyToClipboard(this)'> " + obj[i].clone_url + "</button></td>" + "<td><a href='info.html' target='_blank' onclick='envia(" + JSON.stringify(obj[i]) + ")'><img src='img/info.png' width='35px'></img></a></td>" + "<td><img src='img/" + obj[i].language + ".png' width='60px' height='60px'></img></td></tr>";
        }
    }
}
xhr.send()

function envia(obj) {
    localStorage['obj'] = JSON.stringify(obj)
    console.log(obj)
}


function copyToClipboard(btn) {
    var input = document.createElement("input");
    input.value = btn.innerText;
    console.log(btn.innerText)
    input.id = "input";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
}
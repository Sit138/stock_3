/*вывод сoхраненных данных в новое модальное окно(просто чтобы не засорять форму)*/
function showDataInWin() {
    var newWin = window.open("about:blank", "Data", "width:200, height:200"),
        key = ['firstname', 'surname', 'url', 'tel', 'num', 'rang', 'color'],
        i;
    for(i = 0; i < key.length; i++){
        newWin.document.write(key[i] + " :" + localStorage[key[i]] + "<br/>");
    }
}

/*заполнение полей данными последнего сохранения*/
function outputInField() {
    var key = ['firstname', 'surname', 'url', 'tel', 'email', 'num', 'rang', 'color'],
        i;
    if('surname' in localStorage){
        for(i = 0; i < key.length; i++){
            document.getElementById(key[i]).value = localStorage[key[i]];
        }
    }
}
outputInField();

function validateFieldAndSave(form){
    var elem = form.elements,
        regNum = /\d/,
        count = 0,
        regEmail = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i,
        key = ['firstname', 'surname', 'url', 'tel', 'email', 'num'],
        i;
    resetError(elem.firstname.parentNode);//сбрасываю
    resetError(elem.surname.parentNode);
    resetError(elem.num.parentNode);
    resetError(elem.email.parentNode);
    resetError(elem.tel.parentNode);
    resetError(elem.url.parentNode);

    for(i = 0; i < key.length; i++){
        if(!elem[key[i]].value) {
            showError(elem[key[i]].parentNode, 'Enter the name');
        }
        else {
            localStorage[key[i]] = document.getElementById(key[i]).value;
            count++;
        }
    }
    localStorage.rang = document.getElementById('rang').value;
    localStorage.color = document.getElementById('color').value;
    if(count == form.elements.length - 4){
        showDataInWin();
    }
}

function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}
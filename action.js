/*вывод сoхраненных данных в новое модальное окно(просто чтобы не засорять форму)*/
function showDataInWin() {
    var newWin = window.open("about:blank", "Data", "width:200, height:200"),
        i,
        key = varKey();
    for(i = 0; key.length > i; i++){
        newWin.document.write(key[i] + " :" + localStorage[key[i]] + "<br/>");
    }
}

/*заполнение полей данными последнего сохранения*/
function outputInField() {
    var i,
        key = varKey();
        if('surname' in localStorage){
        for (i = 0; key.length > i; i++) {
            document.getElementById(key[i]).value = localStorage[key[i]];
        }
        document.getElementById('level').value = document.getElementById('rang').valueAsNumber;
    }
}
outputInField();
function varKey(){
     var key = ['firstname', 'surname', 'url', 'tel', 'email', 'num', 'rang', 'color'];
    return key;
}
function validateFieldAndSave(form){
    var elem = form.elements,
        count = 0, i = 0,
        regNum = /\d/,
        regEmail = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i,
        regUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        regName = /^[А-ЯЁ][а-яё]*$/,
        key = ["firstname", "surname", "email", "url", "num"],//ключи для регулярок
        regExp = {//объект, котоый хранит все наши регулярки
            'firstname': regName,
            'surname': regName,
            'url': regUrl,
            'email': regEmail,
            'num': regNum
        };
    for (i ; key.length > i; i++) {
        resetError(elem[key[i]].parentNode);
        if (!elem[key[i]].value || !regExp[key[i]].test(elem[key[i]].value)) {
            showError(elem[key[i]].parentNode);
        }
        else {
            localStorage[key[i]] = document.getElementById(key[i]).value;
            count++;
        }
    }
    localStorage.tel = document.getElementById('tel').value;//телефон проверяется на jquery, поэтому просто сохраняем
    localStorage.rang = document.getElementById('rang').value;
    localStorage.color = document.getElementById('color').value;
    if(count == form.elements.length - 5){
        showDataInWin();
    }
}

function showError(container) {
    container.className = 'error';
    //var msgElem = document.createElement('span');
    //msgElem.className = "error-message";
    //msgElem.innerHTML = errorMessage;
    //container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}


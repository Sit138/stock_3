/*сохранение данных в localStorage (функция для простого сохранения без валидации полей)
function save(){
    localStorage.name = document.getElementById('firstname').value;
    localStorage.surname = document.getElementById('surname').value;
    localStorage.email = document.getElementById('email').value;
    localStorage.url = document.getElementById('url').value;
    localStorage.tel = document.getElementById('tel').value;
    localStorage.num = document.getElementById('num').value;
    localStorage.rang = document.getElementById('range').value;
    localStorage.color = document.getElementById('color').value;
    showDataInWin();
}*/

/*вывод сoхраненных данных в новое модальное окно(просто чтобы не засорять форму)*/
function showDataInWin() {
    var newWin = window.open("about:blank", "Data", "width:200, height:200");
    newWin.document.write("Saved data:<br/>"
        + "Name:"+ localStorage.name + "<br/>"
        + "Surname: " + localStorage.surname + "<br/>"
        + "E-mail: " + localStorage.email + "<br/>"
        + "URL:" + localStorage.url + "<br/>"
        + "Tel:" + localStorage.tel + "<br/>"
        + "Number: " + localStorage.num + "<br/>"
        + "Number from rang: " + localStorage.rang + "<br/>"
        + "Color: " + localStorage.color + "<br/>");
}

/*заполнение полей данными последнего сохранения*/
function outputInField() {
    document.getElementById('firstname').value = localStorage.name;
    document.getElementById('surname').value = localStorage.surname;
    document.getElementById('email').value = localStorage.email;
    document.getElementById('url').value = localStorage.url;
    document.getElementById('tel').value = localStorage.tel;
    document.getElementById('num').value = localStorage.num;
    document.getElementById('range').value = localStorage.rang;
    document.getElementById('level').value = document.getElementById('range').valueAsNumber;
    document.getElementById('color').value = localStorage.color;
}
outputInField();

function validateFieldAndSave(form){
    var elem = form.elements,
        regNum = /\d/,
        count = 0,
        regEmail = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i,
        regTel = /[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/;
    resetError(elem.firstname.parentNode);//сбрасываю
    resetError(elem.surname.parentNode);
    resetError(elem.num.parentNode);
    resetError(elem.email.parentNode);
    resetError(elem.tel.parentNode);
    if(!elem.firstname.value) {
        showError(elem.firstname.parentNode, 'Enter the name');
    }
    else {
        localStorage.name = document.getElementById('firstname').value;
        count++;
    }

    if(!elem.surname.value) {
        showError(elem.surname.parentNode, 'Enter the surname');
    }
    else {
        localStorage.surname = document.getElementById('surname').value;
        count++;
    }

    if(!elem.num.value && !regNum.test(elem.num.value)){
        showError(elem.num.parentNode, 'Enter only numbers');
    }
    else {
        localStorage.num = document.getElementById('num').value;
        count++;
    }

    if(!elem.email.value || !regEmail.test(elem.email.value)) {
        showError(elem.email.parentNode, 'Error Email');
    }
    else {
        localStorage.email = document.getElementById('email').value;
        count++;
    }

    if(!elem.tel.value || !regTel.test(elem.tel.value)) {
        showError(elem.tel.parentNode, 'Error telephone');
    }
    else {
        localStorage.tel = document.getElementById('tel').value;
        count++;
    }

    if(!elem.url.value) {
        showError(elem.tel.parentNode, 'Error telephone');
    }
    else {
        localStorage.url = document.getElementById('url').value;
        count++;
    }
    localStorage.rang = document.getElementById('range').value;
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
const inputEle = document.querySelector('input');
const btn = document.querySelector('button');
const ulList = document.querySelector('ul');

function clickFun(){
    const inputValue = inputEle.value;
    const listItems = document.createElement('li');
    listItems.textContent = inputValue;
    ulList.append(listItems);
    inputEle.value = '';
}

btn.addEventListener('click', clickFun);
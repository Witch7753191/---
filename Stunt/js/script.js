"use strict";
alert("Привет! JavaScript подключен!");

//Валийный JavaScript//

//модальное окна //

const openButton = document.querySelectorAll('.open_button')
const pop_up = document.querySelector('.pop_up_body')
const closeBtn = document.querySelector('.close-pop_up')
for (const Button of openButton) {

    Button.addEventListener('click', () => {
        pop_up.classList.add('pop_up_opened')
    })
}

//closeBtn.addEventListener('click', () => {//
   // PopUp.classList.remove('pop_up_opened')})
//

const Button = document.getElementById('open_button');
const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('close_pop_up');
const PopUp = document.getElementById('pop_up');
const BodyPopUp = document.getElementById('body_pop_up');

//openButton.addEventListener('click', function(e){
   // e.preventDefault();//
    //Button.classList.add('active');}) //

  //  Button.addEventListener('click', () => {
  //  Button.classList.remove('active');})


//openPopUp.addEventListener('click', function(e){
   // e.preventDefault();
   // PopUp.classList.add('active');}) 

//closePopUp.addEventListener('click', () => {
  //  PopUp.classList.remove('active');})

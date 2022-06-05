let tg = window.Telegram.WebApp;

function cust(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isVisible){ //если кнопка показана 
		tg.MainButton.hide() //скрываем кнопку 
	}
  else{ //иначе
  	tg.MainButton.show() //показываем 
  }}

  function custTwo(){ 
    tg.sendData("aaa")
   }

   function custThree(){ 
    tg.MainButton.onClick(custTwo)
   }
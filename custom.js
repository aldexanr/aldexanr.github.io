let tg = window.Telegram.WebApp;

function cust(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isVisible){ //если кнопка показана 
		tg.MainButton.hide() //скрываем кнопку 
	}
  else{ //иначе
  	tg.MainButton.show() //показываем 
  }}

  function custTwo(){ 
    tg.MainButton.setText("jjj")
   }

   function custThree(){ 
    Telegram.WebApp.sendData(new Date().toString());
   }


   Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData("some string that we need to send"); 
    //при клике на основную кнопку отправляем данные в строковом виде
 });
 Telegram.WebApp.MainButton
 .setText('CLOSE WEBVIEW')
 .show()
 .onClick(function(){ webviewClose(); });
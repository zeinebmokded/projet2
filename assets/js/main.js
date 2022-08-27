/*welcome alert /** */
var close = document.getElementsByClassName("closebtn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);}
  }
/*like/** */
var btnvar= document.getElementsByClassName("fa-heart");
console.log(btnvar)
for(let i=0 ; i<btnvar.length ;i++){
btnvar[i].addEventListener ('click',function(){
    if (btnvar[i].style.color == "black" ){
        btnvar[i].style.color= "red"
    } else{btnvar[i].style.color= "black" }
    
})}
/**form */
function validateForm() {
  var name = document.loginForm.name.value
  var password = document.loginForm.password.value
  var email= document.loginForm.email.value
if  (name.length==0 || email.length==0) return alert(`All fields are required`);
if (password.length<5) return alert(`password length should more than 5`);
else return alert(`Congratulation ! you are now part of Zénobie`);
}


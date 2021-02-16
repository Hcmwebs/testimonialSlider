const slides =document.querySelectorAll('.cardSlide');
const slider = document.getElementById('slider');
const btn = document.querySelectorAll('.btnIndicator')
const current = 0;

//move slide manually

btn[0].onclick = function (e){
  slider.style.transform = 'translateX(0px)';
  for (let i = 0; i< btn.length; i++){
    btn[i].classList.remove("active")
  }
e.target.classList.add("active")
}
btn[1].onclick = function (e){
  slider.style.transform = 'translateX(-1000px)';
  for (let i = 0; i< btn.length; i++){
    btn[i].classList.remove("active")
  }
  e.target.classList.add("active")
}
btn[2].onclick = function (e){
  slider.style.transform = 'translateX(-2000px)';
  for (let i = 0; i< btn.length; i++){
    btn[i].classList.remove("active")
  }
  e.target.classList.add("active")
}
btn[3].onclick = function (e){
  slider.style.transform = 'translateX(-3000px)';
  for (let i = 0; i< btn.length; i++){
    btn[i].classList.remove("active")
  }
  e.target.classList.add("active")
}




//move slide automatically
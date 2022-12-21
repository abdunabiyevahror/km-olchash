
function btn(){
     var input = document.querySelector('.inp').value
     var elbtn = document.querySelector('.btn')
     var piyoda = document.querySelector('.onfoot')
     var velosiped = document.querySelector('.bike')
     var mashina = document.querySelector('.car')
     var samalyot = document.querySelector('.plane')

     var onfoot = Math.trunc(input/4)
     var bike = Math.trunc( input/20)
     var  car = Math.trunc( input/70)
     var  plane =  Math.trunc(input/800)
    if (0<input){
         onfoot. textContent =  piyodacha
    }
    else{
        alert('son kiriting')
    }
    if (0<input){
         bike. textContent = velosipedcha
    }
    else{
        alert('son kiriting')
    }
    if (0<input){
         car.textContent = mashinacha
    }
    else{
        alert('son kiritng')
    }
    if (0<input){
         plane. textContent = samalyotcha
    }
    else{
        alert('son kiriting')
    }
}

var elInput = document.querySelector('.input')

input.addEventListener('keyup', function(evn){
    if(evn.target.value.length >=2){
        input.style.border = '2px solid green'
    }
    else{
        input.style.border = '2px solid red'
    }
})

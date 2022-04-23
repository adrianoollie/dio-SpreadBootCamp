let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {	
    if (count < 10){
        count++;
        CURRENT_NUMBER.innerHTML = count;        
    } else {
        alert("Posição maxima do contador alcançada!");  
    }
	
}

function decrement() {	
    if (count > 0){        
        count--;
        CURRENT_NUMBER.innerHTML = count;
    } else {        
        alert("Contador aceita apenas posições positivas!");
    }
	
}
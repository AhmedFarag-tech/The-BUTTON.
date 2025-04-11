let count = 0;

let button = document.getElementById('button');
let countElement = document.getElementById('count');

button.onclick = function() {
    if(count<100){
      count++;
      countElement.textContent = count;
    }
    else{
      count += 0.001;
      countElement.textContent = count.toFixed(3);
    }
};


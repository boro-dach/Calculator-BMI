document.querySelector('#sum').addEventListener('click', getInfo)

function getInfo(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let heightRes = Math.pow(height / 100, 2);
    let result = weight / heightRes;
    let paragraph = document.querySelector('.result');
    paragraph.textContent = `Your BMI is: ${result.toFixed(2)}`;
    let recText = document.querySelector('.rec');
    if(result <= 19){
        recText.textContent = 'Your weight is too low. Eat more!';
    }
    else if(result > 19 & result <= 26){
        recText.textContent = 'Your weight is perfect. You are cool!';
    }
    else if(result > 26){
        recText.textContent = 'Your weight is too big. Eat less!';
    }
}
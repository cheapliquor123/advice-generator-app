const adviceID = document.querySelector('#adviceID');
const adviceText = document.querySelector('#adviceText');
const button = document.querySelector('#btn');

function getAdvice() {



    fetch('https://api.adviceslip.com/advice').then(Response =>{
        return Response.json();
    }).then(apiData => {
        const adviceNum = apiData.slip.id;
        const advice = apiData.slip.advice;

        adviceID.innerHTML = adviceNum;
        adviceText.innerHTML = advice;
    }).catch(Error => {
        console.log(Error);
    })

}

button.addEventListener('click', function() {
    getAdvice();
})

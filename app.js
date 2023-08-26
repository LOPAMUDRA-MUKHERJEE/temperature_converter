let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let cTemp= parseFloat(celciusInput.value)
    let fTemp= (cTemp*(9/5))+32
    let kTemp=  cTemp+ 273.15


    fahrenheitInput.value= roundNumber(fTemp)
    kelvinInput.value= roundNumber(kTemp)
})


fahrenheitInput.addEventListener('input', function(){
    let fTemp= parseFloat(fahrenheitInput.value)
    let cTemp= (fTemp- 32)* (5/9)
    let kTemp=  (fTemp- 32)* (5/9) + 273.15


    celciusInput.value= roundNumber(cTemp)
    kelvinInput.value= roundNumber(kTemp)
})

kelvinInput.addEventListener('input', function(){
    let kTemp= parseFloat(kelvinInput.value)
    let cTemp= kTemp- 273.15
    let fTemp=  (kTemp- 273.15)* (9/5) + 32


    celciusInput.value= roundNumber(cTemp)
    fahrenheitInput.value= roundNumber(fTemp)
})


btn.addEventListener('click', ()=>{
    celciusInput.value =""
    fahrenheitInput.value =""
    kelvinInput.value =""


})





















// const celsiusField= document.querySelector("#celsius");
// const degree= document.querySelector("#degree");
// const convertbtn= document.querySelector("#convert-btn");
// const temptype= document.querySelector("#temp-type");

// window.addEventListener("load",()=>{
//     degree.value="";
//     celsiusField.innerHTML="";
// })


// convertbtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     converttoCelsius();
// })

// convertbtn.innerHTML= "<span><i class='fa fa-spinner fa-spin'></i>converting..</span>";

// setTimeout(() => {
//     convertbtn.innerHTML= "<span>Convert</span>"
// }, 1000)



// function converttoCelsius(){
//     let inputvalue= degree.value;

//     setTimeout(()=>{

//     if(temptype.value==="fahrenheit"){
//         const fahrenheittocelsius= (inputvalue-32)*(5/9);
//         celsiusField.innerHTML= (fahrenheittocelsius).toFixed(3);
//     }
    
//     else if(temptype.value==="kelvin"){
//         const kelvintocelsius=inputvalue -273.15;
//         celsiusField.innerHTML= (kelvintocelsius).toFixed(3);
//     }
// },1100)

//     }



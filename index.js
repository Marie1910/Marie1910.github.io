const QUESTIONS = load("originalQuestions");
const PUNISHMENTS = load("originalPunishments");

let modifiedQuestions = [];
let modifiedPunishments = [];

const button = document.getElementById("generator");
const punishmentParagraph = document.getElementById("punishmentParagraph");
const questionParagraph = document.getElementById("questionParagraph");

function setUp(){
    //copy the loaded values into the real arrays
    modifiedPunishments = [...PUNISHMENTS];
    modifiedQuestions = [...QUESTIONS];
    
}

function getElement(array, element){
    let number = Math.floor(Math.random() * array.length);
    console.log(number, array, element);
   
    element.innerHTML = array[number]
    array.splice(number,1);
   
}
button.addEventListener("click", ()=>{
    
    
    getElement(modifiedQuestions, questionParagraph);
    getElement(modifiedPunishments, punishmentParagraph);
    
    if (modifiedQuestions.length==0){
         modifiedQuestions = [...QUESTIONS];
    }
     if (modifiedPunishments.length==0){
          modifiedPunishments = [...PUNISHMENTS];
    }
    
})
window.addEventListener("load", () => {
    setUp();
    
});
function load (element){
    let string = document.getElementById(element).innerHTML;
    let array = string.split(",");
    return array;
}


   
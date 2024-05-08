

let echoFunction = 's&t'
let input_setting = 'Speech'
let output_setting = 'Text'


// explosive/decompose title function
const decompose = id => {
    const element = document.getElementById(id),
        text = element.innerText.split("");

    element.innerText = "";

    text.forEach(letter => {
        const span = document.createElement("span");

        span.className = "letter";
        span.innerText = letter;

        element.appendChild(span);
    });

}

decompose("echoverse");



// Function to message element after a delay

function hideMessage() {
    var element = document.getElementById('msg');
    if (element) {
        element.classList.add('hidden');
        setTimeout(function() {
            element.style.display = 'none';
        }, 500);
    }
}

let delayInMilliseconds = 3300;
setTimeout(hideMessage, delayInMilliseconds);



// Applies opacity to non-hovered links

// // Select all anchor elements within the navbar
// const navbarLinks = document.querySelectorAll('.navbar a');

// // Mouse enter event handler
// const handleMouseEnter = function(event) {
//     // Loop through all navbar links
//     navbarLinks.forEach(link => {
//         // Add 'dim' class to non-hovered links
//         if (link !== event.target) {
//             link.classList.add('dim');
//         }
//     });
// };

// // Mouse leave event handler
// const handleMouseLeave = function() {
//     // Remove 'dim' class from all navbar links
//     navbarLinks.forEach(link => {
//         link.classList.remove('dim');
//     });
// };

// // Attach event listeners to each navbar link
// navbarLinks.forEach(link => {
//     link.addEventListener('mouseenter', handleMouseEnter);
//     link.addEventListener('mouseleave', handleMouseLeave);
// });


// jQuery version
$('.navbar a').hover(
    function() {
        $('.navbar a').not(this).addClass('dim');
    }, function() {
        $('.navbar a').removeClass('dim');
    }
);


// toggle buttons (input & output btn functionality)

const toggleButtons = (target) => {
    const type = target.dataset.toggle;
    const value = target.dataset.value;

    const buttons = document.querySelectorAll('.toggle-btn[data-toggle="' + type + '"]');

    buttons.forEach(btn => {
        if (btn === target) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // parent containers
    let inputBox = document.querySelector('.input-box');
    const outputBox = document.querySelector('.output-box');

    if (type == 'type') {
        echoFunction = value;
    } else if (type === 'input') {
    
        // Elements to remove
        let inputTxtField = document.getElementById('in-txt-field');
        let inputSpeechField = document.getElementById('in-spch-field');;

        // parent containers
        let inputBox = document.querySelector('.input-box');
        const outputBox = document.querySelector('.output-box');
    
        
        if (value === 'speech' && inputTxtField && inputTxtField.parentNode) {
            
            inputTxtField.parentNode.removeChild(inputTxtField); // Remove inputField using its parent node

            const newSpeechElement = document.createElement('div');
            newSpeechElement.setAttribute('type', 'speech');
            newSpeechElement.setAttribute('class', 'input-speech');
            newSpeechElement.setAttribute('id', 'in-spch-field');
            newSpeechElement.setAttribute('placeholder', 'Speak into the microphone...')

            console.log(newSpeechElement);

            inputBox.appendChild(newSpeechElement);


        } else if (value === 'text' && inputSpeechField && inputSpeechField.parentNode) {
            inputSpeechField.parentNode.removeChild(inputSpeechField);

            const newTextElement = document.createElement('input');
            newTextElement.setAttribute('type', 'text');
            newTextElement.setAttribute('class', 'input-text');
            newTextElement.setAttribute('id', 'in-txt-field');
            newTextElement.setAttribute('placeholder', 'Type anything here...');
            console.log(newTextElement);

            inputBox.appendChild(newTextElement);
        }
        

        console.log(value, 'input')

    } else if (type === 'output') {

        let outputTextField = document.getElementById('out-txt-field');
        let outputSpeechField = document.getElementById('out-spch-field');

        if (value === 'speech' && outputTextField && outputTextField.parentNode) {
            outputTextField.parentNode.removeChild(outputTextField); // Remove inputField using its parent node

            const newSpeechElement = document.createElement('div');
            newSpeechElement.setAttribute('type', 'speech');
            newSpeechElement.setAttribute('class', 'output-speech');
            newSpeechElement.setAttribute('id', 'out-spch-field');
            newSpeechElement.setAttribute('placeholder', 'Speak into the microphone...')

            console.log(newSpeechElement);

            outputBox.appendChild(newSpeechElement);


        } else if (value === 'text' && outputSpeechField && outputSpeechField.parentNode) {
            outputSpeechField.parentNode.removeChild(outputSpeechField);

            const newTextElement = document.createElement('input');
            newTextElement.setAttribute('type', 'text');
            newTextElement.setAttribute('class', 'output-text');
            newTextElement.setAttribute('id', 'out-txt-field');
            newTextElement.setAttribute('value', 'Output');
            newTextElement.setAttribute('disabled', '');
            console.log(newTextElement);

            outputBox.appendChild(newTextElement);
        }


        console.log(value, 'output');
    } 
    
};

const buttonContainer = document.querySelector('.main-section');
buttonContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('toggle-btn')) {
        toggleButtons(event.target);
    }
})

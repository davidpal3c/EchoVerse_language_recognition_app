
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


// Applies opacity to non-hovered links

// Select all anchor elements within the navbar
const navbarLinks = document.querySelectorAll('.navbar a');

// Mouse enter event handler
const handleMouseEnter = function(event) {
    // Loop through all navbar links
    navbarLinks.forEach(link => {
        // Add 'dim' class to non-hovered links
        if (link !== event.target) {
            link.classList.add('dim');
        }
    });
};

// Mouse leave event handler
const handleMouseLeave = function() {
    // Remove 'dim' class from all navbar links
    navbarLinks.forEach(link => {
        link.classList.remove('dim');
    });
};

// Attach event listeners to each navbar link
navbarLinks.forEach(link => {
    link.addEventListener('mouseenter', handleMouseEnter);
    link.addEventListener('mouseleave', handleMouseLeave);
});


// jQuery version
// $('.navbar a').hover(
//     function() {
//         $('.navbar a').not(this).addClass('dim');
//     }, function() {
//         $('.navbar a').removeClass('dim');
//     }
// );



// toggle buttons (input & output btns)
const st_transl = document.getElementById('st-btn');
const dictionary = document.getElementById('dict-btn');
const in_text_btn = document.getElementById('in-text-btn');
const in_speech_btn = document.getElementById('in-speech-btn');
const out_text_btn = document.getElementById('out-text-btn');
const out_speech_btn = document.getElementById('out-speech-btn');


function toggleButtons(activeButton) {

    if (activeButton === st_transl) {
        st_transl.classList.add('active');
        dictionary.classList.remove('active');
    } else if (activeButton === dictionary) {
        dictionary.classList.add('active');
        st_transl.classList.remove('active');
    } else if (activeButton === in_text_btn) {
        in_text_btn.classList.add('active');
        in_speech_btn.classList.remove('active');
    } else if (activeButton === in_speech_btn) {
        in_speech_btn.classList.add('active');
        in_text_btn.classList.remove('active');
    } else if (activeButton === out_text_btn) {
        out_text_btn.classList.add('active');
        out_speech_btn.classList.remove('active');
    } else if (activeButton === out_speech_btn) {
        out_speech_btn.classList.add('active');
        out_text_btn.classList.remove('active');
    }
}

st_transl.addEventListener('click', function () {
    toggleButtons(st_transl);
});

dictionary.addEventListener('click', function() {
    toggleButtons(dictionary);
});

in_text_btn.addEventListener('click', function () {
    toggleButtons(in_text_btn);
});

in_speech_btn.addEventListener('click', function() {
    toggleButtons(in_speech_btn);
});

out_text_btn.addEventListener('click', function () {
    toggleButtons(out_text_btn);
});

out_speech_btn.addEventListener('click', function() {
    toggleButtons(out_speech_btn);
});


//     // jQuery ready function to ensure DOM is fully loaded
// $(document).ready(function() {
//     // Click event handler for button
//     $('#st-btn').click(function() {
//         $(this).addClass('active');
//         $('#dict-btn').removeClass('active');
//     });

//     $('#dict-btn').click(function() {
//         $(this).addClass('active');
//         $('#st-btn').removeClass('active');
//     });

//     $('#in-text-btn').click(function() {
//         // Adds 'active' class to text-btn and removes it from speech-btn
//         $(this).addClass('active');
//         $('#in-speech-btn').removeClass('active');
//     });

//     $('#in-speech-btn').click(function () {
//         $(this).addClass('active');
//         $('#in-text-btn').removeClass('active');
//     });

//     $('#out-text-btn').click(function() {
//         // Adds 'active' class to text-btn and removes it from speech-btn
//         $(this).addClass('active');
//         $('#out-speech-btn').removeClass('active');
//     });

//     $('#out-speech-btn').click(function () {
//         $(this).addClass('active');
//         $('#out-text-btn').removeClass('active');
//     });

// });






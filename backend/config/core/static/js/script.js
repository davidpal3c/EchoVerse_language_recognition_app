

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


// applies opacity to non-hovered links
$('.navbar a').hover(
    function() {
        $('.navbar a').not(this).addClass('dim');
    }, function() {
        $('.navbar a').removeClass('dim');
    }
);





// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("comment").value = "";
}

// Function to simulate typing effect
window.onload = function () {
    // Function to simulate typing effect
    function typeWriter(text, elementId, speed) {
        let i = 0;
        const element = document.getElementById(elementId);
        element.innerHTML = ''; // Clear existing content
        const typingInterval = setInterval(function () {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);
    }

    // Call the typing function for title and description
    typeWriter("Hi, it's me Alex", "typed-title", 100);
    typeWriter("I am a professional software Developer in Nairobi.", "typed-desc", 100);
};
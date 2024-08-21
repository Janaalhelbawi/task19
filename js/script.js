document.addEventListener("DOMContentLoaded", function() {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbars',
        offset: 0
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollSpy2 = new bootstrap.ScrollSpy(document.body, {
        target: '.list-example',
        offset: 0
    });
});

let form = document.getElementById("form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Subject', subject);
    localStorage.setItem('Message', message);
})
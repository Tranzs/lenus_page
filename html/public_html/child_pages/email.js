    function sendEmail() {
    let parms = {
        from_name: document.getElementById("from_name").value,
        from_email: document.getElementById("from_email").value,
        from_number: document.getElementById("from_number").value,
        from_subject: document.getElementById("from_subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_5je57kk", "template_jubuxcd", parms)
        .then(function (response) {
        alert("Email Sent!!");
        location.reload();
        })
        .catch(function (error) {
        alert("Failed to send email: " + error);
        });
    }

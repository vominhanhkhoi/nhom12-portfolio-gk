    function sendEmail() {
        let userEmail = document.getElementById("emailInput").value;
        let receiver = "trollzui127@example.com";
        
        let subject = "Contact";
        let body = `Hi, this is my email: ${userEmail}`;

        let url = `https://mail.google.com/mail/?view=cm&fs=1&to=${receiver}&su=
        ${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(url, "_blank");
    }
document.getElementById('sendMessageButton').addEventListener("click", function (event) {


    const to = encodeURIComponent("frkayhn128@gmail.com");
    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const subject = encodeURIComponent(document.getElementById("subject").value.trim());
    const message = encodeURIComponent(document.getElementById("message").value.trim());
    const body = encodeURIComponent(`${name} ${lastname},\n\n${message}`);

    const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
});

window.addEventListener('load', fg_load)
    function  fg_load() {
    setTimeout(function (){
        document .getElementById('loading').style.display='none'
    },2000)

    }


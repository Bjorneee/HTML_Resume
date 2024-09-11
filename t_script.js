var transcript = document.getElementById("transcript_info");
var login_f = document.getElementById("login_form");
transcript.style.display = "none";
login_f.style.display = "block";

function login_submit() {

    var pwd = document.forms["login"]["pass"].value;

    if(pwd === "frankbutt"){
        login_f.style.display = "none";
        transcript.style.display = "block";
    }
    else{
        document.getElementById("wrong_pass").innerHTML = "Incorrect Password!";
    }

}

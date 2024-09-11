console.log("script loaded.");
var project_selector = document.getElementById("prj_select");

function change_project() {

    //console.log(project_selector.value);
    var option = project_selector.value;
    if(option === "prj1")
        window.location.href = "prj1.html";
    else if(option === "prj2")
        window.location.href = "prj2.html";
    else
        console.log("Why did you click the button? There's nothing selected :|");
}
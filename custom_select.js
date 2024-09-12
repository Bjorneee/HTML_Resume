/*

Prereqs:
    - Select with option elements inside an outer div
    - Outer div has custom select class

General Steps:
    - Get custom select div
    - Get select element: getElementByID()
    - Save select length
    - Create and store new div element to represent currently selected item (A)
        - Assign class: setAttribute("class", "[classname]")
        - Set div's innerHTML to button text
    - Append current item div (A) to original custom select class div;
    - Create and store new div element to represent select item list (B)
        - Assign both a select items class and a hide class
    
    (Loop through rest of the options) :

    - Create and store a new div to represent each select item (C)
    - Set div's innerHTML to be each option's innerHTML: options[index]
    - Loop through each item div (C) and add add event with custom function to each:
        -Use: addEventListener(["event"], function())
    - Append select item div (C) to select item list div (B)
        - Use: .appendChild()
    - Append select item list div (B) to original div with custom select class
    - Add "click" event to currently selected item div (A)
        - Hide select item list div (B)
            - (divname).classList.toggle(["hide_classname"])

Update select item function:
    - Get select element: getElementByID() or pass as an arg
    - Get select length: .length or pass arg
    - Loop through each option in the select and compare innerHTMLs to innerHTML of current item in loop
        - If they match, set selectedIndex to option index
    - Use .click() on currently selected item div (A) to simulate a click
        - Use: this.parentNode.previousSibling
*/

var drop_select_div = document.getElementById("select_div");

var select_element = document.getElementById("prj_select");
var select_length = select_element.length;

var current_div = document.createElement("DIV");
current_div.setAttribute("class", "current");
current_div.innerHTML = "Projects";
drop_select_div.appendChild(current_div);

var list_div = document.createElement("DIV");
list_div.setAttribute("class", "drop_options drop_hide");

for(var i = 0; i < select_length; i++){
    var item_div = document.createElement("DIV");
    item_div.innerHTML = select_element.options[i].innerHTML;
    item_div.addEventListener("click", function() {
        var sel = document.getElementById("prj_select");
        var len = sel.length;
        var curr_div = this.parentNode.previousSibling; // parentNode: list_div | previousSibling: current_div
        for(var i = 0; i < len; i++){
            if(sel.options[i].innerHTML === this.innerHTML){
                sel.selectedIndex = i;
                if(sel.selectedIndex === 0)
                    window.location.href = "prj1.html";
                else if(sel.selectedIndex === 1)
                    window.location.href = "prj2.html";
            }
        }
        curr_div.click();
    });
    list_div.appendChild(item_div);
}

drop_select_div.appendChild(list_div);

current_div.addEventListener("click", function(e){
    this.nextSibling.classList.toggle("drop_hide"); // nextSibling: list_div
});
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");    
	li.appendChild(document.createTextNode(input.value));

    var delbtn = document.createElement("button");
    delbtn.appendChild(document.createTextNode("Delete"));
    delbtn.classList.add("delete");
    li.appendChild(delbtn);

	ul.appendChild(li);
	input.value = "";

    //item delete listener
    delbtn.addEventListener("click", function(){
        li.remove();
    });  
    
    //item strike listener
    li.addEventListener("click", function(){
        li.classList.add("done");
    });
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

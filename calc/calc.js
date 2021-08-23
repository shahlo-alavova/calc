function insert(num){
	document.form.textView.value = 	document.form.textView.value + num;
}

function back(num) {
var exp = document.form.textView.value
document.form.textView.value = exp.substring(0, exp.length-1);
}

function clean(){
	document.form.textView.value = "";

}

function count() {
		var exp = document.form.textView.value;
		if(exp){
			document.form.textView.value = eval(exp);
		}

}

window.onload=function free(){
var item = document.querySelector("span");
item.addEventListener("click", function(){item.classList.remove("free");})
}

// window.onload= function(){
// var item = document.getElementByClassName("item");
// item.addEventListener("click", function(){item.classList.remove("free");})
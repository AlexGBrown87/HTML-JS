

										//	THE FOLLOWING ARE ALL FUNCTIONS!!
function calc(){
	var w = document.getElementById("width").value;
	var h = document.getElementById("height").value;
	var area = w*h;
	
	
	document.getElementById("answer").value = area;
}
function mod(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var modulus = a % b;
	
	document.getElementById("answer1").value = modulus;
}
function sayHello(){
	document.write("Hello");
}
function callArea(w,h){
	var area = w * h;
	document.write("the area is: " + area);
}
function iterPrint(){
	var numOfIterations = document.getElementById("iters").value;
	var count = 1;
	while (count <= numOfIterations){
		document.write("Hello World: " + count + "<br />");
		count++;
	}
}
function fibiIterPrint(){
	var numOfIterations = document.getElementById("iters1").value;
	var a = 1;
	var b = 0;
	var temp;
	var count = 1;
	while (count <= numOfIterations){
		temp = a;
		a = a+b;
		b = temp;
		document.write("Hello World: " + count + ", fib = " + a + "<br />");
		count++;
	}
}
function fibiRecurPrint(){
	var num = document.getElementById("iters2").value;
	var holder = fibonacciWorker(num);
	document.write("Fib["+num+"] = " + holder);
}
function fibonacciWorker(num){
	if (num <= 1){
		return 1;
	}
	return fibonacciWorker(num-1) + fibonacciWorker(num-2);
}
function add (a,b){
	return a+b;
}
function subtract (a,b){
	return a-b;
}
function divide (a,b){
	return a/b;
}
function multiply (a,b){
	return a*b;
}
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width / 3;
    img.height = height * 1.15;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}
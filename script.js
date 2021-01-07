function zero(){
    var firstZero=document.getElementById("output").innerHTML="0";
}
zero();
function input(num1,opr,num2){
    removeZero();
    var output=document.getElementById("output").innerHTML;
    if(output==0 || output=="+" || output=="-" || output=="*" || output=="/" || output=="%"){
        document.getElementById("output").innerHTML=num1,opr,num2;
    }
    else{
        document.getElementById("output").innerHTML=output + num1,opr,num2;
    }
   
}
function clearResult(){
    var clear=document.getElementById("output");
    clear.innerHTML= "0";
}
function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}
function calculate() {
    var result = document.getElementById("output");
    result.innerHTML = eval(result.innerHTML);
}


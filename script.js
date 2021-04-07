function zero(){
    var firstZero=document.getElementById("output").innerHTML="0";
}
zero();
function input(num){
    removeZero();

    var output=document.getElementById("output");
    if(output.innerHTML==0 || output.innerHTML=="+"  || output.innerHTML=="*" || output.innerHTML=="/" || output.innerHTML=="%"){
        document.getElementById("output").innerHTML=num;
    }
    else{    
               if(!isNaN(num)){
                   output.innerHTML+=num;
               }
               if(isNaN(num)){
                   output.innerHTML+=num;
                   if(isNaN(num)    &&  isNaN(output.innerHTML.charAt(output.innerHTML.length-2))){
                       output.innerHTML=output.innerHTML.substring(0,output.innerHTML.length-2) +
                       output.innerHTML.substring(output.innerHTML.length-1,output.innerHTML.length)
                   }
               }

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
    var result = document.getElementById("output").innerHTML;  
    var second=document.getElementById("second")
    if(isNaN(result.charAt(result.length-1))){
        var lastCharNAN=result.substring(0,result.length-1);
        second.innerHTML=eval(lastCharNAN);
    }
    else{
        second.innerHTML=eval(result);
    }
}

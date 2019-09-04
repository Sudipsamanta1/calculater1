fanction_myclick(a){
    calculater.screen.value+=a;
}
fanction_equalto(){
    myform.display.value=eval(myform.display.value);
}
fanction_Ac(){
    myform.display.value="0";
}
fanction_backspace(){
    var prevalue=myform.display.value;
    myform.display.value=prevalue.Substr(0,prevalue.length-1);
}
fanction_fnsin(){
    myform.display.value=Math.sin(myform.display.value);
}
fanction_squre(){
    myform.display.value=Math.pow(myform.display.value,2);
}


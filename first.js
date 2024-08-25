let elm =document.getElementById("text");
elm.addEventListener("input",function(){
 let text=this.value;
 let count=text.length;
 document.getElementById("pro2").innerHTML=count;
 text=text.trim();
  let word =text.split(" ");
  let cleanlist=word.filter(function(elm){
    return elm!="";
  });
  let sum=cleanlist.length;
  document.getElementById("pro1").innerHTML=sum;

});
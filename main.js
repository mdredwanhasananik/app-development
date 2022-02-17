function age(){
  var name= document.querySelector('.a').value;
  var d1= document.getElementById('x').value;
  var m1= document.getElementById('y').value;
  var y1= document.getElementById('z').value;
  var date= new Date();
  var d2= date.getDate();
  var m2= 1 + date.getMonth();
  var y2= date.getFullYear();
  var month= [31,28,31,30,31,30,31,30,31,30,31,31]
  if (d1>d2){
    d2= d2 + month[m2-1];
    m2= m2-1;
  }
  if  (m1>m2){
    m2= m2+12;
    y2= y2-1;
  }
  var d= d2- d1;
  var m= m2- m1;
  var y= y2- y1;
  if (d1<32 && d1>0 && m1 < 13 && m1>0 && y1<=y2){
    document.querySelector('h5').innerHTML='Hi! '+name+',You are '+y+' years '+m+' months '+d+' days old.'
  }else{
    document.querySelector('h5').innerHTML='<span style="color: red">Something went wrong!! Please,fill up all the fields or check your information again! </span>'
  }
  
}

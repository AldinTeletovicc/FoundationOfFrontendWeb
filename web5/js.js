function posalji()
 { 
 var ime=prompt('Unesite ime','npr.Ena');
 var c=confirm("Zelite li poslati prijavu")

  if(c && ime!=null )
       document.getElementById("t5").innerHTML='Zdravo '+ime+' uspjesno ste poslali prijavu'; 
    else 
       document.getElementById("t5").innerHTML="Niste potvdili prijavu"; 


   var dat=new Date();
   var hh=dat.getHours();
   var min=dat.getMinutes();
   var sec=dat.getSeconds();
   var dd=dat.getDate();
   var mm=dat.getMonth()+1;
   var gg=dat.getFullYear();
 
   if(hh<12)
      {var dob="Dobro jutro";}
   else if(hh<20)
      {var dob="Dobar dan";}
   else
      {var dob="Dobro vece";}

 document.getElementById("t8").innerHTML=dob+", trenutno vrijeme je:  "+hh+":"+min+":"+sec+" , a datum: "+dd+"/"+mm+"/"+gg;


   


  
    

  
 }


function upute()
{
  window.alert("Popunite sva polja kako bi mogli poslati prijavu!");
}



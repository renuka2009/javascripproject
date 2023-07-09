function bigimg(a)
{  
   a.style.height = "200px"
   a.style.width = "200px"
   document.body.style.backgroundColor = "red";
   document.body.style.filter="blur(0px)";
   const bx = document.getElementById("box")
   document.body.style.textAlign = "center" ;
   document.body.style.marginTop = "200px" ;

}

function smallimg(a)
{ 
   a.style.height = "80px"
   a.style.width = "80px"
   document.body.style.backgroundColor = "white";
   document.body.style.filter="blur(0px)";
   document.body.style.textAlign = "left" ;
   document.body.style.marginTop = "5px" ;
}

function resizeimg(a)
{
   const bx = document.getElementById("box")
   bx.style.height = "80px"
   bx.style.width = "80px"

}


function onClickEvent(a)
{
   if(a.style.height=="200px")
   {
         smallimg(a); 
        
   }
   else{
      bigimg(a);
         
   }
}
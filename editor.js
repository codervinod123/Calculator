
const solve=(exp)=>{
     return eval(exp);
 }
 

const handleClick=(val)=>{
   
   if(val=='=')
   {
       const exp=document.getElementById("op").value;
       const ans=solve(exp);
       document.getElementById("op").value=ans;
   }
   else if(val=='C')
   {
      document.getElementById("op").value="";
   }
   else
   {
     document.getElementById("op").value+=val;
   }
}



// const handleClick=(val)=>{
   
//    if(val=='=')
//    {
//        const exp=document.getElementById("op").value;
//        const ans=solve(exp);
//        document.getElementById("op").value=ans;
//    }
//    else if(val=='C')
//    {
//       document.getElementById("op").value="";
//    }
//    else
//    {
//      document.getElementById("op").value+=val;
//    }
// }


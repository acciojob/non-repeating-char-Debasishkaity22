function firstNonRepeatedChar(str) {
 // Write your code her
	if(str.length==0){
		return null;
	  }
   let c=0,m="";
	   for(let i=0;i<str.length-1;i++){
		   for(let j=0;j<str.length;j++){
			   if(i==j) continue;
			   if(str.charAt(i)==str.charAt(j)){
				   c=0;
				   break;
			   }
			   else{
				   c++;
			   }
		   }
		   if(c>0){
               m+=str.charAt(i);
			   return m;
		   }
		}
		if(c==0){
		return null;
	  }
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 


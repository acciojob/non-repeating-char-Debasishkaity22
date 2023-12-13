function firstNonRepeatedChar(str) {
 // Write your code here
	let l=str.split("");
	   for(let i=0;i<l.length;){
		   if(l[i]===l[i+1]){
			  l.splice(i,2);
		   }
		   else{
			   i++;
		   }
	   }
	   console.log(l);
	  if(str.length==0||l.length==0){
		return null;
	  }
	  else{
		return l.join("");
	  }
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

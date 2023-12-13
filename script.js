function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0;i<str.length){
		if(str[i]==str[i+1]){
			delete str[i];
			delete str[i+1];
		}
		else{
			i++;
		}
	}
	return str;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

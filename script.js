function palindrome(str){
	const s = str.replaceAll(" ","");
	const ch = s.split('');
	let l=0;
	let r=ch.length-1;
	while(l<r){
		if(ch[l]!== ch[r]) return false;
		l++;
		r--;
	}
	return true;
}
module.exports = palindrome

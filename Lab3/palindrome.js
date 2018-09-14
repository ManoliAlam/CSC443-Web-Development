
var name = prompt("Enter your name");

while(isPalindrome(name) == false){
    alert("The string is not palindrome");
    var name = prompt("Enter your name");
}

fucntionisPalindrome(str)
{
    if(str.length == 0 || str.length == 1 )
    {
        true;
    }
    if (str.charAt(0) == str.charAt(str.length -1))
    {
         isPalindrome (str.substring(1 , str.length -1));
    }
     false;
}



function generatePassword() {
    x= document.getElementById("userLength").value;
    var length = x; //exchange x with a static number to create a static generatorbutton
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        password = "";
    for (var i = 0, n = charset.length; i < length; ++i) { // for loop with a second variable to acess the charset array 
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("result").innerHTML=password;
}



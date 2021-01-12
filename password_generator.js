function generatePassword(x) {
    var length = x; //exchange x with a static number to create a static generatorbutton
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        password = "";
    for (var i = 0, n = charset.length; i < length; ++i) { // for loop with a second variable to acess the charset array 
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}
console.log(generatePassword(30));
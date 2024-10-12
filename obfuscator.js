var toEncrypt = "Hello World";

function main() {
    var encryptedString = btoa(toEncrypt);
    console.log(encryptedString);
}
main();
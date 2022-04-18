function checkForUrl(inputText) {
    console.log("::: Running checkForUrl:::", inputText);

    function isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    };

    if(isValidURL(inputText)) {
        return true;
    } else {
        alert("Please enter a valid url");
        return false;
    }
}

export { checkForUrl }

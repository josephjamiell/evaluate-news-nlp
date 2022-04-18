function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if(Client.checkForUrl(formText)) {
        let form = new URLSearchParams();
        form.append("url", formText);

        fetch('http://localhost:8081/sentiment', {
            method: "POST",
            body: form
        })
        .then(function(res) {
            document.getElementById('results').innerHTML = res;
        })
        .catch(err => {
            console.error(err);
            console.log("Failed to get requested data");
        })

        console.log("::: Form Submitted :::")
     }


    
}

export { handleSubmit }

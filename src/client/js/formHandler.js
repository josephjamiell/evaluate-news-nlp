function handleSubmit(event) {
    event.preventDefault()

    const resultsSection = document.getElementById('results');
    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if(Client.checkForUrl(formText)) {
        let form = new URLSearchParams();
        form.append("url", formText);

        const response = fetch('http://localhost:8081/summarization', {
            method: "POST",
            body: form
        })
        .then((response) => response.json())
        .then((data) => {
            resultsSection.innerHTML = data.summary;
        })
        .catch(err => {
            console.error(err);
            console.log("Failed to get requested data");
        })

        console.log("::: Form Submitted :::")
     }


    
}

export { handleSubmit }

const handleSubmit = async (event) => {
    event.preventDefault()

    const resultsSection = document.getElementById('results');
    const analysisSelector = document.getElementById('analysis-type');

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if(Client.checkForUrl(formText)) {
        resultsSection.innerHTML = "Loading...";
        
        switch(analysisSelector.value) {
            case 'sentiment':
                try {
                    const data = await fetchSentimentAnalysis(formText);
                    resultsSection.innerHTML = `
                    <ul>
                        <li>Agreement: ${data.agreement}</li>
                        <li>Confidence: ${data.confidence}</li>
                        <li>Subjectivity: ${data.subjectivity}</li>
                        <li>Irony: ${data.irony}</li>
                        <li>Model: ${data.model}</li>
                    </ul>
                    `
                } catch(err) {
                    console.err(err);
                    console.log("Failed to retrieve sentiment");
                }
                break;
            case 'summarization':
                try {
                    const data = await fetchSummarizationAnalysis(formText)
                    resultsSection.innerHTML = `<p>${data.summary}</p>`;
                } catch(err) {
                    console.err(err);
                    console.log("Failed to retrieve summarization");
                }
                
                break;
            default:
               console.log("Unsupported analysis type. Please select a valid option.");
               alert("Unsupported analysis type. Please select a valid option.");
        }

        console.log("::: Form Submitted :::")
    } else {
        resultsSection.innerHTML = "Invalid URL detected!"
        alert("Please enter a valid url")
    } 
}

const fetchSentimentAnalysis = async (url) => {
    let form = new URLSearchParams();
    form.append("url", url);
    return await fetch('http://localhost:8081/sentiment', {
        method: 'POST',
        body: form
    })
    .then((response) => response.json())
    .then((data) => {
        return data;
    })
    .catch((err) => {
        console.error(err);
        console.log("Unable to retrieve sentiment analysis due to an internal error");
    })
}

const fetchSummarizationAnalysis = async (url) => {
    let form = new URLSearchParams();
    form.append("url", url);
    return await fetch('http://localhost:8081/summarization', {
        method: 'POST',
        body: form
    })
    .then((response) => response.json())
    .then((data) => {
        if(data !== null && data !== undefined) {
            return data;
        } 
    })
    .catch((err) => {
        console.error(err);
        console.log("Unable to retrieve summary analysis due to an internal error");
    })
}

export { handleSubmit }

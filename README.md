# Evaluate News App Project
Udacity Front End Nanodegree program. 


## Description
This project is a web app that uses an external MeaningCloud Summarization API to perform a check of user entered URL and tries to extract a summary for a given document, selecting the most relevant sentences in it to try to sum up what it is about.


## Prerequisite
This project should run on a local server. Node and Express should be installed on the local machine. Required packages listed in `packages.json`.
	
Create API credentials on [MeaningCloud.com](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/request), then insert API KEY into the `.env` file.

```
MEAN_API_KEY=**************************
```


## Installation
Ensure Node, Express, Cors, Body parser, Webpack and all required packages are installed.

```bash
npm install
```

Set up webpack config files for development and production environments.  Download files from this repo and navigate to the project folder. Afterwards, to start the server run these commands in command line:

```bash
npm run build-dev
npm run build-prod
npm run start
```

Navigate to http://localhost:8081/ in your browser.


## Usage
To use the app, enter a URL in the input field and press the **Submit** button. Sentiment results will be displayed in the box below. If a URL is invalid, the user will see an error message.



## Author
Jamiell Joseph
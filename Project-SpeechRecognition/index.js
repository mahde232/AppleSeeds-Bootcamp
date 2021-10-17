async function getLocalStream() {
    navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
        window.localStream = stream;
    }).catch( err => {
        console.log("u got an error:" + err)
    });
}
window.onload = async function() {
    await getLocalStream();
    let SpeechRecognition = window.webkitSpeechRecognition; //grab the class from the browser
    let recognition = new SpeechRecognition(); //instantiate from the object.
    recognition.continuous = false; //make the recognition continuous
    recognition.onresult = function(event) { //apply an on result function
        let transcript = event.results[0][0].transcript;
        document.querySelector("#result").style.visibility = 'visible';
        document.querySelector('#speechResultsDiv').textContent = transcript;
    };
    recognition.onstart = function() { 
        document.querySelector('#speechDiv').innerHTML = 'Voice recognition is ON, ago ahead and talk';
        document.querySelector('#speechResultsDiv').innerHTML = '';
    }
    recognition.onspeechend = function() {
        document.querySelector('#speechDiv').innerHTML = `No activity / finished listening`;
    }
    recognition.onerror = function(event) {
        if(event.error == 'no-speech')
            document.querySelector('#speechDiv').innerHTML = `Error ${event.error} <br> Try again`;
    }
    function speechRecogStart() {
        recognition.lang = document.querySelector('#langaugeSelect').value;
        recognition.start();
    }
    document.querySelector('#speechBtn').addEventListener('click',speechRecogStart);
}
   var btnbutton = document.querySelector("#btn-button");    /*id is imp here,, if u use class value it will not work */
   var textArea = document.querySelector("#text_Area");
  var outputYoda = document.querySelector("#section-Div2");



var translateURL = "https://api.funtranslations.com/translate/yoda.json"      //M_YODA API

function getTranslationURL(text) {
    return translateURL + "?" + "text=" + text
}


function errorHandler(error) {
    console.log("error occured", error);
    alert("Try it again in Sometime..Server Problem")
}

function clickHandler() {
//    outputdiv.innerText="hahahahahaha" +textArea.value;
        var serverCall  = textArea.value;  // taking input  

        //calling server for processing
        fetch(getTranslationURL(serverCall))
        .then(response => response.json())
        .then(json => {
            var translatedText  = json.contents.translated;
            outputYoda.innerText  = translatedText;  //output
        })
        .catch(errorHandler)
};
btnbutton.addEventListener("click", clickHandler)
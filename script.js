var originalText = "I love my country Pakistan.<br>I like my city Faisalabad.<br>I love my Homeland."
document.getElementById("originalTextBox").innerHTML = originalText


let cities = ["Islamabad","Lahore","Karachi","Quetta","Peshawar","Faisalabad","Sahiwal","Multan","Kashmir","Murree"]


// Show Ouput
function showOutput(outputResult){
    document.getElementById("outputResult").innerHTML += outputResult
}


// Clear Output
function clearOutput(){
    document.getElementById("outputResult").innerHTML = ""
}


// Clear Input
function clearInput(){
    document.getElementById("inputValue").value = ""
}

// Input Value
function inputValue(){
   return document.getElementById("inputValue").value
}


// Toastify Error

function error(innertext) {
    Toastify({
        text: innertext,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center", 
        stopOnFocus: true, 
        style: {
            background: "#aa4b6b",
        },
        onClick: function () { }
    }).showToast();
}


// Lower-Case
function lowerCase(){
    clearOutput()
    let lowerCaseText = originalText.toLowerCase()
    showOutput(lowerCaseText) 
}


// Upper-Case
function upperCase(){    
    clearOutput()
    let upperCaseText = originalText.toUpperCase()
    showOutput(upperCaseText)
}


// Capitalize
function capitalize(){
    clearOutput()
    let capitalizeText = '<span style= "text-transform: capitalize;">'+ originalText + '</span>' 
    showOutput(capitalizeText)
}


// Better Formatting
function betterFormatting(){
    clearOutput()
    //let text = inputValue()
    let text = document.getElementById("inputValue").value
    text = text.toLowerCase()
    if(text === ""){
        error("Please type your text here.")
        return
    }
    document.getElementById('outputResult').style.textTransform = 'capitalize'
    showOutput(text)
}


// Print Cities
function printCities(){
    clearOutput()
    for(i = 0; i < cities.length; i++){
        let num = i + 1
        document.getElementById("outputResult").innerHTML += num + ") " + cities[i] + "<br>"
    }
}


// Add City
function addCityList(){
    clearOutput()
    //let city = inputValue()   
    let city = document.getElementById("inputValue").value
    if(!city){
       error("Please type your city name to add.")
        return
    }
    cityFirstLetter = city.charAt(0).toUpperCase()
    cityAllLetters = city.slice(1).toLowerCase()
    cityWordInCapitalize = cityFirstLetter + cityAllLetters
    let cityFound = false
    for(let i = 0; i < cities.length; i++){
        if(cities[i] === cityWordInCapitalize){
            cityFound = true
            let html = '<span style = "color: red;">"' + cityWordInCapitalize + '"</span> is already in list. <br>' 
            showOutput(html)
        }
    }
    if(cityFound == false){
        cities.push(cityWordInCapitalize)
        let html = '<span style= "color: green;">"' + cityWordInCapitalize + '"</span> has been successfully added into list' 
        showOutput(html)
    }
} 


// Check City
function checkCity(){
    clearOutput()
    //let city = inputValue()   
    let city = document.getElementById("inputValue").value
    if(!city){
       error("Please type your city name to check.")
        return
    }
    cityFirstLetter = city.charAt(0).toUpperCase()
    cityAllLetters = city.slice(1).toLowerCase()
    cityWordInCapitalize = cityFirstLetter + cityAllLetters
    let cityFound = false
    for(let i = 0; i < cities.length; i++){
        if(cities[i] === cityWordInCapitalize){
            cityFound = true
            let html = '<span style = "color: green;">"' + cityWordInCapitalize + '"</span> is found in list. &#128151' 
            showOutput(html)
        }
    }
    if(cityFound == false){
        cities.push(cityWordInCapitalize)
        let html = 'Sorry &#128524; We couldn\'t find your city <span style= "color: red">"' + cityWordInCapitalize + '"</span> in list. Click <span style= "color: green">"' + addCityList() +'"</span> to add your city. &#128516;'
        showOutput(html)
    }
}


// Find Word
function findWord(){
    clearOutput()
    let newOriginalText = originalText.toLowerCase()
    let word = document.getElementById("inputValue").value
    if(!word){
       error("Please type a word for find index.")
        return
    }
    word = word.toLowerCase()
    let findWord = newOriginalText.indexOf(word)
    if(findWord !== -1){
        let html = 'Your word <span style= "color: green;">"' + word + '"</span> found at index: ' + findWord
        showOutput(html)
    }
        else{
            let html = 'Your word <span style= "color: red;">"' + word + '"</span> does not exist in the Original String.'
            showOutput(html)
        }
}


// Replace Word
function replaceWord(){
    clearOutput()
    let newOriginalText = originalText.toLocaleLowerCase()
    let word = document.getElementById("inputValue").value
    if(!word){
        error("Please type a word for replacing.")
        return
    }
    let replaceWith = prompt("Enter a number that you want to replace with")
    if(!replaceWith){
        alert("Please type a word to replace it with " + word + ".")
        return
    }
    word = word.toLowerCase()
    word = new RegExp(word , "g")
    replaceWith = replaceWith.toLowerCase()
    let replaceWord = newOriginalText.replace(word , replaceWith)
    showOutput(replaceWord)
}
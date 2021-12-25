const searchBox = document.getElementById('searchBox');
const btns = document.getElementById('btns');
const partsOfSpeech = document.getElementById('partsOfSpeech');
const meaning = document.getElementById('meaningsView');
const origins = document.getElementById('origin');
const phonetics = document.getElementById('phonetics');

btns.addEventListener('click',() => {
    const boxVal = searchBox.value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${boxVal}`)
        .then(response => response.json())
        .then(data => {
            partsOfSpeech.innerText = data[0].meanings[0].partOfSpeech
            meaning.innerText = data[0].meanings[0].definitions[0].definition
            origins.innerText = data[0].origin
            phonetics.innerText = data[0].phonetic
        })
})
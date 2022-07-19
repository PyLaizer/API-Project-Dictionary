const Url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const Result = document.getElementById("result");
const Btn = document.getElementById("search_button");

Btn.addEventListener("click", () => {
    let Inputword = document.getElementById("input_word").value;
    fetch(`${Url}${Inputword}`).then((response) => response.json()).then((data) => {
        console.log(data);
        Result.innerHTML = `
        <div class="word">
            <h3>${data[0].word}</h3>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
            <p class="word_meaning">
               ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="example">Example</p>
            <p class="word_example">
                ${data[0].meanings[0].definitions[0].example || ""}
            </p>
        `
    }).catch(() => {
        Result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`
    })
})





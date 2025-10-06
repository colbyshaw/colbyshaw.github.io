document.addEventListener("DOMContentLoaded", function () {
    const verseContainer = document.getElementById("verse-content");

    fetch("https://labs.bible.org/api/?passage=votd&type=json")
        .then(response => response.json())
        .then(data => {
            verseContainer.innerText = data[0].text + " — " + data[0].reference;
        })
        .catch(error => {
            verseContainer.innerText = "Verse not available right now.";
            console.error(error);
        });
});
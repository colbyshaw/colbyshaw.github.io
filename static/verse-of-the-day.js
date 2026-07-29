document.addEventListener("DOMContentLoaded", function () {
    const verseContainer = document.getElementById("verse-content");

    fetch("https://labs.bible.org/api/?passage=votd&type=json")
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                verseContainer.innerText = `"${data[0].text}" — ${data[0].bookname} ${data[0].chapter}:${data[0].verse}`;
            } else {
                verseContainer.innerText = "Verse not available right now.";
            }
        })
        .catch(error => {
            verseContainer.innerText = "Verse not available right now.";
            console.error(error);
        });
});
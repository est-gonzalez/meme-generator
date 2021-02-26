// Enter your JavaScript for the solution here...
//variables
let imageSelector = document.getElementById("meme-image");

let topText = document.getElementById("meme-top-text");

let bottomText = document.getElementById("meme-bottom-text");

let memeForm = document.querySelector(".meme-form");

let error = document.querySelector(".error");

let memeImg = document.querySelector(".meme-display img");

let memeTopText = document.querySelector(".meme-display .top-text");

let memeBottomText = document.querySelector(".meme-display .bottom-text");


//event listeners
memeForm.addEventListener("submit", function(event)
{
    event.preventDefault();
    error.innerHTML = "";
    let errorCount = 0;
    if (imageSelector.selectedIndex == 0)
    {
        error.innerHTML += "<p>Must Select an Image<p>";
        errorCount += 1;
    }
    if (topText.value.trim().length <= 0)
    {
        error.innerHTML += "<p>Must Enter a Top Text<p>";
        errorCount += 1;
    }
    if (bottomText.value.trim().length <= 0)
    {
        error.innerHTML += "<p>Must Enter a Bottom Text<p>";
        errorCount += 1;
    }
    if (errorCount === 0)
    {
        memeImg.src = '../img/' + imageSelector.value + '.png';
        memeImg.alt = imageSelector.options[imageSelector.selectedIndex].text;

        memeTopText.innerHTML = topText.value;

        memeBottomText.innerHTML = bottomText.value;
    }
}
);

addEventListener("reset", function(event)
{
    memeImg.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
    memeImg.alt = "Placeholder Image";
    memeTopText.innerHTML = "";
    memeBottomText.innerHTML = "";
}
);

imageSelector.addEventListener("change", function(event)
{
    event.preventDefault();

    if (imageSelector.selectedIndex == 0)
    {
        memeImg.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
        memeImg.alt = "Placeholder Image";
    }
    else
    {
        memeImg.src = '../img/' + imageSelector.value + '.png';
        memeImg.alt = imageSelector.options[imageSelector.selectedIndex].text;
    }
}
)
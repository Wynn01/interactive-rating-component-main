const ratingContainer = document.getElementsByClassName("rating-container")[0];
const reviewContainer = document.getElementsByClassName("card-review-container")[0];
const messageContainer = document.getElementsByClassName("card-message-container")[0];
const selectionContext = document.getElementById("selection-context");
const submitBtn = document.getElementsByClassName("submit-btn")[0];

let rating = 0;

function Submit()
{
    selectionContext.innerText = `You selected ${rating} out of 5`;

    if (!rating)
    {
        submitBtn.classList.add("error-submit-button");
        submitBtn.innerText = "Select rating first !"
        setTimeout(() => {
            submitBtn.classList.remove("error-submit-button");
            submitBtn.innerText = "Submit"
        }, 1000);
    }
    else
    {
        messageContainer.style.opacity = "1";
        messageContainer.style.left = "0rem";
        reviewContainer.style.opacity = "0";
        reviewContainer.style.left = "-20rem"
    }
}

for (let i = 0; i < ratingContainer.children.length; i++)
{
    let btn = ratingContainer.children[i];
    
    btn.addEventListener("mouseover", () => {

        let number = parseInt(btn.textContent);
        for (let j = 0; j < number; j++)
        {
            ratingContainer.children[j].children[0].classList.add("rating-btn-hover");
        }

    });

    btn.addEventListener("mouseout", () => {

        let number = parseInt(btn.textContent);
        for (let j = 0; j < number; j++)
        {
            ratingContainer.children[j].children[0].classList.remove("rating-btn-hover");
        }
        
    });

    btn.addEventListener("click", () => {

        let number = parseInt(btn.textContent);
        for (let j = 0; j < 5; j++)
        {
            ratingContainer.children[j].children[0].classList.remove("rating-btn-selected");
        }
        for (let j = 0; j < number; j++)
        {
            ratingContainer.children[j].children[0].classList.add("rating-btn-selected");
            rating = number;
            console.log(rating);
        }

    });

}
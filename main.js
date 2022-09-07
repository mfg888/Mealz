let question = document.querySelectorAll(".question");

question.forEach(question => {
    question.addEventListener("click", event => {
        const active = document.querySelector(".question.active");
        question.getElementsByTagName('img')[0].src = 'images/minus-icon.svg'
        if (active && active !== question) {
            active.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
            active.getElementsByTagName('img')[0].src = 'images/plus-icon.svg'

        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
            question.getElementsByTagName('img')[0].src = 'images/plus-icon.svg'

        }
    })
})

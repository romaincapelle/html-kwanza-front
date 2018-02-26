const HeartIcons = document.querySelectorAll('.fa-heart');

console.log(HeartIcons);

HeartIcons.forEach((HeartIcon) => {
    HeartIcon.addEventListener('click', (event) => {
        console.log("ta clicquer");
        // linkrow = event.currentTarget.querySelector('.icon-open-show-seance').parentNode.href;
        // console.log(linkrow);
        // parent = event.currentTarget.querySelector('.icon-open-show-seance').parentNode;
        // window.location.href = linkrow;
        HeartIcon.classList.toggle("program-liked");
    });
});
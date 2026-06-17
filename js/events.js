window.addEventListener("load", () => {

    const today =
        document.getElementById("todayEvent");

    if (today) {

        today.scrollIntoView({

            behavior: "smooth",

            inline: "center",
            block: "nearest"
        });
    }

});
const timeline =
    document.getElementById("modernTimeline");

document
    .getElementById("timelineNext")
    .addEventListener("click", () => {

        timeline.scrollBy({

            left: 300,

            behavior: "smooth"
        });
    });

document
    .getElementById("timelinePrev")
    .addEventListener("click", () => {

        timeline.scrollBy({

            left: -300,

            behavior: "smooth"
        });
    });
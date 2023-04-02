document.addEventListener("DOMContentLoaded", () => {
    const blob = document.getElementById("blob");
    const letters = "ABCDEFGHIJKLMN";

    let interval = null;

    const screen = document.querySelector(".screen"),
    name = document.querySelector(".name");

    screen.onmouseenter = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            name.innerText = name.innerText.split("").map((letter, index) => {
                //document.querySelector(".name").style.fontSize = "2.25rem";

                if (index < iteration) 
                    return name.dataset.value[index];
                return letters[Math.floor(Math.random() * 14)];
            }).join("");

            if (iteration >= name.dataset.value.length) {
                clearInterval(interval);
            }
            iteration += 1 / 3;
        }, 30);
    };

    window.onpointermove = (event) => {
        const { clientX, clientY } = event;
    
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" });
    };
});

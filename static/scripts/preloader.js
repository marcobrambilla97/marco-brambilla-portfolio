document.addEventListener("DOMContentLoaded", function () {
    var body = document.querySelector("body");
    var counter = document.getElementById("preloader-counter");
    var count = 0;

    var interval = setInterval(function () {
        if (count <= 100) {
            counter.innerText = count.toString().padStart(2, '0');
            count++;
        } else {
            clearInterval(interval);
            if (document.readyState === "complete") {
                body.classList.add("preloader_ready");
                setTimeout(function () {
                    body.classList.remove("preloader_active");
                    body.classList.remove("preloader_ready");
                }, 1500);
            }
        }
    }, 20);

    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            if (count >= 100) {
                body.classList.add("preloader_ready");
                setTimeout(function () {
                    body.classList.remove("preloader_active");
                    body.classList.remove("preloader_ready");
                }, 1500);
            }
        }
    };
});

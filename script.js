document.addEventListener("DOMContentLoaded", function() {
    const moreInfoBtn = document.getElementById("moreInfoBtn");
    const moreInfo = document.getElementById("moreInfo");

    moreInfoBtn.addEventListener("click", function() {
        if (moreInfo.style.display === "none") {
            moreInfo.style.display = "block";
            moreInfoBtn.textContent = "Less Info";
        } else {
            moreInfo.style.display = "none";
            moreInfoBtn.textContent = "More Info";
        }
    });
});

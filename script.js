
function changeCar() {
    document.getElementById("heroImg").src ="blue-super-car.png"
        "PUT_YOUR_CAR_IMAGE_LINK_HERE";
}

function book(button) {
    let p = button.parentElement.querySelector("p");
    let number = parseInt(p.innerText);

    if (number > 0) {
        number--;
        p.innerText = number + " Appointment Available";
    }
}

function readMore() {
    // Change the client image
    document.getElementById("clientImg").src ="client.png"
        "PUT_YOUR_CLIENT_IMAGE_LINK_HERE";

    document.getElementById("text").innerText =
        "I had a great experience at the car wash.";

    let moreText = document.getElementById("moreText");

    moreText.innerText =
        "The staff were professional, the service was excellent, and my car looked clean and shiny. I highly recommend this car wash to everyone.";

    moreText.style.display = "block";

    document.getElementById("readMoreBtn").remove();
}

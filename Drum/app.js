var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    }) 
}


document.addEventListener("keypress", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
})


function makeSound(key) {

    switch (key) {
        case "w":
            var sound8 = new Audio("sounds/sound8.wav");
            sound8.play();
        break;
        
        case "a":
            var sound7 = new Audio("sounds/sound7.wav");
            sound7.play();
        break;

        case "s":
            var sound6 = new Audio("sounds/sound6.wav");
            sound6.play();
        break;

        case "d":
            var sound5 = new Audio("sounds/sound5.wav");
            sound5.play();
        break;

        case "j":
            var sound4 = new Audio("sounds/sound4.wav");
            sound4.play();
        break;

        case "k":
            var sound3 = new Audio("sounds/sound3.wav");
            sound3.play();
        break;

        case "l":
            var sound2 = new Audio("sounds/sound2.wav");
            sound2.play();
        break;


        default: console.log(buttonInnerHTML);
    }

}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
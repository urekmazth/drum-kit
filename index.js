var drums = document.querySelectorAll(".drum");
var audioList = ["crach", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"]
drums.forEach(element => {
    element.addEventListener("click", function(event) {
        var drum = this.innerHTML; // or event.target.innerHTML'
        playSound(drum);
        buttonAnimation(drum);
        //window.alert(event.target.innerHTML);
    })
});

document.addEventListener("keypress", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(drum) {
    switch(drum) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log("Sound track not yet implemented");
    }
}

function buttonAnimation(currentKey) {
    var activeKey = document.querySelector("." + currentKey);
    // simply toggling the class .pressed
    activeKey.classList.toggle("pressed");

    setTimeout(function(){
        activeKey.classList.toggle("pressed");
    },100)
}
function addMovies(btn) {
    if (btn.innerHTML == "ADD TO WATCH LIST") {
        btn.innerHTML = "ON YOUR WISHLIST";
        btn.style.backgroundColor = "#cccccc";
        myContent.movies[btn.value].onWatchList = 1;
    }
    else {
        btn.innerHTML = "ADD TO WATCH LIST";
        btn.style.backgroundColor = "black";
        myContent.movies[btn.value].onWatchList = 0;
    }
}

function addTopList() {
    document.getElementById("my-top-list-test-id").style.display = "block";
}

function deleteTopList() {
    document.getElementById("my-top-list-test-id").style.display = "none";
}

function saveTopList() {

}

function checkIfChecked() {
    let poolAnswer = document.getElementsByName('answer');
    for ( let i = 0; i < poolAnswer.length; i++) {
        if(poolAnswer[i].checked) {
            let req = new XMLHttpRequest();
            req.open("POST", "#", true);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            req.send("answer=" + i);
            alert('Thank you for your vote.');
            break;
        }
    }
}


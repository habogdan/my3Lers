function addMovies(btn){
    if (btn.innerHTML=="ADD TO WATCH LIST") {
        btn.innerHTML = "ON YOUR WISHLIST";
        btn.style.backgroundColor = "green";
    }
    else {
        btn.innerHTML = "ADD TO WATCH LIST";
        btn.style.backgroundColor = "black";
    }
}


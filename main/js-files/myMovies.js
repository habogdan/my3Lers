function addMovies(btn) {
    if (btn.innerHTML == "ADD TO WATCH LIST") {
        btn.innerHTML = "ON YOUR WISHLIST";
        btn.style.backgroundColor = "#cccccc";
    }
    else {
        btn.innerHTML = "ADD TO WATCH LIST";
        btn.style.backgroundColor = "black";
    }
}

function addTopList() {
    document.getElementById("my-top-list-test-id").style.display = "block";
}

function hideTopList() {
    document.getElementById("my-top-list-test-id").style.display = "none";
}

function deleteTopList() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let element = document.getElementById("created-class");
            element.innerHTML = '';
            document.getElementById("delete-button").style.display = "none";
        }
    };
    xhttp.open("DELETE", "../request.php", true);
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send();
}

function saveTopList() {
    let firstItem = document.getElementById("firstItem").value;
    let secoundItem = document.getElementById("secoundItem").value;
    let thirdItem = document.getElementById("thirdItem").value;
    let topList = firstItem + "\n" + secoundItem + "\n" + thirdItem + "\n";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            //alert(this.responseText);
        }
    };
    xhttp.open("PUT", "../request.php", true);
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send(topList);

}

function createMyTopList() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let fullText = this.responseText.split('\n');
            for (let i = 0; i < fullText.length; i++){
                let paragraphTag = document.createElement("p");
                let paragraphContent = document.createTextNode(fullText[i]);
                paragraphTag.appendChild(paragraphContent);

                let element = document.getElementById("created-class");
                element.appendChild(paragraphTag);
            }
            console.log(fullText.length);
            if(fullText.length === 1){
                document.getElementById("delete-button").style.display = "none";
            }
        }
    };
    xhttp.open("GET", "../request.php", true);
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send();
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



function addMovies(btn) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
        }
    };
    xhttp.open("PUT", "../request.php?id=" + btn.id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    window.location.reload();
}
let numberOfMovies = 5;
function getJSON() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let fabulousJSON = JSON.parse(this.responseText).movies;
            for (let i = 0; i < numberOfMovies; i++) {
                if (fabulousJSON[i].onWatchList === 1) {
                    console.log(i + 1 + "");
                    document.getElementById(i + 1 + "").style.background = "#cccccc";
                    document.getElementById(i + 1 + "").innerHTML = "ON YOUR WATCH LIST";
                }
                else {
                    document.getElementById(i + 1 + "").style.background = "black";
                    document.getElementById(i + 1 + "").innerHTML = "ADD TO WATCH LIST";
                }
            }
        }
    };
    xhttp.open("GET", "js-files/JSON.json", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function getJSON2() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let fabulousJSON = JSON.parse(this.responseText).movies;
            for (let i = numberOfMovies - 1; i < fabulousJSON.length; i++) {
                if (fabulousJSON[i].onWatchList === 1) {
                    console.log(i + 1 + "");
                    document.getElementById(i + 1 + "").style.background = "#cccccc";
                    document.getElementById(i + 1 + "").innerHTML = "ON YOUR WATCH LIST";
                }
                else {
                    document.getElementById(i + 1 + "").style.background = "black";
                    document.getElementById(i + 1 + "").innerHTML = "ADD TO WATCH LIST";
                }
            }
        }
    };
    xhttp.open("GET", "js-files/JSON.json", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function createMyWatchList() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let fabulousJSON = JSON.parse(this.responseText).movies;
            for (let i = 0; i <= fabulousJSON.length; i++) {
                if (fabulousJSON[i].onWatchList === 1) {
                    let paragraphTag = document.createElement("p");
                    let paragraphContent = document.createTextNode(fabulousJSON[i].description);
                    let titleTag = document.createElement("h1");
                    let titleContent = document.createTextNode(fabulousJSON[i].title);
                    let dateTag = document.createElement("h2");
                    let dateContent = document.createTextNode(fabulousJSON[i].date);
                    let aTag = document.createElement("a");
                    aTag.setAttribute('href', fabulousJSON[i].aTag);
                    let img = document.createElement("img");
                    img.setAttribute('src', fabulousJSON[i].imgSrc);
                    img.setAttribute('alt', fabulousJSON[i].imgAlt);

                    let divTagContentText = document.createElement("div");
                    let divTagContentImg = document.createElement("div");
                    let divTagContentAll = document.createElement("div");

                    paragraphTag.appendChild(paragraphContent);
                    dateTag.appendChild(dateContent);
                    titleTag.appendChild(titleContent);
                    aTag.appendChild(titleTag);

                    divTagContentText.appendChild(aTag);
                    divTagContentText.appendChild(dateTag);
                    divTagContentText.appendChild(paragraphTag);

                    divTagContentImg.appendChild(img);

                    divTagContentAll.appendChild(divTagContentImg);
                    divTagContentAll.appendChild(divTagContentText);

                    divTagContentAll.classList.add("content");
                    divTagContentImg.classList.add("content-img");
                    img.classList.add("content-img-size");
                    divTagContentText.classList.add("content-text");
                    titleTag.classList.add("content-title");
                    dateTag.classList.add("content-date");
                    paragraphTag.classList.add("content-description");

                    let element = document.getElementById("my-watch-list");
                    element.appendChild(divTagContentAll);
                }
            }

        }
    };
    xhttp.open("GET", "js-files/JSON.json", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function addTopList() {
    document.getElementById("my-top-list-test-id").style.display = "block";
}

function hideTopList() {
    document.getElementById("my-top-list-test-id").style.display = "none";
}

function deleteTopList() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
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
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
        }
    };
    xhttp.open("POST", "../request.php", true);
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send(topList);

}

function createMyTopList() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let fullText = this.responseText.split('\n');
            for (let i = 0; i < fullText.length; i++) {
                let paragraphTag = document.createElement("p");
                let paragraphContent = document.createTextNode(fullText[i]);
                paragraphTag.appendChild(paragraphContent);

                let element = document.getElementById("created-class");
                element.appendChild(paragraphTag);
            }
            console.log(fullText.length);
            if (fullText.length === 1) {
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
    for (let i = 0; i < poolAnswer.length; i++) {
        if (poolAnswer[i].checked) {
            let req = new XMLHttpRequest();
            req.open("POST", "#", true);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            req.send("answer=" + i);
            alert('Thank you for your vote.');
            break;
        }
    }
}



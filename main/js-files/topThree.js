function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        let req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status === 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}

function getJSON(url) {
    return get(url).then(JSON.parse);
}

let myContentPromis = getJSON("js-files/JSON.json");
myContentPromis.then(function(myContent){

    for (let i = 0; i < 3; i++) {
        let paragraphTag = document.createElement("p");
        let paragraphContent = document.createTextNode(myContent.movies[i].description);
        let titleTag = document.createElement("h1");
        let titleContent = document.createTextNode(myContent.movies[i].title);
        let dateTag = document.createElement("h2");
        let dateContent = document.createTextNode(myContent.movies[i].date);
        let aTag = document.createElement("a");
        aTag.setAttribute('href',myContent.movies[i].aTag);
        let img = document.createElement("img");
        img.setAttribute('src',myContent.movies[i].imgSrc);
        img.setAttribute('alt',myContent.movies[i].imgAlt);

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

        let element = document.getElementById("topList");
        element.appendChild(divTagContentAll);
    }

});


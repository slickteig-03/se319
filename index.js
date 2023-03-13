fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    })

function appendData(data) {
    for (let tree in data) {
        let testContainer = document.getElementById(tree)
        let mainContainer = testContainer.parentElement;
        let text = testContainer.getAttribute("class");
        if (text == "card-body") {
            for (let type of data[tree]) {
                let img = document.createElement("img");
                let h = document.createElement("h4");
                let p = document.createElement("p");
                img.src = `${type["image"]}`;
                img.alt = `${type["treeName"]}`;
                h.innerHTML = `${type["treeName"]}`;
                p.innerHTML = `Family: ${type["treeFamily"]} <br>Average Height: 
            ${type["avgHeight"]}<br>Growth Rate: ${type["growthRate"]}`;
                mainContainer.appendChild(img);
                testContainer.appendChild(h);
                testContainer.appendChild(p);
            }
        }
        else {
            let container1 = testContainer;
            let container2 = testContainer.nextElementSibling;
            let container3 = container2.nextElementSibling;
            let imgContainer = mainContainer.nextElementSibling;
            for(let type of data[tree]) {
                container1.innerHTML = `${type["treeName"]}`;
                container2.innerHTML = `${type["care"]} <br> <br>${type["pruning"]}`;
                container3.innerHTML = `Best Climate: ${type["bestClimate"]}`
                let img = document.createElement("img");
                img.src = `${type["careImage"]}`;
                imgContainer.appendChild(img);
            }
        }
    }
}
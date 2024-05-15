function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1jV_0A5PW/model.json", modelReady)
}

function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        random_r = Math.floor(Math.random() * 255) + 1
        random_g = Math.floor(Math.random() * 255) + 1
        random_b = Math.floor(Math.random() * 255) + 1
        document.getElementById("result_lbl").innerHTML = 'I CAN HEAR- ' + results[0].label
        document.getElementById("result_value").innerHTML = 'ACCURACY- ' + (results[0].confidence * 100).toFixed(2) + "%"
        document.getElementById("result_lbl").style.color = "rgb(" + random_r + "," + random_g + "," + random_r + ")";
        document.getElementById("result_value").style.color = "rgb(" + random_r + "," + random_g + "," + random_r + ")";

        img_1 = document.getElementById("alien1")
        img_2 = document.getElementById("alien2")
        img_3 = document.getElementById("alien3")
        img_4 = document.getElementById("alien4")

        if (results[0].label == "clap") {
            img_1.src = "aliens-01.gif";
            img_2.src = "aliens-02.png";
            img_3.src = "aliens-03.png";
            img_4.src = "aliens-04.png";
        } 
        
        else if (results[0].label == "knock") {
            img_1.src = "aliens-01.png";
            img_2.src = "aliens-02.gif";
            img_3.src = "aliens-03.png";
            img_4.src = "aliens-04.png";
        } 
        
        else if (results[0].label == "hello") {
            img_1.src = "aliens-01.png";
            img_2.src = "aliens-02.png";
            img_3.src = "aliens-03.gif";
            img_4.src = "aliens-04.png";
        } 
        
        else {
            img_1.src = "aliens-01.png";
            img_2.src = "aliens-02.png";
            img_3.src = "aliens-03.png";
            img_4.src = "aliens-04.gif";
        }
    }
}
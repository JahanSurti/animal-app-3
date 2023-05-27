function classification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/P8bcBk3hc/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    console.log("modelReady");
}

function gotResults(error, results){
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Acuraccy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_label").innerHTML = "rgb(";
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById("alien1");
        img1 = document.getElementById("alien2");
        img2 = document.getElementById("alien3");
        

        if(results[0].label == "Clap") {
           img.src = 'bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png';
           img1.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-animals-png%2Fcat&psig=AOvVaw1OazH1_q_p2l3KCf6b00Ga&ust=1684543970927000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjprbqVgP8CFQAAAAAdAAAAABAE';
           img2.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dcow&psig=AOvVaw1Bz8Qo8c8_udTdgYvPna6B&ust=1684544013218000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjM0c2VgP8CFQAAAAAdAAAAABAE';
           
            img.src = 'aliens-01.png';
           img1.src = 'aliens-02.png';
           img2.src = 'aliens-03.gif';
           img3.src = 'aliens-04.png';
        } else if(results[0].label == "Snapping") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
    } else {
        img.src = 'aliens-01.png';
           img1.src = 'aliens-02.png';
           img2.src = 'aliens-03.gif';
           img3.src = 'aliens-04.gif';
    }
    }
}
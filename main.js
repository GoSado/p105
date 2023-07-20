Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

var camera=document.getElementById("camera");
Webcam.attach(camera);
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='capture_image'>";

    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YnS4OEdQX/model.json",modelloaded);
function modelloaded(){
    console.log("model loaded");
}
function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("label").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}
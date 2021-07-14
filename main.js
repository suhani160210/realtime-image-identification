function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hzRl8NvI9/model.json',modelLoaded);

}
function modelLoaded(){
    console.log('modelLoaded');
}
function draw(){
    image(video,0,0,500,500);
    classifier.classify(video,gotResult);
}
function gotResult(error,results){
   if(error){
       console.error(error)
   }
   else{
       console.log(results);
       document.getElementById("result_name").innerHTML=results[0].label;
       document.getElementById("accuracy_name").innerHTML=results[0].confidence.toFixed(3);
   }
}
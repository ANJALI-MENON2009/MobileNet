function setup() {
  canvas = createCanvas(340, 300);
  canvas.position(600, 350);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('Mobilenet' , modelLoaded) ;
}
function modelLoaded()
{
  console.log("Loaded...") ;
}
function draw()
{
  image(video, 0,0, 340, 300) ;
  classifier.classify(video, gotResult) ;
}
function gotResult(error, results) {
  if(error) {
    console.error(error) ;
  }
    else {
      document.getElementById("object_name").innerHTML = results[0].label ;
      document.getElementById("accuracy_val").innerHTML = results[0].confidence.toFixed(2) * 100 + "%" ;
  }
}



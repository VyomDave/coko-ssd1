img = ""
status = ""

function preload() {
   img = loadImage("dog_cat.jpg")
}

function setup() {
   canvas = createCanvas(500, 400)
   canvas.center()

   objectdetector = ml5.objectDetector("cocossd", modeloaded)
}

function modeloaded() {
   console.log("Model is working!")
   status = true
   document.getElementById("status").innerHTML = "Status : detecting objects";
   objectdetector.detect(img, gotresults)
}

function draw() {
   image(img, 0, 0, 500, 400)
   fill("red")
   text("dog", 120, 50)
   textSize(25)
   noFill()
   stroke("red")
   strokeWeight(2)
   rect(120, 60, 180, 300)

   //code for drawing rectangle for cat
   fill("red")
   text("cat", 250, 80)
   textSize(25)
   noFill()
   stroke("red")
   strokeWeight(2)
   rect(225, 90, 250, 300)
}

function gotresults(error, results) {
   if (error) {
      console.log(error)
   }
   else{
      console.log(results)
   }
}
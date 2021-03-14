img = ""
status = ""
objects = []

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
image(img ,0,0,500,400)
   if (status != "") {
      for (let i= 0; i < objects.length; i++) {
         document.getElementById("status").innerHTML="Status:Objects Detected"
         object_name = objects[i].label
         x = objects[i].x
         y = objects[i].y
         width = objects[i].width
         height = objects[i].height
         acc = floor(objects[i].confidence * 100)+"%"

         fill("red")
         text(object_name+" "+acc , x , y - 7)
         textSize(15)
         noFill()
         stroke("red")
         strokeWeight(1)
         rect(x,y,width,height)

      }
   }
}

function gotresults(error, results) {
   if (error) {
      console.log(error)
   }
   else {
      console.log(results)
      objects = results
   }
}
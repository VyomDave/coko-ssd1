img = ""
function preload(){
   img = loadImage("dog_cat.jpg")
}
function setup(){
   canvas = createCanvas(500,400)
   canvas.center()
}
function draw(){
   image(img,0,0,500,400)
   fill("red")
   text("dog",120,50)
   textSize(25)
   noFill()
   stroke("red")
   strokeWeight(2)
   rect(120,60,180,300)
}
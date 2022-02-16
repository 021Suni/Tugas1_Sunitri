let p;
function setup() {
  // put setup code here
  createCanvas(400,200);
  p = 0;
}
  
function draw() {
  // put drawing code here
  background(200);
  
  strokeWeight(4)
  line(200,0,200,400);

  //penguin kiri
  strokeWeight(2)
  fill(12,12,13)
  ellipse(90, 90, 130, 170)
  fill (255,255,255)
  ellipse(90, 120, 100, 100)
  ellipse(70, 40, 30, 40)
  ellipse(110, 40, 30, 40)
  fill(12,12,13)
  ellipse(70, 40, 10, 10)
  ellipse(110, 40, 10, 10)
  fill(255, 233, 0)
  ellipse(55, 180, 60, 30)
  ellipse(125, 180, 60,30)
  arc(80, 62, 40, 40, radians(0), radians(90))

  //penguin kanan
  strokeWeight(2)
  var y = 90 + 20*Math.sin(PI*p/30)
  p += 0
  fill(12,12,13)
  ellipse(305,y, 130, 170)
  var y = 120 + 20*Math.sin(PI*p/30)
  p += 1
  fill(255,255,255)
  ellipse(305, y, 100, 100)
  var y = 40 + 20*Math.sin(PI*p/30)
  p += 0
  ellipse(285, y, 30, 40)
  ellipse(325, y, 30, 40)
  fill(12,12,13)
  var y = 40 + 20*Math.sin(PI*p/30)
  var r = 10 + 20*Math.sin(PI*p/30)
  p += 0
  ellipse(285, y, r, r)
  ellipse(325, y, r, r)
  var y = 180 + 20*Math.sin(PI*p/30)
  p += 0
  fill(255, 233, 0)
  ellipse(275, y, 60, 30)
  ellipse(345, y, 60, 30)
  var y = 62 + 20*Math.sin(PI*p/30)
  p += 0
  arc(295, y, 40, 40, radians(0), radians(90))
  
  
  
  
 
  
}
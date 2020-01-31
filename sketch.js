let ytide = 0.0;
let frame = 0;
let x = 0;
let y = 800;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
}


function draw() {

  background(214, 250, 255);

  push();
  if (mouseIsPressed == true) {
    fill(255);
  } else {
    noFill();
  }

  stroke(214, 250, 255);
  strokeWeight(2);
  ellipse(mouseX, mouseY, 10, 10);
  pop();



  push();
  x = lerp(x, mouseY * 2, 0.02);
  y = lerp(y, mouseX / 2, 0.05);

  if (keyIsDown(32) == true) {
    x -= 8;
  } else {
    y -= 8;
  }

  fill(255, 93, 84);
  noStroke();
  ellipse(x * 1.5, y * 1.5, 20, 20);
  pop();



  push();
  fill(0, 33, 69);
  beginShape();

  let xtide = 20;
  for (let x = 0; x <= width; x += 15) {
    let y = map(noise(xtide, ytide), 0, 1, 150, 250);
    vertex(x, y);
    xtide += 0.05;
  }
  ytide += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  pop();



  push();
  x = lerp(x, mouseY * 2, 0.02);
  y = lerp(y, mouseX / 2, 0.05);

  if (keyIsDown(32) == true) {
    x -= 8;
  } else {
    y -= 8;
  }

  if (mouseIsPressed == true) {
    fill(255, 93, 84, 20);
    noStroke();
    var tittle5 = "camuflage baby"
    drawingContext.font = "normal 21px Karla";
    drawingContext.textAlign = "center";
    fill(214, 250, 255, 15);
    text(tittle5, width / 2, (height / 2) + 70);

  } else {
    noFill();
    stroke(255, 93, 84);
    strokeWeight(3);
  }


  ellipse(x * 1.5, y * 1.5, 20, 20);
  pop();



  push();
  if (mouseIsPressed == true) {
    fill(255);
    stroke(255);
    ellipse(mouseX, mouseY, 10, 10);
  } else {
    noFill();
    cursor(HAND);
  }
  pop();


  var tittle1 = "catching nemo"
  drawingContext.font = "bold 21px Karla";
  drawingContext.textAlign = "center";
  fill(214, 250, 255);
  text(tittle1, width / 2, (height / 2) + 250);

  var tittle2 = "press space bar to atract him";
  var tittle3 = "click to not catch him";
  drawingContext.font = "normal 10px Karla";
  drawingContext.textAlign = "center";
  fill(214, 250, 255);
  text(tittle2, width / 2, (height / 2) + 270);
  text(tittle3, width / 2, (height / 2) + 285);


}

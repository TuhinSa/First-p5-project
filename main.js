function setup(){
  
    canvas = createCanvas(800,500);
canvas.position(400,250);
video = createCapture(VIDEO);

}
function draw(){
    image(video, 0,0,800,500);
    

    let c = color(255, 204, 0);
fill(c);
noStroke();
ellipse(25, 25, 80, 80); // Draw left circle
// Using only one value generates a grayscale value.
c = color(65);
fill(c);
ellipse(75, 75, 80, 80);
describe(`Yellow ellipse in top left of canvas, black ellipse in bottom
right, both 80×80.`);
}
function take_snapshot(){
    save("Picture.png");
}


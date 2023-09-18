function setup() {
    createCanvas(windowWidth, windowHeight); 
    background (150,150,150);
}

function draw() {
    strokeWeight(3); 
    stroke(255);
    fill(250,240,200);
    rect(0,0,600,600);

    strokeWeight(0);
    fill(0);
    triangle(0, 0, 150, 0, 0, 250);
    triangle(600,600,450,600,600,350);
    rect(0,300, 150, 300);
    rect(450,0,150,300);
    triangle(150,300,300,300,150,600);
    triangle(300,300,450,300,450,0);
    quad(150,300,300,300,250,120,150,120);
    quad(300,300,450,300,450,520,350,520);
   

}

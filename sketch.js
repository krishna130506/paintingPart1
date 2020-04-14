points=[];
start=false;

function setup(){
    var canvas=createCanvas(400,400);
    background(0);

}
function draw(){

    if(start){
        points.push(createVector(mouseX,mouseY));
    }
    stroke(255);
    noFill();
    beginShape();
    for(let i = 0; i < points.length; i++){
        let x = points[i].x;
        let y = points[i].y;

        vertex(x,y);

    }
    endShape();
}
function mousePressed(){
    start=true;
    points=[];
}
function mouseReleased(){
    start=false;
}
right_wrist_x=0;
left_wrist_x=0;
difference=0;

function setup(){
    canvas= createCanvas(500,400);
    canvas.position(800,175);
    video= createCapture(VIDEO);
    video.size(500,450);
    video.position(100,150);

   posenet= ml5.poseNet(video,modelLoaded);
   posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posenet is loaded");
}

function gotPoses(results){
    if(results.length > 0){
      console.log(results);
      right_wrist_x= results[0].pose.rightWrist.x;
      left_wrist_x= results[0].pose.leftWrist.x;
      difference= floor(left_wrist_x - right_wrist_x);
      console.log("Right Wrist x= "+right_wrist_x+ "Left Wrist x= "+left_wrist_x+ "Difference="+difference);
    }
}

function draw(){
   background('#fffa5c');
   document.getElementById("square_sides").innerHTML="Font size of the text will be= "+difference +"px";
   textSize(difference);
   fill('#8a8988');
   text("Coding",50,200);
}
song1="My heart will go on(Original Celine Dion).mp3";
song2="Summer of 69(Bryan Adams).mp3";
song=""

rightWristY=0;
leftWristY=0;

rightWristX=0;
leftWristX=0;

difference=0;
leftWristScore=0;
rightWristScore=0;

leftWrist="";
rightWrist="";

function preload()
{
    leftWrist=loadSound("My heart will go on(Original Celine Dion).mp3");
    rightWrist=loadSound("Summer of 69(Bryan Adams).mp3");
}

function setup()
{
    canvas=createCanvas(448,312);
    canvas.position(211,201);

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 447, 311);

    fill("#ffe6f0");
    stroke("#c0e4ea");
    circle(leftWristX, leftWristY, 20);


     if(leftWristScore > 0.2)
     {
        
        song=song1
        song.play();
        song.isPlaying();
        if(rightWristScore > 0.2)
        {
            song2.stop();
    }

        if(song = false)
        {
            song.play();
            document.getElementById("song_name").innerHTML="Song name: " + song;
        }
        leftWristYNumberFormat=Number(leftWristY);
        leftWristYNoDecimalPoints=floor(leftWristYNumberFormat);
   
        song.setVolume(1);
    }

    if(rightWristScore > 0.2)
     {
        
        song=song2
        song.play();
        song.isPlaying();
        if(leftWristScore > 0.2)
        {
            song1.stop();
    }

        if(song = false)
        {
            song.play();
            document.getElementById("song_name").innerHTML="Song name: " + song;
        }
        rightWristYNumberFormat=Number(rightWristY);
        rightWristYNoDecimalPoints=floor(rightWristYNumberFormat);
   
        song.setVolume(1);
    }
}

function playMusic()
{
    song.play();
}

function modelLoaded()
{
    console.log("Model loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        rightWristScore=results[0].pose.keypoints[10].score;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right wrist X= " + rightWristX + " Right wrist Y= " + rightWristY);

        leftWristScore=results[0].pose.keypoints[9].score;
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left wrist X= " + leftWristX + " Left wrist Y= " + leftWristY);
    }
}
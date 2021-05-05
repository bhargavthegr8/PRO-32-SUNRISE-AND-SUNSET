const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if (backgroundImg){
        background(backgroundImg);
    }
    
    Engine.update(engine);
}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json();
    var dt = responseJson.datetime;
    var hr = dt.slice(11,13);

    if(hr>=04 && hr<=06){
        bg = "sunrise1.png"
    }
    else if(hr>=06 && hr<=08){
        bg = "sunrise2.png"
    }
    else if(hr>=08 && hr<=10){
        bg = "sunrise3.png"
    }
    else if(hr>=10 && hr<=12){
        bg = "sunrise4.png"
    }
    else if(hr>=12 && hr<=14){
        bg = "sunrise5.png"
    }
    else if(hr>=14 && hr<=16){
        bg = "sunset6.png"
    }
    else if(hr>=16 && hr<=18){
        bg = "sunset7.png"
    }
    else if(hr>=18 && hr<=20){
        bg = "sunset8.png"
    }
    else if(hr>=20 && hr<=22){
        bg = "sunset9.png"
    }
    else if(hr>=22 && hr<=00){
        bg = "sunset10.png"
    }
    else if(hr>=0 && hr<=02){
        bg = "sunset11.png"
    }
    else{
        bg = "sunset12.png"
    }
    console.log(bg)
    backgroundImg = loadImage(bg);
}

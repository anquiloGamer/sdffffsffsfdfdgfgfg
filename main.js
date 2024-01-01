x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.WebKitSpeechRecognition;

var recognition = new SpeechRecognition;

function start(){
    document.getElementById("status").innerHTML = "El sitema esta escuchando, por favor. di circle o rectangle";
    recognition.start();
}

recognition.onresult = function(event){
    console-log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "la voz se reconoció:" + content;

    if(content == "Circle"){
        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 500);

        document.getElementById("status").innerHTML = "se dibujo un círculo";
        draw_circle = "set";
    }

    if(content == "rectangle"){
        x = Math.floor(Math.random() * 800);
        y = Math.floor(Math.random() * 500);

        document.getElementById("status").innerHTML = "se dibujo un rectangulo";
        draw_rect = "set";
    }
}

function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        draw_circle = "";
    }

    if(draw_circle == "set"){
       rect(x,y,70,50);
      draw_rect = "";
    }
}
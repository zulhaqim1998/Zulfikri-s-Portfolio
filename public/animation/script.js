window.onload = function(){
  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      rocket = new Image(),
      stars = [],
      fires = [],
      planet1 = new Image(),
      planet2 = new Image(),
      light = new Image(),
      starNum = 30,
      planet1Y = 200,
      planet2Y = 50;

    //background color
    var gradient = context.createLinearGradient(150, 300, 150, 0);
    gradient.addColorStop(0.000035555, "rgba(211, 67, 211, 1)");
    gradient.addColorStop(0.65555555, "#10104f");
    context.fillStyle = gradient;

    // //rocket fire
    // for(var star, i = 0; i < 100; i++){
    //   fire = new Star(Math.random() * 5, Math.random() * 0xff0000);
    //   fire.x = Math.random() * 690;
    //   while(fire.x < 620){
    //     fire.x = Math.random() * 690;
    //   }
    //   fire.y = 640;
    //   fire.vy = Math.random() * 8;
    //   fires.push(fire);
    // }
    // function drawFire(fire){
    //   fire.y += fire.vy;
    //   if(fire.y > canvas.height - 150){
    //     fire.x = Math.random() * 690;
    //     while(fire.x < 620){
    //       fire.x = Math.random() * 690;
    //     }
    //     fire.y = 640;
    //     fire.vy = Math.random() * 8;
    //   }
    //   fire.draw(context);
    // }

    //rocket and planet images

    rocket.src = "./animation/rocket.png";
    planet1.src = "./animation/pln.png";
    planet2.src = "./animation/pln2.png";
    light.src = "./animation/light.png";

    //generate stars
    for(var star, i = 0; i < starNum; i++){
      star = new Star(Math.random() * 4, "#ffdd55");
      star.x = Math.random() * canvas.width;
      star.y = Math.random() * canvas.height;
      star.vy = Math.random() * 5;
      stars.push(star);
    }
    function draw(star){
      star.y += star.vy;
      if(star.y > canvas.height){
        star.x = Math.random() * canvas.width;
        star.y = 0;
        star.vy = Math.random() * 3;
      }
      star.draw(context);
    }

    (function drawFrame(){
      window.requestAnimationFrame(drawFrame, canvas);
      context.fillRect(0, 0, canvas.width, canvas.height);
      if(planet1Y > canvas.height + 100){
        planet1Y = -350;
      } else if(planet2Y > canvas.height + 50){
        planet2Y = -30;
      }
      planet1Y += 2;
      planet2Y += 1;

      if(window.innerWidth > 922) {
        context.drawImage(light, 623 + 250, 300, 66, 480);

        context.drawImage(planet1, 70, planet1Y, 350, 350);
        context.drawImage(planet2, 980, planet2Y, 200, 200);
        context.drawImage(rocket, canvas.width / 2 - 100 + 250, canvas.height / 2 - 85, 170, 170);
      }

      stars.forEach(draw);
    }());

};

var enemies = [];

function createEnemy() {
    for(i = 0; i < 5; i++){
        var enem = {
            x: Math.floor(Math.random() * 360) + 20,
            y: Math.floor(Math.random() * 360) + 20,
            w: 40,
            h: 40,
            speed: 1,
            direction: Math.floor(Math.random() * 4)
            };
    enemies.push(enem);
    };
  };

    var pic = new Image();
    pic.src = "http://pngimg.com/uploads/fire/fire_PNG6042.png"

    function drawEnemy(context) {
        
    for (var i in enemies) {
        var x = enemies[i].x - (enemies[i].w / 2)
        var y = enemies[i].y - (enemies[i].h / 2)
        context.drawImage(
        pic,
        0,
        0,
        2044,
        1833,
        x,
        y,
        40,
        40)
        };
    };

function moveEnemy() {
    
    for (var i in enemies) {

        if(enemies[i].x == 20 || enemies[i].x == 380 || enemies[i].y == 20 || enemies[i].y == 380){
        switch (enemies[i].direction) {
            case 0:
                enemies[i].direction = 1;
                break;
            case 1:
                enemies[i].direction = 0;
                break;
            case 2:
                enemies[i].direction = 3;
                break;
            case 3:
                enemies[i].direction = 2;
                break;
         };
        };
        
        switch (enemies[i].direction) {
            case 0:
                enemies[i].x -= enemies[i].speed;
                break;
            case 1:
                enemies[i].x += enemies[i].speed;
                break;
            case 2:
                enemies[i].y -= enemies[i].speed;
                break;
            case 3:
                enemies[i].y += enemies[i].speed;
                break;
        };
      };
    };
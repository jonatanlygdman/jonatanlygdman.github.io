$(document).ready( function() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    
    var points = 0
    
    document.body.appendChild(canvas);
    
    canvas.addEventListener("mousedown", function() {
        enemies.pop()
        points -= 500;
    });
    
    document.querySelector("#speedUp").onclick = function() {
        player.speed = player.speed + 2;
    };
    
  document.querySelector("#speedDown").onclick = function() {
      if(player.speed > 2){
        player.speed = player.speed - 2;
      };
    };
    
  document.querySelector("#restart").onclick = function() {
    reset();
    if(enemies.length == 0){
        createEnemy();
    };
  };
  
    var picIndex = 0;
    
    var player = {
        x: 200,
        y: 200,
        w: 40,
        h: 40,
        speed: 10
    };
    
    var spriteSheet = new Image();
    spriteSheet.src = "http://i10.servimg.com/u/f10/11/11/77/71/arshes13.png" //"https://openclipart.org/image/2400px/svg_to_png/215080/SpriteSheet.png"
    
    var enemySheet = new Image();
    enemySheet.src = "http://orig15.deviantart.net/2442/f/2015/031/b/4/simple_2d_mage___sprite_sheet_by_mackieftw-d8g6gjm.png"
    
    
    var plImg = sprite({
    context: ctx,
    width: 100,
    height: 100,
    image: spriteSheet
});
    
    var enemyImg = sprite({
    context: ctx,
    width: 100,
    height: 100,
    image: enemySheet
});
    
    function sprite (options) {
				
    var that = {};
        
    tickCount = 0,
					
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    
    that.render = function () {
        
    //that.context.clearRect(player.x, player.y, that.width, that.height);
    
    that.context.drawImage(
        that.image, 
        picX * 56,
        picIndex * 56, 
        56,
        56, 
        player.x - 26, 
        player.y - 30, 
        60,
        60);
    };    

        that.update = function () {

        tickCount += 1;
            if(tickCount == 4) tickCount = 0
        };
        
    return that; 
};
    
    function reset() {
        player.x = 200;
        player.y = 200;
        player.speed = 10;
        points = 0;
    };
    
    
    var keysDown = {};
    
    function movePlayer(direction) {
        switch (direction) {
            case "left":
                player.x -= player.speed;
                if(player.x < 20){
                    player.x = 20;
                }
                break;
            case "right":
                player.x += player.speed;
                if(player.x > 380){
                    player.x = 380;
                }
                break;
            case "up":
                player.y -= player.speed;
                if(player.y < 20){
                    player.y = 20;
                }
                break;
            case "down":
                player.y += player.speed;
                if(player.y > 380){
                    player.y = 380;
                }
                break;
        }
    }
    
    window.addEventListener('keydown', function(e){
        keysDown[e.keyCode] = true;
        console.log(keysDown);
    });
    
    window.addEventListener('keyup', function(e){
       delete keysDown[e.keyCode];
    });
    
    var render = function() {
        var image = new Image();
        image.src = "http://arwenevecom.ipage.com/Oblivion/Images/OB07-seaglow.jpg"
        
        ctx.drawImage(
        image, 
        150,
        0, 
        686,
        686, 
        0, 
        0, 
        400,
        400);
        
    ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Points: " + points, 32, 32);
        
        drawEnemy(ctx);
        plImg.update();
        plImg.render();
    };
    
    createEnemy();
    
    function update() {
        
        picX = 0;
        
        if(38 in keysDown){
            movePlayer('up');
            picIndex = 3;
        };
        if(40 in keysDown){
            movePlayer('down');
            picIndex = 0;
        };
        if(37 in keysDown){
            movePlayer('left');
            picIndex = 1;
        };
        if(39 in keysDown){
            movePlayer('right');
            picIndex = 2;
        };
        
    for (var i in enemies){
        if(player.x - enemies[i].x < 40
            && enemies[i].x - player.x < 40
            && player.y - enemies[i].y < 40
            && enemies[i].y - player.y < 40){
            
            points -= 200
            
            if(enemies[i].direction == 0){
                enemies[i].direction = 1;
                break;
            }
            if(enemies[i].direction == 1) {
                enemies[i].direction = 0;
                break;
            }
            if(enemies[i].direction == 2){
                enemies[i].direction = 3;
                break;
            }
            if(enemies[i].direction == 3){ 
                enemies[i].direction = 2;
                break;
            }
        };
    };    
        
     for (var i in enemies) {
      moveEnemy();
      };
    };
    
    function main() {
        update();
        render();
        requestAnimationFrame(main);
        points += 1;
    };

    main();
});
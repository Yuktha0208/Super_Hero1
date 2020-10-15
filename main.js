var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;

var player_object="";
var image_object="";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToheight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(player_object);
    });
}

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        image_object=Img;
        image_object.scaleToWidth(block_image_width);
        image_object.scaleToheight(block_image_height);
        image_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);

    if(e.shiftKey==true && key_pressed=="80"){
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;

        document.getElementById("Current_width").innerHTML=block_image_width;
        document.getElementById("Current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true && key_pressed=="77"){
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;

        document.getElementById("Current_width").innerHTML=block_image_width;
        document.getElementById("Current_height").innerHTML=block_image_height;
    }

    if(key_pressed=="38"){
        up();
        console.log("up");
       }
   
       if(key_pressed=="40"){
           down();
           console.log("down");
          }
   
          if(key_pressed=="39"){
           right();
           console.log("right");
          }
   
          if(key_pressed=="37"){
           left();
           console.log("left");
          }

          if(key_pressed=="70"){
              new_img("ironman_face.png");
              console.log("f");
          }

          if(key_pressed=="66"){
            new_img("spiderman_body.png");
            console.log("b");
        }

        if(key_pressed=="76"){
            new_img("hulk_legs.png");
            console.log("l");
        }

        if(key_pressed=="82"){
            new_img("hulk_right_hand.png");
            console.log("r");
        }

        if(key_pressed=="72"){
            new_img("thor_left_hand.png");
            console.log("h");
        }
}
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var car_height=100;
var car_width=100;
var car_x=470;
var car_y=200;
function add(){

        background=new Image();
    background.onload=backgroundupload;
    background.src="g.jpg";
    car=new Image();
    car.onload=carupload;
    car.src="car2.png";
}
    function backgroundupload(){
        ctx.drawImage(background,0,0,canvas.width,canvas.height);
    }
    function carupload(){
        ctx.drawImage(car,car_x,car_y,car_width,car_height);
}
    window.addEventListener("keydown",key_down);
    function key_down(e){
        keypressed=e.keyCode;
        console.log(keypressed);
        if(keypressed=='38'){
        up();
        }
        if(keypressed=='40'){
            down();
        }
        if(keypressed=='37'){
                left();
        }
        if(keypressed=='39'){
                    right();
        }
        }
        function up(){
            if (car_y >=0){
            car_y=car_y-10;
        console.log("x  "+car_y+"y  "+car_y);
        
        backgroundupload();
        carupload();
        }
        }
        function down(){
            if(car_y<=700){
            car_y=car_y+10;
            console.log("x  "+car_y+"y  "+car_y);
            
            backgroundupload();
            carupload();
            }
            }
            function left(){
                if(car_x>=0){
                car_x=car_x-10;
                console.log("x  "+car_x+"y  "+car_y);
                backgroundupload();
                carupload();
                }
            } 
             function right(){
                if(car_x<=700){
                car_x=car_x+10;
                console.log("x  "+car_x+"y  "+car_y);
                
                backgroundupload();
                carupload();
                }
                }




canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["https://th.bing.com/th/id/R.fa0213b342f5259fd804260013396656?rik=Roumkc4ckUCMYA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fc%2f0%2f1138227-mars-curiosity-wallpaper-1920x1080-laptop.jpg&ehk=lTYJchLFAGY5to1YnAPWhXrDGG7eqNepPXOXUjtPUtA%3d&risl=&pid=ImgRaw&r=0", "https://th.bing.com/th/id/R.6242c96233cce6d80df9c9cc143a3259?rik=4hUPSQsgMIwfZw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-_z-4YSPGX30%2fU0XpNhZecII%2fAAAAAAAAA_o%2f8PAO0A2Jwi0%2fs1600%2fMars%2bBackground.jpg&ehk=SMOV9pMeCTL4MrPT8I%2bn4FMp2%2fA5NEwQosCPORN5IYg%3d&risl=&pid=ImgRaw&r=0", "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/GTYSdDW/realistic-planet-mars-from-space_bgcjdpswe_thumbnail-1080_01.png", "https://image.freepik.com/free-vector/mars-landscape-background-with-flat-design_23-2147979445.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image; // load image

    rover_imgTag = new Image(); //defining a variable with a new image
    rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
    rover_imgTag.src = rover_image; // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}
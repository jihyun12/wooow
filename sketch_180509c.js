var img;

function preload(){
  
  img = loadImage("go.jpg");
}
  
function setup() {
  
  createCanvas(559,810);

}

function draw() {
 image(img,0,0);
      
  loadPixels();

  
  
  for(var y = 0; y< height; y++){
    for(var x = 0;x<width; x++){
      var loc = (x+y*width)*4;
      
      pixels[loc] = img.pixels[loc];
      pixels[loc] = x;
      pixels[loc+1] = random(30);
      pixels[loc+2] = y;
      pixels[loc+3] = 10;
    }
  }
  
  updatePixels();
      
}
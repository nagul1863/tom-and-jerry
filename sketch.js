var garImg,catImg1,catImg2,catImg3;
var gar,cat,cat2,cat3;

function preload(){
  garImg=loadImage("garden.png");
  catImg1=loadImage("cat1.png");
  catImg2=loadAnimation("cat2.png","cat3.png","cat2.png")
}

function setup() {
  createCanvas(600, 600);
  gar=createSprite(300,300)
  gar.addImage(garImg);
  gar.scale=0.9;
  
  cat=createSprite(520,500)
  cat.addImage(catImg1)
  cat.scale=0.1
  
  cat2=createSprite(300,300)
  cat2.addAnimation("cat walk",catImg2)
  cat2.scale=cat.scale;
  cat2.x=cat.x;
  cat2.y=cat.y;
  cat2.visible=false;
}

function draw() {
  background("grey")
  
  if(keyDown("space"))
    {
      cat2.visible=true;
    }
  
drawSprites()
}

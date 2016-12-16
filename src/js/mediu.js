/**
 * Created by didi on 16/12/16.
 */
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");

var image = new Image();
image.src = 'img/login-bg.jpg';
image.onload = function(){
    //var width = 1920,height = 1277;
    //var radio = height/width;
    //var newHeight = width * radio;
    //var newWidth = newHeight / radio;
    //drawImage 前面三个参数是必须的，后面的可选
    //context.drawImage(image,100,100,newWidth,newHeight);

    //图片阴影
    context.shadowBlur = 20;
    context.shadowColor = "rgb(0,0,0)";

    //图像变形
    context.translate(100,100); //平移
    //context.rotate(Math.PI/4); //旋转45度

    //裁剪图像
    context.drawImage(image,200,899,100,100,0,0,100,100); //前面四个参数，原图像开始的x、y，及宽度、高度，后面四个参数，剪切后的图像放置在画布中的位置，宽高度

    //左下角
    context.setTransform(1,0,0,1,0,0);
    context.translate(100,300);
    context.scale(1,-1); //-1代表反转
    context.drawImage(image,200,899,100,100,0,0,100,100);

    //右下角
    context.setTransform(1,0,0,1,0,0);
    context.translate(300,300);
    context.scale(-1,-1);
    context.drawImage(image,200,899,100,100,0,0,100,100);

    //右上角
    context.setTransform(1,0,0,1,0,0);
    context.translate(300,100);
    context.scale(-1,1);
    context.drawImage(image,200,899,100,100,0,0,100,100);

    //访问像素值
    var imageData = context.getImageData(100,100,8,8); //8*8栅格
    var width = imageData.width,
        height = imageData.height,
        pixel = imageData.data; //CanvasPixelArray

    var x = 2,y = 2;

    var pixelRed = ((y-1)*width*4) + ((x-1)*4);
    var pixelGreen = pixelRed + 1,
        pixelBlue = pixelRed + 2,
        pixelAlpha = pixelRed + 3;
}

var imageData = context.createImageData(100,100);
var pixels = imageData.data;
var numPixels = imageData.width*imageData.height;

for(var i = 0; i < numPixels; i++){
    pixels[i*4] = Math.floor(Math.random()*255);
    pixels[i*4+1] = Math.floor(Math.random()*255);
    pixels[i*4+2] = Math.floor(Math.random()*255);
    pixels[i*4+3] = 255;
}
context.putImageData(imageData,0,0);
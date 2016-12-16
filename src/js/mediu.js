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
    var imageData = context.getImageData(100,100,200,200); //200*200栅格
    var width = imageData.width,
        height = imageData.height,
        pixels = imageData.data; //CanvasPixelArray
    var numPixels = imageData.width*imageData.height;

    for(var i = 0; i < numPixels; i++){
        //反转
        //pixels[i*4] = 255 - pixels[i*4];
        //pixels[i*4+1] = 255 - pixels[i*4+1];
        //pixels[i*4+2] = 255 - pixels[i*4+2];

        //灰度
        var average = (pixels[i*4] + pixels[i*4+1] + pixels[i*4+2])/3;
        pixels[i*4] = average;
        pixels[i*4+1] = average;
        pixels[i*4+2] = average;
    }
    context.putImageData(imageData,400,100);

    //var x = 2,y = 2;
    //
    //var pixelRed = ((y-1)*width*4) + ((x-1)*4);
    //var pixelGreen = pixelRed + 1,
    //    pixelBlue = pixelRed + 2,
    //    pixelAlpha = pixelRed + 3;
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

//马赛克
var imageData1 = context.createImageData(100,100);
var pixels1 = imageData1.data;
//马赛克块的个数
var numTitleRows = 4;
var numTitleCols = 4;

//每个块的尺寸
var titleWidth = imageData1.width/numTitleCols;
var titleHeight = imageData1.height/numTitleRows;
for(var r = 0; r < numTitleRows; r++){
    for(var c = 0; c < numTitleCols; c++){
        var red = Math.floor(Math.random()*255),
            green = Math.floor(Math.random()*255),
            blue = Math.floor(Math.random()*255);
        for(var tr = 0; tr < titleHeight; tr++){
            for(var tc = 0; tc < titleWidth; tc++){
                var trueX = (c*titleWidth) + tc;
                var trueY = (r*titleHeight) + tr;
                var pos = (trueY*(imageData1.width*4))+(trueX*4);
                pixels1[pos] = red;
                pixels1[pos+1] = green;
                pixels1[pos+2] = blue;
                pixels1[pos+3] = 255;
            }
        }
    }
}
context.putImageData(imageData1,300,300);
/**
 * Created by didi on 16/12/14.
 */

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");

context.fillStyle = "rgb(255,0,0)";
context.save();
context.shadowBlur = 20; //阴影
context.shadowColor = "rgba(0,0,0,0.5)";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.fillRect(40,40,100,100);

context.fillStyle = "rgb(0,255,0)";
context.save();
context.fillRect(150,40,100,100);

context.fillStyle = "rgb(0,0,255)";
context.fillRect(260,40,100,100);

context.restore();
context.fillRect(370,40,100,100);
context.restore();
context.fillRect(480,40,100,100);

//平移，将原点移动到另一位置
context.save();
context.translate(40,150);
context.fillRect(0,0,100,100);
context.translate(110,0); //x=0+40+100,y=0+150+0
context.fillRect(0,0,100,100);

context.restore();
context.save();
//缩放
context.translate(40,260);
context.scale(2,2);
context.fillRect(0,0,100,100);

context.restore();
context.save();
//旋转
context.translate(400,300);
context.rotate(Math.PI/4);
context.fillRect(0,0,100,100);

context.restore();
context.save();

context.fillStyle = "rgb(63,169,245)";
context.fillRect(610,40,100,100);
context.globalAlpha = 0.5;   //全局阿尔法值
context.fillStyle = "rgb(255,123,172)";
context.fillRect(650,90,100,100);
context.fillStyle = "rgba(25,223,272,0.5)"; //透明值 0.5 * 0.5
context.fillRect(690,130,100,100);

context.restore();
context.fillStyle = "rgb(63,169,245)";
context.fillRect(610,200,100,100);
context.globalCompositeOperation = "source-over"; //源在目标之上（即后画的在上边）
context.globalCompositeOperation = "destination-over";//源在目标之下（即后画的在下边）
context.globalCompositeOperation = "source-atop";//源在目标之上，重叠区域不透明，其它区域源透明，目标不透明
context.globalCompositeOperation = "destination-atop";//源在目标之下，重叠区域不透明，其它区域源不透明，目标透明
context.globalCompositeOperation = "source-in";//重叠区域只绘制源，不重叠部分透明
context.globalCompositeOperation = "destination-in";//重叠区域只绘制目标，不重叠部分透明
context.globalCompositeOperation = "source-out";//不重叠区域只绘制源，重叠部分透明
context.globalCompositeOperation = "destination-out";//不重叠区域只绘制目标，重叠部分透明
context.globalCompositeOperation = "lighter";//这个值与顺序无关，重叠区域颜色值相加，最大255就是白色
context.globalCompositeOperation = "copy";//这个值与顺序无关，只绘制源
context.globalCompositeOperation = "xor";//这个值与顺序无关，只绘制出不重叠的源与目标区域，重叠部分变成透明
context.fillStyle = "rgb(255,3,2)";
context.fillRect(650,250,100,100);

context.strokeStyle = "rgb(125,23,172)";
context.beginPath();
context.arc(140,600,100,0,Math.PI*2,false);
context.closePath();
context.stroke();
context.beginPath();
context.arc(140,600,90,0,Math.PI*2,false);
context.closePath();
context.stroke();
//--------------------
context.clearRect(0,0,1000,1000);
context.strokeStyle = "rgb(255,0,0)";
//复杂路径
context.beginPath();
context.moveTo(20,20);
context.lineTo(100,20);
context.arcTo(150,20,150,70,50);//起点终点及半径
context.stroke();

//贝赛尔曲线
context.lineWidth = 5;
context.beginPath();
context.moveTo(50,250);
context.quadraticCurveTo(250,100,450,250); //二次贝赛尔曲线,cpx控制点下,cpy控制点y,终点x，终点y
context.stroke();

context.beginPath();
context.moveTo(50,550);
context.bezierCurveTo(100,350,350,700,450,550); //三次贝赛尔曲线,cpx1，2控制点下,cpy1，2控制点y,终点x，终点y
context.stroke();

//画布导出为图像
var dataURL = canvas.toDataURL();
//-------------------
//渐变
//var gradient = context.createLinearGradient(0,0,0,500); //线性渐变
//gradient.addColorStop(0,"rgb(0,0,0)");
//gradient.addColorStop(1,"rgb(255,255,255)");

//var gradient = context.createRadialGradient(300,300,10,100,100,50); //放射渐变
//gradient.addColorStop(0,"rgb(255,0,0)");
//gradient.addColorStop(1,"rgb(0,0,255)");

//var gradient = context.createRadialGradient(500,500,0,500,500,500); //放射渐变
//gradient.addColorStop(0,"rgb(0,0,0)");
//gradient.addColorStop(1,"rgb(150,150,150)");
//
//context.fillStyle = gradient;
//context.fillRect(0,0,1000,1000);

//context.clearRect(0,0,1000,1000);
//变换矩阵（上面使用的都会影响到变换矩阵）
//context.setTransform(1,0,0,1,0,0);
//var value = Math.PI/ 4,
//    xScale = Math.cos(value),
//    ySkew = -Math.sin(value),
//    xSkew = Math.sin(value),
//    yScale = Math.sin(value),
//    xTrans = 200,
//    yTrans = 200;
//context.transform(xScale,ySkew,xSkew,yScale,xTrans,yTrans); //将现有的乘以你所指定的
//context.fillRect(0,0,200,100);
////context.transform(1,0,0,1,30,230);
//context.fillStyle = "rgb(0,0,255)";
//context.fillRect(300,300,200,100);


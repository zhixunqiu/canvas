/**
 * Created by didi on 16/12/14.
 */
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");

//矩形
context.lineWidth = 8;//针对stroke的
context.fillStyle = 'rgb(255,0,0)'; //设置样式
context.fillRect(40,40,100,100);
context.strokeStyle = 'rgb(0,255,0)'; //设置样式
context.strokeRect(150,40,100,100);

//线条
context.lineWidth = 5; //设置线宽
context.beginPath(); //开始路径
context.moveTo(40,300); //设置路径原点
context.lineTo(240,180);
context.lineTo(480,300);
context.closePath(); //链接起点和终点
context.stroke();
context.fill();

//圆形
context.beginPath();
context.arc(90,350,50,0,Math.PI,false); //最后一个参数为true的时候，逆时针，false，顺时针
context.closePath();
context.fill(); //context.stroke();

//绘制文本
var text = "Hello,World!";
context.fillStyle = 'rgb(0,0,255)'; //设置样式
context.font = "30px serif";
context.fillText(text,300,70);
context.lineWidth = 1; //设置线宽
context.strokeText(text,500,70);

//擦出Canvas
//context.clearRect(0,0,1000,1000);
context.clearRect(90,350,50,50);
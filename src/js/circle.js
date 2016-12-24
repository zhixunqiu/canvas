var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");

var playAnimation = true;

var startElem = document.getElementById('start'),
    stopElem = document.getElementById('stop');

var addEvent = function(elm,type,fn,useCapture){
    if (elm.addEventListener) {
        elm.addEventListener(type, fn, useCapture);//DOM2.0
        return true;
    }
    else if (elm.attachEvent) {
        var r = elm.attachEvent('on' + type, fn);//IE5+
        return r;
    }else {
        elm['on' + type] = fn;//DOM 0
    }
};

var startFn = function(){
    animate();
};
addEvent(startElem,'click',startFn,'false');

var Shape = function(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.radius = Math.random()*30;
    this.angle = 0;
};

var shapes = new Array();

for(var i = 0; i < 10; i++){
    var x = Math.random()*250;
    var y = Math.random()*250;
    var width = height = Math.random()*30;
    shapes.push(new Shape(x,y,width,height));
}

function animate(){
    context.clearRect(0,0,1000,1000);
    for(var i =0; i < shapes.length; i++){
        var tmpShape = shapes[i];
        var x = tmpShape.x+(tmpShape.radius*Math.cos(tmpShape.angle*(Math.PI/180)));
        var y = tmpShape.y+(tmpShape.radius*Math.sin(tmpShape.angle*(Math.PI/180)));

        tmpShape.angle += 5;
        if(tmpShape.angle > 360){
            tmpShape.angle = 0;
        }
        context.fillRect(x,y,tmpShape.width,tmpShape.height);
    }
    setTimeout(animate,33);
}
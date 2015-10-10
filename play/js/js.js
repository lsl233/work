/*开始游戏*
 *隐藏界面*/
var aaa;
var playerplane;
var xiaokill = 0;
var zhongkill = 0;
var a;
var b;
var c;
var d;
var e;
var f;
var h;
var i;
var j;
var k;
    var btn = document.getElementsByClassName("sg");
    var ym1 = document.getElementsByClassName("ym1")[0];
    var stop = document.getElementsByClassName("stop")[0];
    var yonghu = document.getElementsByClassName("yonghu")[0];
var bgsound = document.getElementById("bgsound");
    var xin =document.getElementById("xin");
    var swsound = document.getElementById("swsound");
function youxiStop(){
        ym1.style.visibility="hidden";
        stop.style.visibility="visible";
        xin.style.visibility="visible";
        yonghu.style.visibility="visible"
        myBigplan();
        a =setInterval(samllPlay,2000);     //2秒钟刷新一个小飞机
        b =setInterval(playMovemm,10);    //每1秒给小飞机添加移动函数
        c =setInterval(zhongplayMovemm,100);
        d =setInterval(move,10);
        e =setInterval(bulletMovemm,50);
        f =setInterval(zhongPlay,5000);
        h =setInterval(crashCheck,30);
        i =setInterval(zhong,30);
        j =setInterval(killFen,10);
        k =setInterval(planPlan,10);
    setInterval(xiuLiang,10);
    setInterval(dengjiLevel,10);
    bgsound.play();

    }
/*关闭窗口*/
    btn[1].onclick=function(){
    	if(window.confirm("确定推出？")){
    		window.close();
    	}
    }


    var zdsound = document.getElementById("zdsound");
    document.body.onkeydown=function(){
        var event = event = window.event||arguments[0];
        if(event.keyCode==37){
            leftMove=true;
        }
        if(event.keyCode==39){rightMove=true;}
        if(event.keyCode==38){topMove=true;}
        if(event.keyCode==40){bomMove=true;}
        if(event.keyCode==32){aaa.fase();zdsound.play();}
    }
document.body.onkeyup=function(){
    var event = event = window.event||arguments[0];
    if(event.keyCode==37){leftMove=false;leftBulletMove=false;}
    if(event.keyCode==39){rightMove=false;rightBulletMove=false;}
    if(event.keyCode==38){topMove=false;topBulletMove=false;}
    if(event.keyCode==40){bomMove=false;bomBulletMove=false;}
    if(event.keyCode==32){kong =false; zdsound.stop();}

}
var leftMove=false;
var rightMove=false;
var topMove=false;
var bomMove=false;
var kong = false
function move(){
    if(leftMove==true){
        aaa.leftMove();
    }if(rightMove==true){
        aaa.rightMove();
    }if(topMove==true){
        aaa.topMove();
    }if(bomMove==true){
        aaa.bomMove();
    }
    // if(kong==true){
    //     aaa.fase();
    // }
}

/*随机生成小飞机*/
var planyBox = new Array();     //创建一个数组
    function samllPlay(){
        var a = Math.random()*1349;      //产生随机数
        var b = Math.random()*50;
        if(aaa.level==1){
            var palyer = new plasn(a,-b,3,Math.random()*10,"img/guaiwu1.png");        //设定plasn的值
            planyBox.push(palyer);
        }
        if(aaa.level==2){
            var palyer = new plasn(a,-b,3,Math.random()*20,"img/guaiwu1.png");        //设定plasn的值
            planyBox.push(palyer);
        }
        if(aaa.level==2){
            var palyer = new plasn(a,-b,3,Math.random()*30,"img/guaiwu1.png");        //设定plasn的值
            planyBox.push(palyer);
        }
              //把palyer添加进创建的planbox数组
    }

var killNumber = document.getElementById("killNumber");
    function playMovemm(){          //小飞机移动函数
        for(var i=0; i<planyBox.length; i++){       //厉遍planybox里的小飞机个数
                           //给每个小机添加移动函数
            if(planyBox[i].isDie==false){
                planyBox[i].playMovee();
            }else{
                planyBox[i].explosionTime--;
                if(planyBox[i].explosionTime<=0){
                    box.removeChild(planyBox[i].imgNote);
                    planyBox.splice(i,1);
                }
            }
//            console.log(planyBox[0]);
        }
    }

//中飞机
var zhongplanyBox = new Array();     //创建一个数组
function zhongPlay(){
    var a = Math.random()*1349;      //产生随机数
    var b = Math.random()*50;
    if(aaa.level==1){
    var zhongpalyer = new zhongplasn(a,-b,5,Math.random()*10+1,"img/zhong1.png");        //设定plasn的值
        zhongplanyBox.push(zhongpalyer);
    }
    if(aaa.level==2){
        var zhongpalyer = new zhongplasn(a,-b,5,Math.random()*20+1,"img/zhong1.png");
        zhongplanyBox.push(zhongpalyer);
    }
    if(aaa.level==3){
        var zhongpalyer = new zhongplasn(a,-b,5,Math.random()*30+1,"img/zhong1.png");
        var dapalyer = new zhongplasn(a,-b,10,Math.random()*30+1,"img/boss.png");
        zhongplanyBox.push(zhongpalyer);
        zhongplanyBox.push(dapalyer);
    }
         //把palyer添加进创建的planbox数组
}


function zhongplayMovemm(){          //小飞机移动函数
    for(var i=0; i<zhongplanyBox.length; i++){       //厉遍planybox里的小飞机个数
        if(zhongplanyBox[i].isDie==false){
            zhongplanyBox[i].playMovee();
        }else{
            zhongplanyBox[i].explosionTime--;
            if(zhongplanyBox[i].explosionTime<=0){
                box.removeChild(zhongplanyBox[i].imgNote);
                zhongplanyBox.splice(i,1);

            }
        }
//            console.log(planyBox[0]);
    }
}
function dengjiLevel(){
    var degnji = document.getElementById("dengji");
    degnji.innerHTML=aaa.level;
}
    var bgImg = document.getElementById("bg");
var defen = document.getElementById("defen");
function killFen(){
    killNumber.innerHTML=xiaokill+zhongkill;
    defen.innerHTML=xiaokill*2+zhongkill*3;
    if(xiaokill*2+zhongkill*3<5){
        aaa.level=1;
        bgImg.style.webkitAnimation="bgDonghua 30s infinite linear";
    }else if(xiaokill*2+zhongkill*3>=5&&xiaokill*2+zhongkill*3<20){
        aaa.level=2;
        bgImg.style.webkitAnimation="bgDonghua 10s infinite linear";
    }else if(xiaokill*2+zhongkill*3>=20){
        aaa.level=3;
        aaa.imgNote.src="img/bplan.png";
        aaa.imgNote.style.width="10%";
        aaa.imgNote.style.webkitTransition="width 2s linear";
        bgImg.style.webkitAnimation="bgDonghua 1s infinite linear";
    }
}
var sun = 0;
var zdBox = new Array();
function zidanMove(){
    if(aaa.level==1){
//        sun++;
//        if(sun==10){
    var zdMove = new myPlanBullet(parseInt(aaa.imgNote.style.left)+20,parseInt(aaa.imgNote.style.top)-14,20,"img/zidan1.png");
    zdBox.push(zdMove);
//        sun=0;}
    }
    if(aaa.level==2){
//        sun++;
//        if(sun==10){
        var zdMoveleft = new myPlanBullet(parseInt(aaa.imgNote.style.left)+5,parseInt(aaa.imgNote.style.top)-14,20,"img/zidan2.jpg");
        var zdMoveright = new myPlanBullet(parseInt(aaa.imgNote.style.left)+45,parseInt(aaa.imgNote.style.top)-14,20,"img/zidan2.jpg");
        zdBox.push(zdMoveleft);
        zdBox.push(zdMoveright);
        sun=0;
//        }
    }
    if(aaa.level==3){
//        sun++;
//        if(sun==5){
        var zdMove = new myPlanBullet(parseInt(aaa.imgNote.style.left)+60,parseInt(aaa.imgNote.style.top)-30,20,"img/zidan1.png");
        var zdMoveleft = new myPlanBullet(parseInt(aaa.imgNote.style.left)+0,parseInt(aaa.imgNote.style.top)-14,20,"img/zidan2.jpg");
        var zdMoveright = new myPlanBullet(parseInt(aaa.imgNote.style.left)+130,parseInt(aaa.imgNote.style.top)-14,20,"img/zidan2.jpg");
        zdBox.push(zdMove);
        zdBox.push(zdMoveleft);
        zdBox.push(zdMoveright);
//        sun=0;
//        }
    }
}
//子弹移动
function bulletMovemm(){
    for(var i=0;i<zdBox.length;i++){
        zdBox[i].zdMovee();
        if(parseInt(zdBox[i].imgNote.style.top)<-14){
            box.removeChild(zdBox[i].imgNote);
            zdBox.splice(i,1);
            console.log(zdBox.length);
        }
    }
}
//玩家飞机位子
function myBigplan(){
    aaa = new myPlay(500,518,10,2,"img/myplan.png",1);
}

//判定子弹碰到小飞机时爆炸
function crashCheck(){
    for(var i=0;i<planyBox.length;i++){
        for(var j=0;j<zdBox.length;j++){
            var btLeft = parseInt(zdBox[j].imgNote.style.left);
            var btTop = parseInt(zdBox[j].imgNote.style.top);
            var spLeft = parseInt(planyBox[i].imgNote.style.left);
            var spTop = parseInt(planyBox[i].imgNote.style.top);      
            if(btLeft>=spLeft&&btLeft<=spLeft+30&&btTop>=spTop&&btTop<=spTop+30&&planyBox[i].isDie!=true){
                console.log("打中了");
                box.removeChild(zdBox[j].imgNote);
                zdBox.splice(j,1);
                planyBox[i].imgNote.src="img/boom1png.png";
//                planyBox.splice(i,1);
                planyBox[i].isDie=true;
                swsound.play();
                xiaokill++;
            }
        }
    }
}
var res = document.getElementsByClassName("res")[0];
/*飞机碰撞*/
function planPlan(){
    var myPlanLeft = parseInt(aaa.imgNote.style.left);
    var myPlanTop = parseInt(aaa.imgNote.style.top);
    for(var i=0;i<planyBox.length; i++){
            var spLeft = parseInt(planyBox[i].imgNote.style.left);
            var spTop = parseInt(planyBox[i].imgNote.style.top); 
            if(myPlanLeft>=spLeft&&myPlanLeft<=spLeft+50&&myPlanTop>=spTop&&myPlanTop<=spTop+30&&planyBox[i].isDie!=true){
                // console.log("打中了");
                planyBox[i].imgNote.src="img/boom1png.png";
//                planyBox.splice(i,1);
                planyBox[i].isDie=true;
                xiaokill++;
                aaa.blood--;
                if(aaa.blood==0){
                    res.style.visibility="visible";
                    gamestop.style.visibility="visible";
                    gamestop.innerHTML="You Die";
                    aaa.imgNote.src="img/boom1png.png"
                    swsound.play();
//                    alert("you die");
//                    ym1.style.visibility="visible";
//                    stop.style.visibility="hidden";
//                    box.style.visibility="hidden";
                }
            }
        }
}

//血量
var xinxin = xin.getElementsByTagName("img");
function xiuLiang(){
    if(aaa.blood==2){
        xinxin[2].style.visibility="hidden";
    }else if(aaa.blood==1){
        xinxin[1].style.visibility="hidden";
    }else if(aaa.blood==0){
//        xinxin[0].style.visibility="hidden";
    }
}

function zhong(){
    for(var b=0;b<zhongplanyBox.length;b++){
        for(var a= 0;a<zdBox.length;a++){
            var zhongLeft = parseInt(zhongplanyBox[b].imgNote.style.left);
            var zhongTop = parseInt(zhongplanyBox[b].imgNote.style.top);
            var btLeft1 = parseInt(zdBox[a].imgNote.style.left);
            var btTop1 = parseInt(zdBox[a].imgNote.style.top);
            if(btLeft1>=zhongLeft&&btLeft1<=zhongLeft+50&&btTop1>=zhongTop&&btTop1<=zhongTop+50&&zhongplanyBox[b].isDie!=true){
                zhongplanyBox[b].blood--;
                box.removeChild(zdBox[a].imgNote);
                zdBox.splice(a,1);
                if(zhongplanyBox[b].blood==0){
                zhongplanyBox[b].imgNote.src="img/smallplaneboom.gif";
                zhongplanyBox[b].isDie=true;
                zhongkill++;
                swsound.play();
                }
            }
        }
    }
}
/*小飞机对象*/
var box = document.getElementsByClassName("box")[0];
function plasn(x,y,blood,sudu,imgSrc){
    this.x = x;                                             //left距离
    this.y = y;                                             //top距离
    this.blood = blood;                                     //血量
    this.imgNote = document.createElement("img");           //img
    this.imgSrc = imgSrc;                                   //图片地址
    this.isDie = false;                                             //死亡？
    this.explosionTime=50;
    this.sudu = Math.random()*sudu+1;                       //速度
//设定样式
    this.tp=function(){
        this.imgNote.style.position="absolute";
        this.imgNote.style.left=this.x+"px";
        this.imgNote.style.top=this.y+"px";
        this.imgNote.src=this.imgSrc;
        this.imgNote.style.width="30px";
        box.appendChild(this.imgNote);
    }
    this.tp();      //初始化
//小飞机移动
    this.playMovee=function(){
        this.imgNote.style.top = parseInt(this.imgNote.style.top)+this.sudu+"px";
    }
}

/*中飞机*/
function zhongplasn(x,y,blood,sudu,imgSrc){
    this.x = x;                                             //left距离
    this.y = y;                                             //top距离
    this.blood = blood;                                     //血量
    this.imgNote = document.createElement("img");           //img
    this.imgSrc = imgSrc;                                   //图片地址
    this.isDie = false;                                             //死亡？
    this.explosionTime=30;
    this.sudu = Math.random()*sudu+1;                       //速度
//设定样式
    this.tp=function(){
        this.imgNote.style.position="absolute";
        this.imgNote.style.left=this.x+"px";
        this.imgNote.style.top=this.y+"px";
        this.imgNote.src=this.imgSrc;
        this.imgNote.style.width="50px";
        box.appendChild(this.imgNote);
    }
    this.tp();      //初始化
//小飞机移动
    this.playMovee=function(){
        this.imgNote.style.top = parseInt(this.imgNote.style.top)+this.sudu+"px";
    }
}

//大飞机
function myPlay(x,y,blood,sudu,imgSrc,level){
    this.x=x;
    this.y=y;
    this.blood=blood;
    this.imgNote = document.createElement("img");           //img
    this.imgSrc = imgSrc;                                   //图片地址
    this.isDie;                                             //死亡？
    this.sudu = sudu;
    this.level=1;
    this.fase=function(){
        zidanMove();
    }
    this.leftMove=function(){
        this.imgNote.style.left=parseInt(this.imgNote.style.left)-this.sudu+"px";
        if(parseInt(this.imgNote.style.left)<=0){
            this.imgNote.style.left="0px";
        }
    }
    this.rightMove=function(){
        this.imgNote.style.left=parseInt(this.imgNote.style.left)+this.sudu+"px";
        if(parseInt(this.imgNote.style.left)>=1320){
            this.imgNote.style.left="1320px";
        }
    }
    this.topMove=function(){
        this.imgNote.style.top=parseInt(this.imgNote.style.top)-this.sudu+"px";
        if(parseInt(this.imgNote.style.top)<=0){
            this.imgNote.style.top="0px";
        }
    }
    this.bomMove=function(){
        this.imgNote.style.top=parseInt(this.imgNote.style.top)+this.sudu+"px";
        if(parseInt(this.imgNote.style.top)>620){
            this.imgNote.style.top="620px";
        }
    }

    this.tp=function(){
        this.imgNote.style.position="absolute";
        this.imgNote.style.left=this.x+"px";
        this.imgNote.style.top=this.y+"px";
        this.imgNote.src=this.imgSrc;
        this.imgNote.style.zIndex="10";
        this.imgNote.style.width="50px";
        box.appendChild(this.imgNote);
    }

    this.tp();
}

function myPlanBullet(x,y,sudu,imgSrc){
    this.x=x;
    this.y=y;
    this.imgNote = document.createElement("img");           //img
    this.imgSrc = imgSrc;                                   //图片地址                                          //死亡？
    this.sudu = sudu;
    this.zdMovee=function(){
        this.imgNote.style.top=parseInt(this.imgNote.style.top)-this.sudu+"px";
    }

    this.tp=function(){
        this.imgNote.style.position="absolute";
        this.imgNote.style.left=this.x+"px";
        this.imgNote.style.top=this.y+"px";
        this.imgNote.src=this.imgSrc;
        this.imgNote.style.zIndex="30";
//        this.imgNote.style.width="20px";
        box.appendChild(this.imgNote);
    }
    this.tp();
}
var count = 0;
var stop = document.getElementsByClassName("stop")[0];
var gamestop = document.getElementsByClassName("gamestop")[0];

    stop.onclick=function(){
    count++;
    if(count%2!=0){
        gamestop.style.visibility="visible";
        clearInterval(a);     
        clearInterval(b);    
        clearInterval(c);
        clearInterval(d);
        clearInterval(e);
        clearInterval(f);
        clearInterval(h);
        clearInterval(i);
        clearInterval(j);
        clearInterval(k);
    }else{
        gamestop.style.visibility="hidden";
        a =setInterval(samllPlay,2000);     //2秒钟刷新一个小飞机
        b =setInterval(playMovemm,10);    //每1秒给小飞机添加移动函数
        c =setInterval(zhongplayMovemm,100);
        d =setInterval(move,1);
        e =setInterval(bulletMovemm,50);
        f =setInterval(zhongPlay,5000);
        h =setInterval(crashCheck,30);
        i =setInterval(zhong,30);
        j =setInterval(killFen,10);
        k =setInterval(planPlan,10);
    }
}

//function gameStop(){

//stop.onclick=function(){

//bgsound

res.onclick=function(){
    // setInterval(function(){
    res.innerHTML="Game suspension";
    res.style.visibility="hidden";
    gamestop.style.visibility="hidden";
    for(var p=0; p<planyBox.length; p++){
        box.removeChild(planyBox[p].imgNote);
        planyBox.splice(p,1);
    }
    for(var o=0; o<zhongplanyBox.length; o++){
        box.removeChild(zhongplanyBox[o].imgNote);
        zhongplanyBox.splice(o,1);
    }
    for(var l=0; l<zdBox.length; l++){
        box.removeChild(zdBox[l].imgNote);
        zdBox.splice(l,1);
    }
    aaa.level=1;
for(var x=0; x<xinxin.length; x++){
    xinxin[x].style.visibility="visible";
}
    xin.style.visibility="visible";
    xiaokill=0;
    zhongkill=0;
    box.removeChild(aaa.imgNote);

        clearInterval(a);     
        clearInterval(b);    
        clearInterval(c);
        clearInterval(d);
        clearInterval(e);
        clearInterval(f);
        clearInterval(h);
        clearInterval(i);
        clearInterval(j);
        clearInterval(k);
    // },10);
        window.setTimeout(youxiStop,1000);
}


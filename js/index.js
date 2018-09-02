window.addEventListener('load',function(){
    var jd = new JD();
    jd.searchGradient();
    jd.downTime();
    jd.slide();
})




var JD = function(){


}
//给JD原型添加一个方法
JD.prototype = {


    searchGradient: function(argument){

        window.addEventListener('scroll',function(){

                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                    // console.log(scrollTop);
                    
                var slideHight = document.querySelector('#slide').offsetHeight;
                // 计算透明度
                        // console.log(slideHight);
                        
                
                // 判断透明度

                var Opacity = 0;
                if (scrollTop < slideHight) {

                   Opacity = scrollTop/slideHight * 1;
                
                }else{ 
                    
                    Opacity = 1;

                }

                document.querySelector('#header').style.backgroundColor= "rgba(224,22,27,"+Opacity+")";

        })

    },

    downTime: function(argument){
            // 设置未来的时间的毫秒数
            var futureTime = new Date(2018,7,30,13,10,0).getTime();
            // 获取当前的时间毫秒数
            var nowTime = new Date().getTime();

            // 需要执行的时间 = (未来时间 - 当前时间 )/1000  求得执行时间的秒数
             var time = (futureTime - nowTime) /1000;
            // 获取span标签
            var spans = document.querySelectorAll(".seckill-time span");
            //开启定时器
            var timeID = setInterval(function(){
                  
                    if(time <= 0){
                        time = 0;
                        clearInterval(timeID);
                    }
                    time--;
                    // 计算总时间的时分秒
                    var hour  = Math.floor(time/3600)%24;
                    var minute = Math.floor(time / 60)%60;
                    var second = time % 60 ;
                    //  获取所有span标签  设置span的时分秒上的十位个位数

                    spans[0].innerHTML = Math.floor(hour / 10);
                    spans[1].innerHTML = Math.floor(hour % 10);
                    spans[3].innerHTML =Math.floor(minute /10);
                    spans[4].innerHTML =Math.floor(minute %10);
                    spans[6].innerHTML = Math.floor(second /10);
                    spans[7].innerHTML =Math.floor(second % 10);
            },1000)

    },
    // 实现轮播图功能
    slide: function(argument){
        // 初始化轮播图
        var mySwiper = new Swiper ('.swiper-container', {
            //自动轮播图的参数
            autoplay:{

                delay: 2000,

                disableOnInteraction: false,
            },

        //循环播放轮播图
            loop: true,
            
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            
     
          }) 

    }
}
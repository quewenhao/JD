
window.addEventListener('load',function(){

var jd = new JD();

jd.categoryLeftSwiper();

jd.categoryRightSwiper();

jd.categoryLeftClick();

})




var JD = function(){


}

JD.prototype = {
  //分类左侧滑动效果
    categoryLeftSwiper: function(){
      //调用swiper的初始化方法
        var swiper = new Swiper('.category-left .swiper-container', {
            // 垂直方向滑动
            direction: 'vertical',
            // 支持多个子元素滑动
            slidesPerView: 'auto',
            // 一次性滑动多个元素
            freeMode: true,

        //    支持鼠标滑动
            mousewheel: true,
          });
    },
    //右侧滑动效果
    categoryRightSwiper: function(){
            //调用swiper的初始化方法
            var swiper = new Swiper('.category-right .swiper-container',{
                //垂直方向滑动
                direction: "vertical",
                //支持多个子元素滑动
                slidesPerView: 'auto',
                //一次性滑动多个元素
                freeMode:true,
                // 添加滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                  },
            
                //支持鼠标滑动
                mousewheel: true


            })
    },

    categoryLeftClick:function(){

          var slideUl = document.querySelector('.category-left .swiper-slide ul');

          // console.log(slideUl);
          var liList = slideUl.children;
            // 给所有li 元素删除 active 这个类 
          for(var i = 0; i < liList.length; i++){
                  liList[i].index = i;

          }
          

          // console.log(liList);
        // 如果所有的子元素都要做同样的事情 可以给他们的父元素添加事件  JS事件可以捕获
        // 虽然是给父元素添加的事件  但最终会捕获到子元素身上
          slideUl.addEventListener('click',function(e){
             //遍历父元素里面的子元素
            for (var i = 0; i < liList.length; i++){
                // 在给被点击li添加类时  先给所有li清除 active 这个类
                liList[i].classList.remove("active");

            }
            // 给li 添加active这个类
             e.target.parentNode.classList.add('active');
                //获取li 的真实高
              var liHeight = e.target.parentNode.offsetHeight;
              console.log(liHeight);
              
                //获取Li的index值
              var liIndex = e.target.parentNode.index;


                //移动的距离 = -index的值 * li的真实高度  注意后面使用 移动距离是必须要在最后拼接单位 px
              var transLateY = -liIndex * liHeight;
                // 计算位移最大距离  = 父元素固定高度 - 子元素的不固定高度
              var maxTranslateY = document.querySelector('.category-left').offsetHeight - slideUl.offsetHeight;
            //    判断如果当前位移距离小于了最大位移距离 就设置为最大位移距离
              if (transLateY < maxTranslateY) {

                transLateY = maxTranslateY;
              }
            //   把位移距离设置到移动的.swiper-wrapper身上去这样就实现吸顶效果
              document.querySelector('.category-left .swiper-wrapper').style.transform = "translate3d(0px, "+transLateY +"px, 0px)";
            //给位移的添加过度属性
              document.querySelector('.category-left .swiper-wrapper').style.transition = "all 0.3s";
          })
          
    }
    
}
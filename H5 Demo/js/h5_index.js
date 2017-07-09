/**
 * Created by ydd on 2017/4/12.
 */
//rem  动态获取html的 font-size 值
~function (desW) {
    var winW = document.documentElement.clientWidth,
        ratio =winW/desW;
    document.documentElement.style.fontSize = ratio*100 + 'px';
}(640);


//swiper
var mySwiper = new Swiper('.swiper-container',{
    //setting 配置的参数
    direction : 'vertical',//规定方向: 垂直方向滚动
    loop : true,//无缝循环滚动
    onTransitionEnd:function (swiper) {
        //回调函数 onSlideChangeEnd 从一个slide 结束，另一个slide执行
       // swiper.activeIndex 获取当前滑块的索引值
        var slideAry = swiper.slides;//获取所有滑块的总数
       var curIndex = swiper.activeIndex;
        var targetId = 'page0';
        var total =slideAry.length;
        //动态获取id值  0 新数组的倒数第二个  length-1 新数组的第一个

        console.log(slideAry[1]);
        console.log(slideAry[2]);
        console.log(slideAry[3]);
        switch (curIndex){
            case 0 :
                targetId+=total-2;//第一张 是page2
                break;
            case total-1:
                targetId+=1;//第二张 是page1
                break;
            default:
                targetId+=curIndex;
        }
        //循环数组的每一项
        [].forEach.call(slideAry,function (item,index) {
            if(curIndex== index){//让当前屏加上id 其他屏id为 null
                item.id = targetId
            }else{
                item.id = null;
            }
        })
    }
});


//music
//获取操作的元素  用定时器让音乐播放器有一个延迟的时间
var musicBox = document.querySelector('#musicBox'),
    musicAudio = document.querySelector('#musicAudio');
window.setTimeout(function () {
    //音乐播放器播放  1、有声音 2、没有声音
    musicAudio.play();
    //事件监听  canplay 动画效果才能生效
    musicAudio.addEventListener('canplay',function () {
        musicBox.className = 'music musicMove'
    });
},500);

musicBox.addEventListener('click',function () {
    //paused 暂停状态
    //音乐播放 动画开启
    //
    if(musicAudio.paused){
        musicAudio.play();
        musicBox.className = 'music musicMove';

    }else{
        musicAudio.pause();
        musicBox.className = 'music';
        musicBox.style.opacity = '1';
    }
},false);
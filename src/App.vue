<template>
  <div id="app">
    <navigation ref="nav"/>
    <router-view></router-view>
<!--    <div style="margin: auto;height: 100%">-->
<!--      <p style="font-size: 20px; margin: auto">你好,abcdefghijklmnopqrstuvwxyz,1234567890,字体字体</p>-->
<!--      <p>新冠肺炎疫情期间，在餐厅用餐怎么才能更安全?为了降低风险，以色列发明者研发了一种有“机械嘴”的口罩，可以让你外出用餐时也不用摘口罩。-->

<!--        Israeli inventors have developed a coronavirus mask with a remote control mouth that lets diners eat food without taking it off, a device they say could make a visit to a restaurant less risky.-->

<!--        以色列发明家发明了一种预防新型冠状病毒的口罩，这种口罩有一个可以远程控制的开口，可以让用餐者不用取下口罩就能用餐。发明者说，这种口罩可以降低去餐厅就餐的风险。-->

<!--        A squeeze of a lever, much like a cyclist operates a handbrake, opens a slot in the front of the mask so that food can pass through.-->

<!--        用餐者只需挤压控制杆，就像骑自行车的时候捏手刹一样，口罩前面就会打开一个狭槽，人们就可以通过把食物送进嘴里。-->

<!--        The process could get messy with ice cream or sauces, but more solid morsels can be gobbled up in a flash a la Pac-Man in the arcade game.-->

<!--        戴着这种口罩吃冰淇淋或酱汁可能很糟糕，但进食固体食物时，可以像街机游戏《吃豆人》里一样，大口瞬间吃掉。-->

<!--        morsel[ˈmɔːsl]：n.一口;(食物)少量-->

<!--        a la：按…方式地-->

<!--        一起来看看这种吃饭不用摘的口罩吧：-->

<!--        "The mask will be opened mechanically by hand remote or automatically when the fork is coming to the mask," Asaf Gitelis, vice president of Avtipus Patents and Inventions, said on Monday as he demonstrated the device at its offices near Tel Aviv.-->

<!--        阿萨夫·吉特利斯是阿提卡斯专利与发明部门的副总裁，他周一(5月18日)在特拉维夫附近的办公室展示这款口罩时说：“当叉子接近口罩时，口罩可以通过手动遥控或自动开启。”-->

<!--        "Then you can eat, enjoy, drink and you take out the fork and it will be closed, and you're protected against the virus and other people sitting with you."-->

<!--        “然后你就可以尽情地吃吃喝喝，叉子拿出来以后，口罩就会合上，用餐者就可以免受病毒感染，或者被身边的人传染上。”-->

<!--        The company said it plans to start manufacturing the mask within months and had already submitted a patent. It said it would likely sell at a 3 to 10 shekel premium above the price of the simple pale blue medical masks many Israelis wear.-->

<!--        该公司表示，计划在几个月内开始生产这种口罩，并已申请了专利。这款口罩的售价可能比很多以色列人佩戴的普通蓝色医用口罩高出3至10谢克尔(约合人民币6至20元)。-->

<!--        premium[ˈpriːmiəm]：n.额外费用-->

<!--        Outside a Juice Bar in Tel Aviv, Reuters showed customers a cellphone video of the mask in action. Opinion was divided.-->

<!--        在特拉维夫一家果汁吧外，路透社向顾客们展示了一段佩戴这种口罩就餐的手机视频。人们对此看法不一。-->

<!--        "I think this mask, that enables me to eat while I'm still wearing it, is a must-have," said Ofir Hameiri, a 32-year-old graduate student.-->

<!--        32岁的研究生奥菲尔·哈迈尔说：“我认为很有必要佩戴这种口罩，这样吃东西的时候也能戴着口罩。”-->

<!--        But eating an ice cream cone, Ron Silberstein, a 29-year-old musician, said: "I don't think this mask could hold this kind of ice cream - it's dripping all over. I wouldn't want to wear it afterward."-->

<!--        但是，29岁的音乐家罗恩·西尔伯斯坦在吃蛋卷冰淇淋时说：“我不认为戴着这种口罩能吃蛋卷冰淇淋——滴得到处都是，之后我也就不想戴了。”-->

<!--        Israel has largely reopened its economy after a dramatic drop in cases of the novel coronavirus. Restaurants are open only for takeout for the time being.-->

<!--        在新型冠状病毒感染病例大幅下降后，以色列基本上重新开放了经济活动。餐馆暂时只提供外卖。</p>-->
<!--    </div>-->

  </div>

</template>

<script>

  import Navigation from "./components/nav/Navigation";

  export default {
    name: 'App',
    components: {
      Navigation
    }
  }
</script>

<style>

  @import "assets/css/common.css";

  #app {
    /*--font-family-sans-serif: Roboto,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";*/
    /*--font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    text-align: center;
    font-family: Noto Sans SC;
    font-style: normal;
    font-weight: 400;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    background-color: var(--wee-background-color);
  }


</style>

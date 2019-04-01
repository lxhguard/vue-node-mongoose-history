<template>
    <div>
        <!-- 头部标题栏 -->
        <HeadTop title="十三朝古都西安——————盛唐长安">
            <span slot="left">
            </span>
            <span slot="right">
                <Icon type="md-search" size="20"/>
            </span>
        </HeadTop>

        <!-- 内容正文 -->
        <div class="content">
            <!-- 长安图 走马灯 -->
            <div class="zoumadeng">
                <br><br>
                <Carousel autoplay v-model="value2" loop>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="../../static/images/world_zouma1.jpg" alt="" class="world_zouma" >
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="../../static/images/world_zouma2.jpg" alt="" class="world_zouma">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="../../static/images/world_zouma3.jpg" alt="" class="world_zouma">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="../../static/images/world_zouma4.jpg" alt="" class="world_zouma">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="../../static/images/world_zouma5.jpg" alt="" class="world_zouma">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="../../static/images/world_zouma6.jpg" alt="" class="world_zouma">
                        </div>
                    </CarouselItem>
                </Carousel>
                <br><br>
            </div>
            <!-- 长安文字 选项卡 -->
            <div class="wenzi_zhuyao">
                <div class="wenzi">
                    <Tabs style="color:black;">
                        <TabPane label="古都" >
                            <div >
                                <p class="wenzi_content">历史上的长安，是泱泱千年坐拥十三朝历史的古都，是名扬天下的天下大邦。花萼相辉楼的“金铺珠缀，画拱交映，飞梁回绕，藻井倒垂”，彰显盛唐建筑之光华壮彩；沉香亭的“云想衣裳花想容，春风拂槛露华浓”，极尽盛唐人文之酣畅风流……</p>
                            </div>
                        </TabPane>
                        <TabPane label="城之大" >
                            <div>
                                <p class="wenzi_title">山河千里国，城阙九重门</p>
                                <p class="wenzi_content">长安城是博大而壮丽的。整座城市，宛如棋盘，井井有条。长安城方圆达84平方公里，规模宏伟，形制规整，北贯渭水，西绕沣河，东临灞河、浐河，南望终南山。它沿袭了北魏洛阳城、北齐邺都南城的形制，三层城郭内外有别，城中功能区分严密。纵横交错的大街将城划分为109个区域，东西各有两市，老百姓们住在各个坊里。如白居易所说，“白千家似围棋局，十二街如种菜畦。”</p>
                            </div>
                        </TabPane>
                        <TabPane label="人之多" >
                            <div>
                                <p class="wenzi_title">九天阊阖开宫殿，万国衣冠拜冕旒</p>
                                <p class="wenzi_content">盛唐的长安城，世界各地的人慕名而来，都渴望在这繁华盛世里分得一杯羹。无论哪里的人，性情相投，即可惺惺相惜。人口最多的时候达100多万人，有300多个国家的使者、商人、留学生汇聚于此。浓眉高鼻的外国人，还可在唐朝为官。不同宗教信仰都在这里，得以传播、发扬。</p>
                            </div>
                        </TabPane>
                        <TabPane label="市之繁" >
                            <div>
                                <p class="wenzi_title">落花踏尽游何处，笑入胡姬酒肆中</p>
                                <p class="wenzi_content">盛唐的长安是繁华富足的。东西两市，商贾云集，酒肆林立，琳琅满目，多达两百多行当。电影中，白乐天曾带空海领略过东西市繁华，也在这儿看过幻术表演。”东市“和”西市“是唐朝长安城的经济活动中心，也是中外各国进行经济交流活动的重要场所，东市主要服务于达官贵人等上层社会，而西市不仅是大众平民的市场，包含大量西域，日本，韩国等国际商客。</p>
                            </div>
                        </TabPane>
                        <TabPane label="食之盛" >
                            <div>
                                <p class="wenzi_title">胡麻饼样学京都，面脆油香新出炉</p>
                                <p class="wenzi_content">盛唐的长安是吃货的天堂。胡饼可能是最出名的美食。当时，长安饼摊随处可见。宰相刘晏去上早朝，在路上闻到胡饼的香气，“势气辉腾”，忍不住叫人去买了几个。结果太烫了，他就用袍袖兜起来，还和同事说，“美不可言，美不可言。”白居易离开长安时，还特地学了做了几个胡麻饼，“面脆油香新出炉”，带给外地的友人品尝。还有位官员张衡，因为蒸饼太好吃了，直接在路边开吃，后来被认为有失朝廷形象而罢了官。可见长安美食的诱惑力有多大。</p>
                                <br><br><br><br><br><br>
                            </div>
                        </TabPane>
                        <TabPane label="诗之美" >
                            <div>
                                <p class="wenzi_title">春风得意马蹄疾，一日看尽长安花</p>
                                <p class="wenzi_content">白居易27岁考中进士，骄傲地在雁塔题名：“慈恩塔下题名处，十七人中最少年。”而孟郊46岁才金榜题名，却是“春风得意马蹄疾，一日看尽长安花。”在长安，只要身怀诗才，功名利禄万千荣华就很容易得到。</p>
                                <p class="wenzi_content">诗人们流连于长安的酒肆府邸间，在此换歌，在此离别，也记住了长安的春夏秋冬。春天的相聚是杜甫的“三月三日天气新，长安水边多丽人。”离别是王维的“渭城朝雨浥轻尘，客舍青青柳色新。”</p>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
            <!-- 左侧栏 历史线 -->
            <div class="history">
                <Timeline>
                    <TimelineItem color="green">
                        <Icon type="ios-trophy" slot="dot"></Icon>
                        <span>公元581年 杨坚称帝</span>
                    </TimelineItem>
                    <TimelineItem>616年 李渊兵变建唐</TimelineItem>
                    <TimelineItem>713—741年 开元盛世</TimelineItem>
                    <TimelineItem>安史之乱 衰败</TimelineItem>
                </Timeline>
            </div>
            <!-- 结束 卡片 -->
            <div class="kapian">
                <Row>
                    <Col span="8">
                        <figure class="text4" style="width:80%">
                            <img src="../../static/images/hanfu_card.jpg" style="width:80%">
                            <figcaption style="color:black;font-size:1.5em;">
                                <br><br>
                                <h2>《历世真仙体道通鉴》</h2>
                                <p>修静立道士衣服之号，</p>
                                <p>月破星巾，</p>
                                <p>霓裳霞袖，</p>
                                <p>十绝灵幡，</p>
                                <p>于此著矣.</p>
                                <div></div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col span="8">
                        <Card style="width:400px;margin:0 auto;height:432px;">
                            <div style="text-align:center">
                                <img src="../../static/images/weijin.jpg" width="300">
                                <p>行走在如今的西安，有历史沧桑的睿智与深邃，有千年文化的沉淀与创新，有在发展中奏响新篇的底气与自信，更有着在时代中搏击浪潮的从容与果敢。</p>
                                <p>“浩渺行无极，扬帆但信风”，邀月举杯，敬我们心中永不灭的长安城。</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span="8">
                        <figure class="text4" style="width:80%;float:right;">
                            <img src="../../static/images/quju_card.jpg" style="width:80%">
                            <figcaption style="color:black;font-size:1.5em;">
                                <h2>《汉书·江充传》</h2>
                                <p>充衣纱縠襌衣，</p>
                                <p>曲裾后垂交输，</p>
                                <p>冠襌纚步摇冠，</p>
                                <p>飞翮之缨。</p>
                                <div></div>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
            </div>

        </div>
        
        <!-- 导航栏 -->
        <TabBar></TabBar>
    </div>
</template>

<script>
import store from '../../vuex/store'
import TabBar from '../components/TabBar/TabBar'
import HeadTop from '../components/HeadTop/HeadTop'

export default {
    name:"World",
    data(){
        return {
            value2: 0
        }
    },
    //引入vuex
    store,
    //引入子组件
    components: {
        TabBar,
        HeadTop
    },
}
</script>

<style scoped>
.zoumadeng{
    background-image: url('.././../static/images/zouma_bg1.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.world_zouma{
    width:50%;
}
.wenzi_zhuyao{
    background-image: url('.././../static/images/zouma_bg2.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.wenzi{
    width:60%;
    margin:0 auto;
    font-size:2em;
}
.wenzi_title{
    color:black;
}
.wenzi_content{
    /* 首行缩进，文字对齐方式 */
    text-indent:50px;
    text-align: left;
}
.history{
    width: 150px;
    position: fixed;
    left: 15px;
    top: 20%;
    color: black;
    font-size: 2em;
    z-index: 99;
}
.kapian{
    background-image: url('.././../static/images/zouma_bg3.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}



figure{
				position: relative;
				width: 33.33%;
				overflow: hidden;
				height: 450px;
				float: left;
				transition: all 0.35s;
			}
			figcaption{
				position: absolute;
				top: 0px;
				left: 0px;
				color: #fff;
				font-family: "微软雅黑";
				width:100%;
			    height:100%;
			}
			figure figcaption p,h2,span,div{transition: all 0.35s;}
			figure img{opacity: 0.8;transition: all 0.35s;}
			/*响应式布局*/
			@media screen and (max-width: 600px){
				figure{width: 100%;}
			}
			@media screen and (max-width: 601px) and (max-width: 1000px){
				figure{width: 50%;}
			}
			@media screen and (min-width: 1001px){
				figure{width: 33.33%;}				
			}
			/*CSS3动态提示效果--缩放动画*/
			.text4{background: #000;background-image: url('.././../static/images/zouma_bg3.jpg');
                background-size: 100% 100%;
                background-repeat: no-repeat;}
			.text4 figcaption{width: 100%;height: 100%;}
			.text4 figcaption div{
				border:2px solid #fff;
				width: 80%;
				height: 80%;
				position: absolute;
				top: 10%;
				left: 10%;
				transform: scale(1.2,1.2);
				opacity: 0;
			}
			.text4:hover figcaption div{
				transform: scale(1,1);
				opacity: 1;
			}
			.text4:hover img{
				opacity: 0.5;
				transform: scale(1.2,1.2);
			}
			.text4 figcaption h2{margin-top: 15%;margin-left: 15%;transform: scale(1.2,1.2);opacity: 0;}
			.text4 figcaption p{margin-top: 5px;margin-left: 15%;transform: scale(1.2,1.2);opacity: 0;}
			.text4:hover figcaption h2{transform: scale(1,1);opacity: 1;}
			.text4:hover figcaption p{transform: scale(1,1);opacity: 1;}

</style>

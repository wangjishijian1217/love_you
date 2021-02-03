/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2019, 2, 5) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 100) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 190)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 className="yourName">我的小可爱(●'◡'●)</h1>
                    <p>
                        嘿嘿，(●ˇ∀ˇ●)，今天是我们在一起两年的纪念日。
                    </p>
                    <p>
                        想对你说的话有很多，但是囿于文采和表达能力，下笔的时候却又不知道该从哪里说起。
                        我的性格有些内向，有点沉默寡言。两年前的今天看到你给我发的消息时，可能现在已经难以准确表述当时的心情，
                        但总的来说应该算是惊喜吧。嘿嘿嘿。
                    </p>
                    <p>
                        我记得最开始你还担心过主动告白在之后的关系中是否会产生坏的影响，也许世界之大无奇不有，但是我敢保证我并没有因为这点就对你有啥看法。
                        （本来是想打消你之前的顾虑，但是写出来怎么变得很奇怪，想着把这段删掉，但想了想我觉得你应该可以理解我的意思）其实我对你有这点顾虑反而很奇怪。
                        两个人在一起之后本就是一个不断磨合的过程嘛，但是我相信我们的感情可以经受时间的考验。
                    </p>
                    <p>
                        当然，我也从不敢否认刚在一起时我的幼稚（我也没有否认的意思——(●'◡'●)）。比如你生气了还不主动哄你等，但是我也尽量在做好。例如我们刚在一起时
                        我还坚定地认为“谁错谁道歉”，“绝不低头”等（现在想起来确实很傻，不过这也算是一种成长吧），当然思想是不断变化的，我现在就认为有啥嘛，反正先别让你生气，不然又对身体不好了。
                        （不过想是这么想的，做起来总是有些难度，毕竟生气的时候脑子总有些不正常，得需要冷静一下——(●ˇ∀ˇ●)）。
                    </p>
                    <p>
                        我对未来的期盼，其实都差不多啦，之前写过一份类似这样的书信不知道你还记不记得。两个人一起买菜，做饭，宅在家里玩，抱着你睡觉觉......
                    </p>
                    <p>
                        现在想起来，在一起的时候总有一些举动不是很合适。比如第一次在外面过夜时，其实我现在一直觉得当时的一句话说的不合适，可能伤了你的心或者你可能已经忘记了（如果忘了的话建议你私下再问我）。
                        我也从不敢否认对你没有不正经的想法。毕竟每一次出去玩都对你动手动脚的——(●ˇ∀ˇ●)，emmm呵，男人！！！当然我也非常愿意尊重你的想法，所以我每次也仅限于动手动脚。
                        emmm说到这里，其实一直有不是很合适的话想对你说：我咋老觉得你的警惕性太低了，我现在总怕你在外面被骗了咋办。我是说假如，假如啊，别多想，假如没能在一块，你一定要对下一个人警惕啊，如果他都不尊重你的意见，我觉得他估计不得行。
                        （emmmm？？？？不对劲，我咋觉得我是在给自己挖坑呢？？？）
                    </p>
                    <p>
                        想说的话有很多，想解释的也有很多，也有很多话因为一些顾虑不知道适不适合说出来。总之就到这里吧，希望疫情早点结束。早点见到你！！！
                    </p>
                    <p>最后祝我家的小猪猪两周年纪念日快乐哦！</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>爱你的♥大可爱(●'◡'●)</p>
                        <p>2021年2月4日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main
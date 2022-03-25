//存放標籤文字的列表
var secText = ["零秒", "壹秒", "貳秒", "參秒", "肆秒", "伍秒", "陸秒", "柒秒", "捌秒", "玖秒", "拾秒", "拾壹秒", "拾貳秒", "拾參秒", "拾肆秒", "拾伍秒", "拾陸秒", "拾柒秒", "拾捌秒", "拾玖秒", "貳拾秒", "貳拾壹秒", "貳拾貳秒", "貳拾參秒", "貳拾肆秒", "貳拾伍秒", "貳拾陸秒", "貳拾柒秒", "貳拾捌秒", "貳拾玖秒", "參拾秒", "參拾壹秒", "參拾貳秒", "參拾參秒", "參拾肆秒", "參拾伍秒", "參拾陸秒", "參拾柒秒", "參拾捌秒", "參拾玖秒", "肆拾秒", "肆拾壹秒", "肆拾貳秒", "肆拾參秒", "肆拾肆秒", "肆拾伍秒", "肆拾陸秒", "肆拾柒秒", "肆拾捌秒", "肆拾玖秒", "伍拾秒", "伍拾壹秒", "伍拾貳秒", "伍拾參秒", "伍拾肆秒", "伍拾伍秒", "伍拾陸秒", "伍拾柒秒", "伍拾捌秒", "伍拾玖秒"];
var minText = ["零分", "壹分", "貳分", "參分", "肆分", "伍分", "陸分", "柒分", "捌分", "玖分", "拾分", "拾壹分", "拾貳分", "拾參分", "拾肆分", "拾伍分", "拾陸分", "拾柒分", "拾捌分", "拾玖分", "貳拾分", "貳拾壹分", "貳拾貳分", "貳拾參分", "貳拾肆分", "貳拾伍分", "貳拾陸分", "貳拾柒分", "貳拾捌分", "貳拾玖分", "參拾分", "參拾壹分", "參拾貳分", "參拾參分", "參拾肆分", "參拾伍分", "參拾陸分", "參拾柒分", "參拾捌分", "參拾玖分", "肆拾分", "肆拾壹分", "肆拾貳分", "肆拾參分", "肆拾肆分", "肆拾伍分", "肆拾陸分", "肆拾柒分", "肆拾捌分", "肆拾玖分", "伍拾分", "伍拾壹分", "伍拾貳分", "伍拾參分", "伍拾肆分", "伍拾伍分", "伍拾陸分", "伍拾柒分", "伍拾捌分", "伍拾玖分"];
var hourText = ["十二點", "一點", "兩點", "三點", "四點", "五點", "六點", "七點", "八點", "九點", "十點", "十一點", "十二點", "一點", "兩點", "三點", "四點", "五點", "六點", "七點", "八點", "九點", "十點", "十一點"];
//為了排版，上下午的index設定在0&59
var noonText = ["下午", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "上午"];
var dayText = ["一號", "二號", "三號", "四號", "五號", "六號", "七號", "八號", "九號", "十號", "十一號", "十二號", "十三號", "十四號", "十五號", "十六號", "十七號", "十八號", "十九號", "二十號", "二十一號", "二十二號", "二十三號", "二十四號", "二十五號", "二十六號", "二十七號", "二十八號", "二十九號", "三十號", "三十一號"];
var weekText = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
var monthText = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
//存放元素的列表
var secList = [];
var minList = [];
var hourList = [];
var noonList = [];
var dayList = [];
var weekList = [];
var monthList = [];
//將列表以文字-元素對應的方式放入另一個列表
var timeText = [
    [monthText, monthList],
    [dayText, dayList],
    [weekText, weekList],
    [noonText, noonList],
    [hourText, hourList],
    [minText, minList],
    [secText, secList]
];
var timer;//時鐘
window.onload = function () {
    //建立所有元素
    init();
    // 取得當前時間
    setInterval(function () {
        //setTimeout()只會執行一次就結束，setInterval()則是會在間隔固定的時間不斷重複。
        runTime();
    }, 100);//非同步
    //將timer旋轉90°
    timer.style.transform = "rotate(90deg)";
}

function init() {
    timer = document.getElementById('timer');
    //timeText.length共6種
    for (let i = 0; i < timeText.length; i++) {
        //timeText.length[i]，迭代對應次數
        for (let j = 0; j < timeText[i][0].length; j++) {
            //呼叫createLabel函式，變數變數來源是timeText[i][0][j]，也就是字尾為Text的列表存放的值
            let label = createLabel(timeText[i][0][j]);
            timer.appendChild(label);
            //將標籤放入timeText[i][1][j]，也就是字尾為List的列表
            timeText[i][1].push(label);
        }
    }//以上程序跑完，timeText列表會形成[[label.text(標籤文字),label(標籤本身)],[label.text,label],...]
}

//建立標籤的函式
//text引數接收文字，如「一月」，變數來源是timeText[i][0][j]，也就是字尾為Text的列表存放的值
function createLabel(text) {
    let div = document.createElement('div');
    //set class  to 'label'
    div.classList.add('label');
    div.innerText = text;
    return div;
}

function runTime() {
    //將當前時間存入變數
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hour = time.getHours();
    let noon = 0;
    //判斷上下午
    if (hour > 11)
        noon = 0;
    else
        noon = 59;
    let week = time.getDay();
    let day = time.getDate();
    let month = time.getMonth();
    //存放目前時間
    let nowTime = [month, day - 1, week, noon, hour, min, sec];
    for (let i = 0; i < nowTime.length - 1; i++) {
        let num = nowTime[i];
        //修改前一個顏色                
        if (num != 0) {
            //一般情況下，修改前一個索引的label顏色
            timeText[i][1][num - 1].style.color = "gray";
            //上下午只在index[59]&[0]之間切換，下面這行可以防止例外狀況
            timeText[i][1][0].style.color = "gray"
        }
        else {
            //由於0-1=(-1),為了避免undefinded，當index=0，直接修改最後一個索引的label顏色
            timeText[i][1][timeText[i][1].length - 1].style.color = "gray";
        }
        //將目前指到的時間反白
        timeText[i][1][num].style.color = 'white';
    }
    //由於秒數時常更新，為了避免延遲造成顯示錯誤，程式每次執行都把secText(秒)全部設定成gray
    for (let i = 0; i < secText.length; i++) {
        timeText[6][1][i].style.color = "gray";
    }
    //將目前指到的秒數反白
    timeText[6][1][nowTime[6]].style.color = 'white';

    //圓心定位
    let widthCenter = document.body.clientWidth / 2;
    let heightCenter = document.body.clientHeight / 2;
    for (let i = 0; i < timeText.length; i++) {
        for (let j = 0; j < timeText[i][0].length; j++) {
            let h = 20;
            //為了讓不同長度的字串不佔用多餘的空間，所以手動設定寬度
            switch (i) {
                case 0: h = 32; break;//month
                case 1: h = 18; break;//day - 1
                case 2: h = 15; break;//week
                case 3: h = 13; break;//noon
                case 4: h = 9; break;//hour
                case 5: h = 8; break;//min
                case 6: h = 10; break;//sec
            }
            //計算半徑
            let r = (i + 1) * h + 40 * i;
            //計算角度
            let angle = 360 / timeText[i][1].length * (j - nowTime[i]);
            //計算元素座標
            let x = widthCenter + r * Math.sin(angle * Math.PI / 180);
            let y = heightCenter - r * Math.cos(angle * Math.PI / 180);
            //對指定標籤進行設定
            let label = timeText[i][1][j];
            //將label以圓心為原點逆時針旋轉90°
            label.style.transform = 'rotate(' + (-90 + angle) + 'deg)';
            //移動label到下一個地點
            label.style.left = x + 'px';
            label.style.top = y + 'px';
        }
    }
}
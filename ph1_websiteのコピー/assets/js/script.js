// // "Hello World" を出力する
// console.log("Hello World!");

// //演習1
// console.log("こんにちは");
// console.log("I am learning JavaScript");

// // 足し算
// console.log(5 + 2);
// // 掛け算
// console.log(6 * 2);
// // 割り算
// console.log(12 / 3);

// //演習2
// console.log(5 * 7);
// console.log("2 + 5");

// // let variable = "代入する値";
// // // 変数の内容を出力
// // console.log(variable)

// // 変数を用いないコード
// console.log("こんにちは！POSSE1期生です。")
// console.log("こんにちは！POSSE2期生です。")
// console.log("こんにちは！POSSE3期生です。")

// // 変数を用いたコード
// let hello = "こんにちは！"
// console.log(hello + "POSSE1期生です。")
// console.log(hello + "POSSE2期生です。")
// console.log(hello + "POSSE3期生です。")

// // //演習3
// // let variable = "POSSE";
// // console.log(variable)

// let variable = "代入する値";
// console.log(variable);
// // 変更するとき let　は必要ありません
// variable = "更新しました";
// console.log(variable);

// //関数
// // const hello = function() {
// //     // まとめる処理
// //     console.log('処理1');
// //     console.log('処理2');
// // }
// // 例1
// function 関数名() {
//     // まとめる処理
//     console.log('処理1');
//     console.log('処理2');
// }
// //   // 例2
// //   const hello = () => {
// //     // まとめる処理
// //     console.log('処理1');
// //     console.log('処理2');
// //   }

// //演習4
// const introduce = function() {
//     console.log("こんにちは！");
//     console.log("POSSE太郎です！");
// }

// introduce();

// const introduce1 = function(username) {
//     const message = "こんにちは！" + username + "です！"
//     console.log(message);
// }

// introduce1("POSSE次郎");

// //演習5
// const calculateTotalPrice = function(price, quantity) {
//     const totalprice = price * quantity
//     console.log(totalprice)
// }

// calculateTotalPrice(200,3);

// // const number = 15;

// // // もし number が 10 より大きければ、"大きいです"と出力
// // if (number > 10) {
// //     console.log("大きいです");
// // // それ以外の場合、"小さいです" と出力
// // } else {
// //     console.log("小さいです")
// // }

// //演習6
// const user = "ポッセ太郎";

// if (user == "ポッセ太郎"){
//     console.log("正解です!")
// } else if (user == "ポッセ次郎"){
//     console.log("いまいちです!")
// } else {
//     console.log("不正解です!")
// }


// for (let number = 1; number <= 10; number ++) {
//     console.log(number);
// }

// //演習7
// for (let number = 5; number <= 15; number ++) {
//     console.log(number);
// }

//week10
// let about = document.getElementById('about');
// console.log(about);

// let title = document.getElementsByClassName('title_eng');
// console.log(title[1].innerHTML);

// let title = document.querySelector('.title_eng').innerHTML;
// console.log(title);

// let title = document.querySelectorAll('.title_eng');
// console.log(title[1].innerHTML);

//演習1
// let title = document.querySelector('.title_eng');
// title.innerHTML = 'About Edited';

// // <p> 要素を生成
// var p = document.createElement('p'); 
// // 中身のテキストを'こんにちは'に設定
// p.innerHTML = 'こんにちは';
// // 追加する場所.appendChild(追加する要素)
// document.body.appendChild(p);

// const hello = function() {
//     console.log('こんにちは');
// }

// const btn = document.getElementById('btn');

// btn.onclick = function() {
// console.log('実行できています。');
// }

//演習2
// const hello = function() {
//     console.log('こんにちは');
// }

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
//     console.log('こんにちは');
// })

//演習3
// const hello = function() {
//     console.log('こんにちは');
// }

// const btn = document.getElementById('js-headerButton');
// btn.addEventListener('click', hello);

// Posse Website
const header = document.getElementById("js_header");
const button = document.getElementById("js_headerButton");

button.addEventListener("click", () => {
    header.classList.toggle("is-open");
});

const mainVisual = document.getElementById("js-mainvisual");

window.addEventListener("scroll", () => {
    if (window.scrollY > mainVisual.clientHeight - header.clientHeight) {
    header.classList.remove("is-transparent");
} else {
    header.classList.add("is-transparent");
}
});

new Splide('#js-eventSlide').mount();

const eventSlideOptions = {
    type: 'loop',
    gap: '40px' ,
    fixedWidth: '320px' ,
    perPage: '3',
    padding: { left: 28, right: 28 } ,
    breakpoints: {
        768: {
            perPage: 1, 
        },
    },
    pagination: {
        pc: false,
        smartphone: true,
    }
}

new Splide('#js-eventSlide', eventSlideOptions).mount();

new Splide('#js-dailySlide').mount();

const dailySlideOptions = {
    type: 'loop',
    gap: '40px' ,
    fixedWidth: '320px' ,
    perPage: '3',
    padding: { left: 28, right: 28 } ,
    breakpoints: {
        768: {
            perPage: 1, 
        },
    },
    pagination: {
        pc: false,
        smartphone: true,
    }
}

new Splide('#js-dailySlide', eventSlideOptions).mount();


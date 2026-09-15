const name = "Ryoto";
let mood = "早起き最高";
let mrecord = 3;
console.log(name);
console.log(mood);
console.log(mrecord);
if (mood === "早起き最高") {
    console.log(name + "さんは絶好調です");
} else {
}
if (mrecord === 0) {
    console.log(name + "さんは今日から早起きチャレンジを始めます");
} else if (mrecord === 1) {
    console.log(name + "さんは初めの一歩を踏み出しました");
} else if (mrecord >= 2) {
    console.log(name + "さんはON FIREです！！！");
}
let sum = 0;
for (let i = 1; i <= 100; i++) {
   sum = sum + i;
}
console.log(sum);
const skills = ["HTML・CSS基礎学習", "GIT（学習予定）", "ポートフォリオ作成"];
for (let i = 0; i < 3; i++) {
    console.log(skills[i] + "を学習中");
}
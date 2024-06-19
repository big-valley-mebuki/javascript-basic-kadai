// btnとtextというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text =document.getElementById('text');

 
// HTML要素がクリックしてから2秒後にイベント処理を実行する
btn.addEventListener('click', () => {
    setTimeout(() => {
        console.log('2秒後にボタンをクリックしました');
        text.textContent = 'ボタンをクリックしました';
      }, 2000);
    console.log('ボタンをクリックしました');  
});
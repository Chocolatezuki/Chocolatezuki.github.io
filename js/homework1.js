function hello(language) {

    let message = '';
    if (language === 1) {
        message = '不正解です。';
    } else if (language === 2) {
        message = '不正解です。';
    } else if (language === 3) {
        message = '正解です！！いってみてね';
    } else if (language === 4) {
        message = '不正解です。';
    }else {
        message = '想定されていない引数です。';
    }
    console.log(message);
    const a = document.querySelector('#hello');
    a.textContent = message;
}

console.log('jquery-test.jsを読み込みました');

// アニメーション（メソッドチェーンをふくむ）
$('photo/choco.jpg').animate({
    'fontSize': '64px',
}).animate({
    'fontSize': '16px'
})
function hello(language) {

    let message = '';
    if (language === 1) {
        message = '不正解です。';
    } else if (language === 2) {
        message = '正解です！！大当たり！';
    } else if (language === 3) {
        message = '不正解です。';
    } else if (language === 4) {
        message = '不正解です。';
    }else {
        message = '想定されていない引数です。';
    }
    console.log(message);
    const a = document.querySelector('#hello');
    a.textContent = message;
}
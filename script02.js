const fusumaLeft = document.getElementById('fusuma-left');
const fusumaRight = document.getElementById('fusuma-right');
const room = document.querySelector('.room');

document.addEventListener('click', () => {
    fusumaLeft.style.transform = 'translateX(-100%)'; // 左側の襖を開くアニメーション
    fusumaRight.style.transform = 'translateX(100%)'; // 右側の襖を開くアニメーション

    setTimeout(() => {
        room.style.backgroundImage = "url('loading.gif')"; // 新しい背景画像を設定
    }, 1000); // アニメーション時間と同じ時間を指定 (1000ミリ秒 = 1秒)

    setTimeout(() => {
        window.location.href = 'home.html'; // アニメーションが終了したら指定のページに遷移
    }, 5500); // アニメーション時間の2倍の時間を指定
});

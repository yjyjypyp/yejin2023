window.addEventListener('DOMContentLoaded', function () {
            var userAgent = navigator.userAgent.toLowerCase();
            var isChrome = /chrome/.test(userAgent);
            var isSafari = /safari/.test(userAgent) && !isChrome;

            if (isChrome) {
                // 크롬에서 사용할 폰트
                document.body.style.fontFamily = "'Junction', sans-serif";
            } else if (isSafari) {
                // 사파리에서 사용할 폰트
                document.body.style.fontFamily = "'PT Sans', sans-serif";
            }
        });// JavaScript Document
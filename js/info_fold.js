// 페이지 로드 시 초기화 함수 실행
        window.addEventListener('DOMContentLoaded', function () {
            var showLink = document.getElementById('show');
            var closeLink = document.getElementById('close'); // close 토글 링크
            var hideDiv = document.getElementById('hide');
            
            // 토글 상태 변수
            var isOpen = false;

            // 토글 함수
            function toggleText() {
                if (isOpen) {
                    hideDiv.style.display = 'none';
                    showLink.style.display = 'block'; // "READ PROJECT DESCRIPTION" 표시
                    closeLink.style.display = 'none'; // "CLOSE" 숨김
                    isOpen = false;
                } else {
                    hideDiv.style.display = '';
                    showLink.style.display = 'none'; // "READ PROJECT DESCRIPTION" 숨김
                    closeLink.style.display = 'block'; // "CLOSE" 표시
                    isOpen = true;
                }
            }

            // 초기화 함수
            function initializeToggle() {
                hideDiv.style.display = 'none'; // 페이지 로드 시 텍스트를 감추기 위해 추가
                showLink.addEventListener('click', toggleText);
                closeLink.addEventListener('click', toggleText); // close 토글을 클릭하여도 닫힘
            }

            initializeToggle();
        });
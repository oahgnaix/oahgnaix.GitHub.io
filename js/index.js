let index = 1;

// �Զ��л�ͼƬ����
function auto_img() {
    if (index === 7) {
        index = 0;
    }
    // ��ȡͼƬ����ͨ��classѡ�����ķ�ʽ��ȡ��
    let img = document.querySelector(".auto_img");
    // ���
    img.style.background = "url(../img/img" + (++index) + ".jpg)";
    img.style.backgroundSize = "100% 100%";
}

// ���� ����auto_img������ �����4000ms��
setInterval(auto_img, 4000);
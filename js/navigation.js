/**
 *  JavaScript����༭���� >
 *      1. Ҫ��JavaScript����? > �����li�������� �������������������Ӧcontent����? �������������ٲŻᵽ��Ӧ�Ĳ���չʾ�� > �������������Ƕ���? > ��Ӧ��content����Ԫ�ض�����ҳ�涥��֮�����
 *      2. ֪�����li����һ�� > ��Ӧ��content��������
 *
 *       $('li') => ҳ��������li
 *       click() => ������li��һ������¼� > ���Ԫ��֮��Ҫ����
 * ��
 *       $(this) => ��������ĵ�ǰԪ��
 *       eq => �ҵ���Ӧ�ڼ���itemԪ��
 */
$('.nav_up li').click(function () {
    // ���li֮��Ҫ�������� $(this)
    var index = $(this).index(); // ��ȡ�����li���±� �ڼ������������
    var height = $('h2').eq(index).offset().top; // ��ȡ��� li Ԫ�ض���content������ҳ�涥��֮�����
    // alert(height)
    $('html, body').animate({
        scrollTop: height + 'px'
    }) // �Զ����ķ�ʽ�޸�����������߶� scrollTop
})

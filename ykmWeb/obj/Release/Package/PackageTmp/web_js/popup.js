﻿var popup_ctrl = function () {
    var postdata = function (url, d) {
        var index = layer.open({ content: '加载中', skin: 'msg', icon: 16, time: 0, shade: 0.4 });
        $.ajax({
            type: "POST",
            url: url,
            data: d,
            contentType: "application/x-www-form-urlencoded",
            success: function (rdata) {
                layer.close(index);
                var data = JSON.parse(rdata)
                layer.open({
                    type: 1,
                    title: data.title,
                    shadeClose: true,
                    shade: 0.5,
                    area: ['50%', ''],
                    content: "<div style=\"padding:5%;\">"+data.cont + "<a href=\"javascript:parent.layer.closeAll();\" style=\"position:fixed;top:0;right:0;color:#000;\">[关闭]</a></div>"
                    , anim: 'up'
                    , style: 'overflow-y:auto;position:fixed; left:0; top:0; width:100%; height:100%; border: none; -webkit-animation-duration: .5s; animation-duration: .5s;'
                });
            }
        });
    }

    $(document).ready(function () {
        $(".popup-box").click(function () {
            var url = "/page/popup";
            var id = $(this).data("id");
            if (id == "") {
                layer.alert("没有选择到任何内容")
                return;
            }
            postdata(url, { id: id });
        });
    });
}
popup_ctrl();
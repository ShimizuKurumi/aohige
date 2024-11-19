$(function () {
    var isDown = true;
    var isLeft = true;

    var lowLimit = 3;
    var highLimit = 6;

    // Adjust speed of H and V (for random feeling)
    var randHDuration = Math.floor(Math.random() * (highLimit * 6500)) + (lowLimit + 6500);
    var randVDuration = Math.floor(Math.random() * (highLimit * 6500)) + (lowLimit + 6500);

    function hAnimate() {
        if (isLeft) {
            $("#object").animate(
                {
                    left: $(".bounce-wrapper").innerWidth() - $("#object").outerWidth()
                },
                {
                    duration: randHDuration,
                    easing: "linear",
                    queue: false,
                    complete: function () {
                        isLeft = false;
                        hAnimate();
                    }
                }
            );
        } else {
            $("#object").animate(
                {
                    left: 0
                },
                {
                    duration: randHDuration,
                    easing: "linear",
                    queue: false,
                    complete: function () {
                        isLeft = true;
                        hAnimate();
                    }
                }
            );
        }
    }

    function vAnimate() {
        if (isDown) {
            $("#object").animate(
                {
                    top: $(".bounce-wrapper").innerHeight() - $("#object").outerHeight()
                },
                {
                    duration: randVDuration,
                    easing: "linear",
                    queue: false,
                    complete: function () {
                        isDown = false;
                        vAnimate();
                    }
                }
            );
        } else {
            $("#object").animate(
                {
                    top: 0
                },
                {
                    duration: randVDuration,
                    easing: "linear",
                    queue: false,
                    complete: function () {
                        isDown = true;
                        vAnimate();
                    }
                }
            )
        }
    }

    hAnimate();
    vAnimate();
});

// スクロールイベント
window.addEventListener('scroll', () => {
    // visualVerticalImgのid名がつく画像を取得
    const elemImg = document.getElementById('visualVerticalImg');
    //現在のスクロール位置を取得して10で除算
    let imgVerScrollY = window.scrollY / 10;
    //取得したスクロール値でY値をtransform
    elemImg.style.transform = 'translateY(' + 0 + imgVerScrollY + 'px) scale(1.4)';
});

// var rellax = new Rellax('.rellax');

luxy.init({
    wrapper: '#luxy',
    wrapperSpeed: 0.09, // スクロール速度の調整（デフォルト値は0.08）
});


$(function () {

    //カーソル要素の指定
    var cursor = $("#cursor");
    //ちょっと遅れてついてくるストーカー要素の指定
    var stalker = $("#stalker");

    //mousemoveイベントでカーソル要素を移動させる
    $(document).on("mousemove", function (e) {
        //カーソルの座標位置を取得
        var x = e.clientX;
        var y = e.clientY;
        //カーソル要素のcssを書き換える用
        cursor.css({
            "opacity": "1",
            "top": y + "px",
            "left": x + "px"
        });
        //ストーカー要素のcssを書き換える用
        setTimeout(function () {
            stalker.css({
                "opacity": "1",
                "top": y + "px",
                "left": x + "px"
            });
        }, 0);//カーソルより遅れる時間を指定
    });
    //aタグホバー
    $("a").on({
        "mouseenter": function () {
            //activeクラス付与
            cursor.addClass("active");
            stalker.addClass("active");
        },
        "mouseleave": function () {
            cursor.removeClass("active");
            stalker.removeClass("active");

        }
    });
});

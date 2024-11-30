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
    $(".c-button--ticket").on({
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

$(function () {
    $('.acChild').css("display", "none");
    $('.acParentTuke').on('click', function () {
        $(this).next().slideToggle();
        $(".arrowClick").toggleClass("active");
    })
});

$(function () {
    $('.acChild').css("display", "none");
    $('.acParentDone').on('click', function () {
        $(this).next().slideToggle();
        $(".arrowClick2").toggleClass("active2");
    })
});

// 着火点となる要素
const headings = document.querySelectorAll('.target');

const options = {
    threshold: 1,
};

// 実行するよ
const observer = new IntersectionObserver(showElements);

// 各 .heading に到達したら発動。複数あるから forEach 使うよ。
headings.forEach(heading => {
    observer.observe(heading);
});

// 要素が表示されたら実行する動作
function showElements(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 各 .heading に .active を加える
            entry.target.classList.add('active');
        }
    });
};

document.querySelectorAll('.c-button--ticket a').addEventListener('mouseover', function () {
    //任意の処理
    $('#stalker').addClass('active');

});

document.querySelectorAll('.c-button--ticket a').addEventListener('click', function () {
    //任意の処理
    $('#stalker').removeClass('active');
});


// マウスが要素を離れた時
document.querySelector('.c-button--ticket a').addEventListener('mouseleave', function () {
    //任意の処理
    $('#stalker').css('transform', 'scale(0)');
});

const ham = $('.l-hamburger');
const nav = $('.l-nav__wrapper--mobile');

ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し

});



$(function () {
    $(".c-button--tukebarai").on("click", function () {
        $(this).next().slideToggle();
        $(this).toggleClass("active");//追加部分
        $(".c-button--means__contents--tukabarai").toggleClass("active");//追加部分
    });
});

$(function () {
    $(".c-button--donetike").on("click", function () {
        $(this).next().slideToggle();
        $(this).toggleClass("active");//追加部分
        $(".c-button--means__contents--donetike").toggleClass("active");//追加部分
    });
});

$(function () {
    $('a[href^="#"]').click(function () {//href属性に#を含むaタグをクリックした時
        var href = $(this).attr("href");//クリックした要素のhref属性を取得
        var target = $(href == "#" || href == "" ? 'html' : href);//リンク先を取得
        var position = target.offset().top - 50;//リンク先までの距離を取得
        $("html, body").animate({ scrollTop: position }, 300);//スムーススクロール
        return false;
    });
});

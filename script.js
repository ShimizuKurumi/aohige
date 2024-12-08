

$(document).ready(function () {
    if ($(window).width() > 1024) { //768px未満の時
        luxy.init({
            wrapper: '#luxy',
            wrapperSpeed: 0.09, // スクロール速度の調整（デフォルト値は0.08）
        });
    };
});


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


// var rellax = new Rellax('.rellax', {
//     center: true
// });


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


$(document).ready(function () {
    // ホバーさせたい要素のセレクタを指定
    $('.c-button--ticket a').hover(
        function () {
            // マウスが乗った時の処理
            $('#stalker').addClass('active');
        },
        function () {
            // マウスが離れた時の処理
            $('#stalker').removeClass('active');
        }
    );

    $('.c-button--ticket a').click(
        function () {
            // マウスが乗った時の処理
            $('#stalker').removeClass('active');
        },
    );

});

$(document).ready(function () {
    // タッチされた要素のCSSを変更
    $(".mouse-over").on("touchstart", function () {
        $('.p-firstview__main_visual--2').toggleClass('active');
    });
});



const ham = $('.l-hamburger');
const nav = $('.l-nav__wrapper--mobile');
const aTag = $('.l-nav__link');

ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});

aTag.on('click', function () {
    ham.removeClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.removeClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
})


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


// //テキストのカウントアップの設定
// var bar = new ProgressBar.Line(loading__text, {//id名を指定
//     strokeWidth: 0,//進捗ゲージの太さ
//     duration: 1000,//時間指定(1000＝1秒)
//     trailWidth: 0,//線の太さ
//     text: {//テキストの形状を直接指定
//         style: {
//             position: 'absolute',
//             left: '50%',
//             top: '54%',
//             margin: '0',
//             transform: 'translate(-50%,-50%)',
//             'font-family': 'serif',
//             'font-size': '1.5rem',
//             color: '#fff',
//         },
//         autoStyleContainer: false //自動付与のスタイルを切る
//     },
//     step: function (state, bar) {
//         bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
//     }
// });

// bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画
//     $(".loading").delay(500).fadeOut(800);//アニメーションが終わったら#loadingをフェードアウト
//     $(".loading").css('display', 'block');

// });



// $(document).ready(function () {
//     // ローカルストレージから表示済みか否かの情報を読み込む
//     var isLoaded = localStorage.getItem('isLoaded');

//     // 初回アクセス時のみローディング画面を表示
//     if (!isLoaded) {
//         bar.animate(1.0, function () {
//             $(".loading").delay(0).fadeOut(500);
//             $(".loading").css('display', 'block');

//             // ローカルストレージに表示済み情報を保存
//             localStorage.setItem('isLoaded', true);
//         });
//     }
// });

$(function () {
    var countElm = $('.count'),
        countSpeed = 10;

    countElm.each(function () {
        var self = $(this),
            countMax = self.attr('data-num'),
            thisCount = self.text(),
            countTimer;

        function timer() {
            countTimer = setInterval(function () {
                var countNext = thisCount++;
                self.text(countNext);

                if (countNext == countMax) {
                    clearInterval(countTimer);
                }
            }, countSpeed);
        }
        timer();
    });

});

// セッションストレージからフラグを取得
const isFirstLoad = sessionStorage.getItem('isFirstLoad');

// ページの読み込みが完了したときに実行される関数
window.addEventListener('load', function () {
    // フラグがない場合（初回アクセス時）
    if (!isFirstLoad) {
        // 初回アクセス時の処理を記述
        // 例: ローディング画面の表示、セッションストレージへのフラグの保存など
        console.log('初回アクセスです');

        // セッションストレージにフラグを保存
        sessionStorage.setItem('isFirstLoad', true);
    } else {
        // 2回目以降のアクセス時の処理を記述
        console.log('2回目以降のアクセスです');
        $('.loading').css('display', 'none');

    }
});
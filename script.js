$(function(){
  
  //ドロワー
  $(document).ready(function() {
    $('.drawer').drawer();
  });

  //wow
  new WOW().init();

  //リンク設定
  $('a[href^="#"]').click(function() {
    let header = $(".header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });

  //header背景色変更
  $(window).on('scroll', function () {
    if (780 < $(this).scrollTop()) {
        $('.header').addClass('change_color');
    } else {
        $('.header').removeClass('change_color');
    }
  });

  //google form
  let $form = $('#js-form')
  $form.submit(function(e) { 
    $.ajax({ 
    url: $form.attr('action'), 
    data: $form.serialize(), 
    type: "POST", 
    dataType: "xml", 
    statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $('#js-error').slideDown()
        }
      } 
    });
    return false; 
  }); 

  
  //formの入力確認
  let $submit = $('#js-submit')
  $('#js-form input, #js-form textarea').on('change', function(){
      if(
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form textarea').val() !== ""
      ){
        //すべて入力済みのとき、押せる
        $submit.prop('disabled', false)
        $submit.addClass('-active')
      } else {
        //未入力があるとき、押せない
        $submit.prop('disabled', true)
        $submit.removeClass('-active')
      }
  })
  
  //トップに戻る
  $(function(){
    var pagetop = $('#page-top');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
  });

});
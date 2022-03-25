$(document).ready(function(){

// -----Initialize
  // AOS option
  AOS.init({
    duration: 400,
    easing: 'ease'
  })
  // Materialize option
  $('.button-collapse').sideNav()
  $('.modal').modal({
    startingTop: '0%',
    endingTop: '5%',
    preventScrolling:false
  })

// -----Scroll to hogehoge
  $('a[href*=\\#about-this-site]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#about-me]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#profile]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#skills]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#projects]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#services]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  $('a[href*=\\#contact]').click(function(event){
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
  })
  // Scroll to top
  $('.scroll-to-top-btn').click(function(event){
    event.preventDefault()
    $('html, body').animate({scrollTop : 0},1000)
    return false
  })
  $('.scroll-to-top-li').click(function(event){
    event.preventDefault()
    $('html, body').animate({scrollTop : 0},1000)
    return false
  })

// -----Add sequence number to modal content
  var modalContents = $('#projects div .modal')
  var modalTriggers = $('#projects a.modal-trigger')
  for (var i = 0; i < modalContents.length; i++) {
    $(modalContents[i]).attr('id', 'modal' + i)
    $(modalTriggers[i]).removeAttr('href')
    $(modalTriggers[i]).attr('href', '#modal' + i)
    var remainder = i % 3
    switch (remainder) {
      case 0:
        $(modalTriggers[i]).parent().attr('data-aos-duration', 500)
        break;
      case 1:
        $(modalTriggers[i]).parent().attr('data-aos-duration', 700)
        break;
      case 2:
        $(modalTriggers[i]).parent().attr('data-aos-duration', 900)
        break;
    }
  }





// -----LED
  $( function() {
    var rgbValue = 0
    $( '#color-switch .btn' ).click(function() {
      if ( $(this).hasClass('on') ) {
        $(this).removeClass('on')
      }
      else {
        $(this).addClass('on')
      }
      if ( $('#led-btn-red').hasClass('on') ) {
        rgbValue = rgbValue + 4
      }
      if ( $('#led-btn-green').hasClass('on') ) {
        rgbValue = rgbValue + 2
      }
      if ( $('#led-btn-blue').hasClass('on') ) {
        rgbValue = rgbValue + 1
      }
      $( 'nav' ).removeClass (function (index, css) {
        return (css.match (/.*-nav/g) || []).join(' ');
      })
      $( '.input-field input').removeClass (function (index, css) {
        return (css.match (/.*-input/g) || []).join(' ');
      })
      $( '.input-field label').removeClass (function (index, css) {
        return (css.match (/.*-input/g) || []).join(' ');
      })
      $( '.input-field textarea').removeClass (function (index, css) {
        return (css.match (/ .*-input/g) || []).join(' ');
      })
      colorSet = setColor(rgbValue)
      changeColorAnimation(colorSet)
      rgbValue = 0;
    })
  })

  function setColor(rgbValue) {
    var color
    var colorLignt
    var colorDark
    switch (rgbValue) {
      case 0:// black
      color = 'black'
      colorLight = '#9e9e9e'
      colorDark = '#616161'
      break;
      case 1:// blue
      color = 'blue'
      colorLight = '#90caf9'
      colorDark = '#64b5f6'
      break;
      case 2:// green
      color = 'green'
      colorLight = '#79c6b6'
      colorDark = '#009688'
      break;
      case 3:// cyan
      color = 'cyan'
      colorLight = '#80deea'
      colorDark = '#00bcd4'
      break;
      case 4:// red
      color = 'red'
      colorLight = '#ed929f'
      colorDark = '#e57373'
      break;
      case 5:// parple
      color = 'parple'
      colorLight = '#ce93d8'
      colorDark = '#ba68c8'
      break;
      case 6:// yellow
      color = 'yellow'
      colorLight = '#ffc35d'
      colorDark = '#ff9800'
      break;
      case 7:// white
      color = 'white'
      colorLight = '#eeeeee'
      colorDark = '#bdbdbd'
      break;
    }
    var colorSet = color + ',' + colorLight + ',' + colorDark
    return colorSet
  }

  function changeColorAnimation(colorSet) {
    colorSet = colorSet.split(',')
    $( '.led' ).animate({
      backgroundColor: colorSet[1]
    }, 1000 )
    $( '.led-color-of-icon' ).animate({
      color: colorSet[2]
    }, 1000 )
    $( '.led-color-of-btn' ).animate({
      backgroundColor: colorSet[2]
    }, 1000 )
    $( '.led-color-of-footer' ).animate({
      backgroundColor: colorSet[2]
    }, 1000 )
    $( 'nav' ).addClass(colorSet[0] + '-nav')
    $( '.input-field input').addClass(colorSet[0] + '-input')
    $( '.input-field label').addClass(colorSet[0] + '-input')
    $( '.input-field textarea').addClass(colorSet[0] + '-input')
  }
})

function custom(){
  AOS.init({
    duration: 400,
    easing: 'ease'
  })
    // Materialize option
    $('.button-collapse').sideNav()
    $('.modal').modal({
      startingTop: '0%',
      endingTop: '5%'
    })
  // -----Add the closing modal button
  $('.modal').append('<div class="close-button"><a href="#!" class="btn-floating waves-effect waves-light"><i class="material-icons">close</i></a></div>')

  // -----Close modal window
  $('.modal .close-button').click(function(event){
    event.preventDefault()
    var $targetModal = $(this).closest("[id^=modal]").attr('id')
    $('#' + $targetModal).modal('close')
  })
  // -----Change image when clicking thumbnails
  $('.thumbnails img').click(function(){
    var $thisModalId = $(this).closest("[id^=modal]").attr('id')
    var $thisImg = $(this).attr('src')
    var $thisAlt = $(this).attr('alt')
    $('#' + $thisModalId + ' .mainImage img').attr({src:$thisImg, alt:$thisAlt})
    if ($(this).hasClass('z-depth-2')) {
      $('#' + $thisModalId + ' .thumbnails img').not('.z-depth-2').addClass('z-depth-2')
      $(this).removeClass('z-depth-2')
    }
  })


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // materialize.jsのセレクトボックス用
  $(function() {
    $(document).ready(function() {
      $('select').material_select();
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // materialize.jsのナビトリガー用
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
  $(function() {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
  });

  //画像スライド用
  const swiper = new Swiper(".swiper", {
    autoplay: {  //自動再生を有効に
      delay: 2000,
    },
    // ページネーションが必要なら追加
    pagination: {
      el: ".swiper-pagination"
    },
    //ループモード
    loop: true, 
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {  
      reachEnd: function () {  //reachEnd イベントに以下を登録
        this.autoplay.stop();  //自動再生を停止
        // または自動再生を解除  this.autoplay = false; 
      },
    },
  });

  //金額計算
  const nowCostText = document.getElementById("nowCost");
  var sizeCost = document.getElementsByClassName('sizeCost');
  for (var i=0; i < sizeCost.length; i++) {
    sizeCost[i].addEventListener('click', function() {
      // thisはsizeCost[i]にあたる
      // this.remove();
      // sizeCost[i].style.backgroundColor = 'write';
      this.classList.add('myChoice');//色を塗る
      nowCostText.innerText = this.innerText + '(税込み)'; //合計金額の更新
      removeElseChoice(this); //他の色を消す
    });
  };
  function removeElseChoice(nowSelect){
    console.log(nowSelect.innerText);
    for (var i=0;i < sizeCost.length;i++){
      if(sizeCost[i].innerText != nowSelect.innerText){
        sizeCost[i].classList.remove('myChoice');
      }
    }
  }

  //mixi
  window.addEventListener('resize', function(){
    mixi_icon_getHeight();
  });
  function mixi_icon_getHeight(){
    var mixi_icons =  document.getElementsByClassName('mixi_icon');
    for (let i = 0; i < mixi_icons.length; i++){
      mixi_icons[i].style.height = mixi_icons[i].clientWidth + 'px';
    }
  }

  //Meterialize.jsのtooltip
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
}
//ローディングエリアを取得
var loading = $("#loading");
//ローディングエリアを隠す処理
var isHidden = function(){
  loading.fadeOut(1000); //1000ミリ秒かけてフェードアウト
};
//1000ミリ秒後にloadingFunc開始
setTimeout(isHidden,100);
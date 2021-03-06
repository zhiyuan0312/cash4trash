$(document).on('ready page:change',function(){
  if ($(".home-page").length === 0){
    // $(document).unbind("scroll");
    return
  }
  //jQuery to collapse the navbar on scroll
  $(document).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });


  //jQuery for page scrolling feature - requires jQuery Easing plugin

  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });

  //jQuery for text carousel
  $("#js-rotating").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "zoomIn",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: "/",
      // The delay between the changing of each phrase in milliseconds.
      speed: 3500,
      complete: function () {
          // Called after the entrance animation is executed.
      }
  });

  //scrollify for section snapping scrolling feature

  $.scrollify({
    section : "section",
    sectionName : "section-name",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    before:function() {},
    after:function() {},
    afterResize:function() {}
  });

  //Modal for logins
  $('#renew-password-link1').click(function(){
    $('#loginModal').modal('hide');
    setTimeout(function(){
      $('#renew-passwordModal').modal('show');
    }, 100);
  });

  $('#renew-password-link2').click(function(){
    $('#signupModal').modal('hide');
    setTimeout(function(){
      $('#renew-passwordModal').modal('show');
    }, 100);
  });

  $('#sign-in-link1').click(function(){
    $('#signupModal').modal('hide');
    setTimeout(function(){
      $('#loginModal').modal('show');
    }, 100);
  });

  $('#sign-up-link1').click(function(){
    $('#loginModal').modal('hide');
    setTimeout(function(){
      $('#signupModal').modal('show');
    }, 100);
  });

});

//scrollify min js here
!function(e,t,n,o){"use strict";function i(n,o){return H===!0?!0:void(f[n]&&(S.before(n,p),v=1,S.sectionName&&(t.location.hash=f[n]),o?(e(S.target).stop().scrollTop(d[n]),S.after(n,p)):(e(S.target).stop().animate({scrollTop:d[n]},S.scrollSpeed,S.easing),e(S.target).promise().done(function(){M=!1,S.after(n,p)}))))}function s(e){if(4>e)return!1;var t,n=20,o=0,i=e.length-1;for(e.length<2*n&&(n=Math.floor(e.length/2)),t=e.length-n;i>=t;i--)o+=e[i];var s=o/n;for(o=0,i=e.length-n-1,t=e.length-2*n;i>=t;i--)o+=e[i];var c=o/n;return s>=c?!0:!1}function c(e,t){for(var n=f.length;n>=0;n--)"string"==typeof e?f[n]===e&&(m=n,i(n,t)):n===e&&(m=n,i(n,t))}var u,r,a,h,l,d=[],f=[],p=[],g=[],m=0,v=1,y=(t.location.hash,!1),b=e(t).scrollTop(),w=!1,M=!1,T=!1,H=!1,D=[],E=(new Date).getTime(),S={section:"section",sectionName:"section-name",easing:"easeOutExpo",scrollSpeed:1100,offset:0,scrollbars:!0,axis:"y",target:"html,body",before:function(){},after:function(){},afterResize:function(){}};e.scrollify=function(o){function c(t){e(S.target).stop().animate({scrollTop:t},S.scrollSpeed,S.easing)}function N(){e(S.section).each(function(n){e(this).css("height","auto").outerHeight()<e(t).height()?(e(this).css({height:e(t).height()}),g[n]=!1):(e(this).css({height:e(this).height()}),g[n]=!0)})}function z(n){e(S.section).each(function(n){d[n]=n>0?parseInt(e(this).offset().top)+S.offset:parseInt(e(this).offset().top),f[n]=S.sectionName&&e(this).data(S.sectionName)?"#"+e(this).data(S.sectionName).replace(/ /g,"-"):"#"+(n+1),p[n]=e(this),t.location.hash===f[n]&&(m=n,y=!0)}),!0===n&&i(m,!1)}function L(){return b=e(t).scrollTop(),b>parseInt(d[m])?!1:!0}function k(){return b=e(t).scrollTop(),b<parseInt(d[m])+(p[m].height()-e(t).height())?!1:!0}e.easing.easeOutExpo=function(e,t,n,o,i){return t==i?n+o:o*(-Math.pow(2,-10*t/i)+1)+n},a={handleMousedown:function(){return H===!0?!0:(w=!1,void(T=!1))},handleMouseup:function(){return H===!0?!0:(w=!0,void(T&&a.calculateNearest()))},handleScroll:function(){return H===!0?!0:(u&&clearTimeout(u),void(u=setTimeout(function(){return T=!0,w===!1?!1:(w=!1,void a.calculateNearest())},200)))},calculateNearest:function(){b=e(t).scrollTop();for(var n,o=1,s=d.length,c=0,u=Math.abs(d[0]-b);s>o;o++)n=Math.abs(d[o]-b),u>n&&(u=n,c=o);(k()||L())&&(m=c,i(c,!1))},wheelHandler:function(e,t){if(H===!0)return!0;g[m]||e.preventDefault();var n=(new Date).getTime();if(t=t||-e.originalEvent.detail/3||e.originalEvent.wheelDelta/120,n-E>1300&&(D=[]),E=n,D.length>=35&&D.shift(),D.push(Math.abs(10*t)),M)return!1;if(0>t){if(m<d.length-1&&k()){if(!s(D))return!1;e.preventDefault(),m++,M=!0,i(m,!1)}}else if(t>0&&m>0&&L()){if(!s(D))return!1;e.preventDefault(),m--,M=!0,i(m,!1)}},keyHandler:function(e){return H===!0?!0:void(38==e.keyCode?m>0&&L()&&(m--,i(m,!1)):40==e.keyCode&&m<d.length-1&&k()&&(m++,i(m,!1)))},init:function(){S.scrollbars?(e(t).bind("mousedown",a.handleMousedown),e(t).bind("mouseup",a.handleMouseup),e(t).bind("scroll",a.handleScroll)):e("body").css({overflow:"hidden"}),e(n).bind("DOMMouseScroll mousewheel",a.wheelHandler),e(n).bind("keydown",a.keyHandler)}},h={touches:{touchstart:{y:-1},touchmove:{y:-1},touchend:!1,direction:"undetermined"},options:{distance:30,timeGap:800,timeStamp:(new Date).getTime()},touchHandler:function(e){if(H===!0)return!0;var t;if("undefined"!=typeof e&&"undefined"!=typeof e.touches)switch(t=e.touches[0],e.type){case"touchstart":h.touches.touchstart.y=t.pageY,h.touches.touchmove.y=-1,h.options.timeStamp=(new Date).getTime(),h.touches.touchend=!1;case"touchmove":h.touches.touchmove.y=t.pageY,h.touches.touchstart.y!==h.touches.touchmove.y&&(e.preventDefault(),h.options.timeStamp+h.options.timeGap<(new Date).getTime()&&0==h.touches.touchend&&(h.touches.touchend=!0,h.touches.touchstart.y>-1&&Math.abs(h.touches.touchmove.y-h.touches.touchstart.y)>h.options.distance&&(h.touches.touchstart.y<h.touches.touchmove.y?h.up():h.down())));break;case"touchend":h.touches[e.type]===!1&&(h.touches[e.type]=!0,h.touches.touchstart.y>-1&&h.touches.touchmove.y>-1&&(Math.abs(h.touches.touchmove.y-h.touches.touchstart.y)>h.options.distance&&(h.touches.touchstart.y<h.touches.touchmove.y?h.up():h.down()),h.touches.touchstart.y=-1))}},down:function(){m<=d.length-1&&(k()&&m<d.length-1?(m++,i(m,!1)):Math.floor(p[m].height()/e(t).height())>v?(c(parseInt(d[m])+e(t).height()*v),v+=1):c(parseInt(d[m])+(p[m].height()-e(t).height())))},up:function(){m>=0&&(L()&&m>0?(m--,i(m,!1)):v>2?(v-=1,c(parseInt(d[m])+e(t).height()*v)):(v=1,c(parseInt(d[m]))))},init:function(){n.addEventListener&&(n.addEventListener("touchstart",h.touchHandler,!1),n.addEventListener("touchmove",h.touchHandler,!1),n.addEventListener("touchend",h.touchHandler,!1))}},l={handleResize:function(){clearTimeout(r),r=setTimeout(function(){N(),z(!0),S.afterResize()},50)}},S=e.extend(S,o),N(),z(!1),y===!1&&S.sectionName?t.location.hash=f[0]:i(m,!1),a.init(),h.init(),e(t).bind("resize",l.handleResize),t.addEventListener("orientationchange",l.handleResize,!1)},e.scrollify.move=function(e){return e===o?!1:void c(e,!1)},e.scrollify.instantMove=function(e){return e===o?!1:void c(e,!0)},e.scrollify.next=function(){m<f.length&&(m+=1,i(m,!1))},e.scrollify.previous=function(){m>0&&(m-=1,i(m,!1))},e.scrollify.instantNext=function(){m<f.length&&(m+=1,i(m,!0))},e.scrollify.instantPrevious=function(){m>0&&(m-=1,i(m,!0))},e.scrollify.destroy=function(){e(S.section).each(function(){e(this).css("height","auto")}),e(t).unbind("resize",l.handleResize),S.scrollbars&&(e(t).unbind("mousedown",a.handleMousedown),e(t).unbind("mouseup",a.handleMouseup),e(t).unbind("scroll",a.handleScroll)),e(n).unbind("DOMMouseScroll mousewheel",a.wheelHandler),e(n).unbind("keydown",a.keyHandler),n.addEventListener&&(n.removeEventListener("touchstart",h.touchHandler,!1),n.removeEventListener("touchmove",h.touchHandler,!1),n.removeEventListener("touchend",h.touchHandler,!1)),d=[],f=[],p=[],g=[]},e.scrollify.update=function(){l.handleResize()},e.scrollify.current=function(){return p[m]},e.scrollify.disable=function(){H=!0},e.scrollify.enable=function(){H=!1},e.scrollify.isDisabled=function(){return H}}(jQuery,this,document);

//jQuery easing plugin
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

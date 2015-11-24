//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//scrollify for section snapping scrolling feature
$(function() { 
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
}); 


//scrollify min js here
(function(e,t,n,r){"use strict";var i=[],s=[],o=[],u=0,a=t.location.hash,f=false,l,c,h=e(t).scrollTop(),p=false,d={section:"section",sectionName:"section-name",easing:"easeOutExpo",scrollSpeed:1100,offset:0,scrollbars:true,axis:"y",target:"html,body",before:function(){},after:function(){}};e.scrollify=function(r){function a(n){if(s[n]){d.before(n,o);if(d.sectionName){t.location.hash=s[n]}e(d.target).stop().animate({scrollTop:i[n]},d.scrollSpeed,d.easing);e(d.target).promise().done(function(){d.after(n,o)})}}function y(n){e(d.section).each(function(n){if(n>0){i[n]=e(this).offset().top+d.offset}else{i[n]=e(this).offset().top}if(d.sectionName&&e(this).data(d.sectionName)){s[n]="#"+e(this).data(d.sectionName).replace(/ /g,"-")}else{s[n]="#"+(n+1)}o[n]=e(this);if(t.location.hash===s[n]){u=n;f=true}});if(true===n){a(u)}}var v={handleMousedown:function(){p=false},handleMouseup:function(){p=true},handleScroll:function(){if(l){clearTimeout(l)}l=setTimeout(function(){h=e(t).scrollTop();if(p===false){return false}p=false;var n=1,r=i.length,s=0,o=Math.abs(i[0]-h),f;for(;n<r;n++){f=Math.abs(i[n]-h);if(f<o){o=f;s=n}}u=s;a(s)},200)},wheelHandler:function(e,t){e.preventDefault();t=t||-e.originalEvent.detail/3||e.originalEvent.wheelDelta/120;clearTimeout(l);l=setTimeout(function(){if(t<0){if(u<i.length-1){u++}}else if(t>0){if(u>0){u--}}if(u>=0){a(u)}else{u=0}},50)},keyHandler:function(e){e.preventDefault();if(e.keyCode==38){if(u>0){u--}a(u)}else if(e.keyCode==40){if(u<i.length-1){u++}a(u)}},init:function(){if(d.scrollbars){e(t).bind("mousedown",v.handleMousedown);e(t).bind("mouseup",v.handleMouseup);e(t).bind("scroll",v.handleScroll)}else{e("body").css({overflow:"hidden"})}e(n).bind("DOMMouseScroll mousewheel",v.wheelHandler);e(n).bind("keyup",v.keyHandler)}};var m={touches:{touchstart:{y:-1},touchmove:{y:-1},touchend:false,direction:"undetermined"},options:{distance:30,timeGap:800,timeStamp:(new Date).getTime()},touchHandler:function(e){var t;if(typeof e!=="undefined"){if(typeof e.touches!=="undefined"){t=e.touches[0];switch(e.type){case"touchstart":m.touches.touchstart.y=t.pageY;m.touches.touchmove.y=-1;m.options.timeStamp=(new Date).getTime();m.touches.touchend=false;case"touchmove":m.touches.touchmove.y=t.pageY;if(m.touches.touchstart.y!==m.touches.touchmove.y){e.preventDefault();if(m.options.timeStamp+m.options.timeGap<(new Date).getTime()&&m.touches.touchend==false){m.touches.touchend=true;if(m.touches.touchstart.y>-1){if(Math.abs(m.touches.touchmove.y-m.touches.touchstart.y)>m.options.distance){if(m.touches.touchstart.y<m.touches.touchmove.y){if(u>0){u--}a(u)}else{if(u<i.length-1){u++}a(u)}}}}}break;case"touchend":if(m.touches[e.type]===false){m.touches[e.type]=true;if(m.touches.touchstart.y>-1&&m.touches.touchmove.y>-1){if(Math.abs(m.touches.touchmove.y-m.touches.touchstart.y)>m.options.distance){if(m.touches.touchstart.y<m.touches.touchmove.y){if(u>0){u--}a(u)}else{if(u<i.length-1){u++}a(u)}}m.touches.touchstart.y=-1}};default:break}}}},init:function(){if(n.addEventListener){n.addEventListener("touchstart",m.touchHandler,false);n.addEventListener("touchmove",m.touchHandler,false);n.addEventListener("touchend",m.touchHandler,false)}}};if(typeof r==="string"){var g=s.length;for(;g>=0;g--){if(typeof arguments[1]==="string"){if(s[g]==arguments[1]){u=g;a(g)}}else{if(g===arguments[1]){u=g;a(g)}}}}else{d=e.extend(d,r);y(false);if(f===false&&d.sectionName){t.location.hash=s[0]}else{a(u)}v.init();m.init()}e(t).resize(function(){clearTimeout(c);c=setTimeout(function(){y(true)},50)})}})(jQuery,this,document)


//jQuery easing plugin
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
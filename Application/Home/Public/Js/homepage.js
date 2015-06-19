!function(e,t,n){"use strict";t.namespace("Analytics"),t.Analytics.HomePage=n.View.extend({"el":".page__homepage_show","initialize":function(e){e=e||{},this.tracker=new t.Analytics.Tracker({"pageProperties":e.pageProperties}),this.tracker.track("viewed"),this.getStartedCenter(),this.getStartedBottom(),this.homepageVideo(),this.videoLaunchCampaign(),this.featuredCampaign()},"getStartedCenter":function(){this.tracker.trackLink(e("#mainGetStartedBtn"),"get_started_now",{"link_location":"center"})},"getStartedBottom":function(){this.tracker.trackLink(e("#bottomGetStartedBtn"),"get_started_now",{"link_location":"bottom"})},"homepageVideo":function(){this.tracker.trackLink(e("a[href='#youtube-modal']"),"video")},"videoLaunchCampaign":function(){this.tracker.trackLink(e("#videoModalGetStartedBtn"),"video_get_started")},"featuredCampaign":function(){this.tracker.trackLink(this.$(".featured_campaign__image a"),"featured_campaign",function(t){return{"campaign_name":e(t).find("img").first().attr("alt")}}),this.tracker.trackLink(this.$(".featured_campaign__image a"),"featured_campaign",function(t){return{"campaign_name":e(t).text()}})}}),t.Analytics.ready(function(){new t.Analytics.HomePage})}(jQuery,TS,Backbone),function(){"use strict";/**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @version 1.0.6
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */
function e(t,a){function r(e,t){return function(){return e.apply(t,arguments)}}var i;if(a=a||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=a.touchBoundary||10,this.layer=t,this.tapDelay=a.tapDelay||200,this.tapTimeout=a.tapTimeout||700,!e.notNeeded(t)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],s=this,l=0,u=o.length;u>l;l++)s[o[l]]=r(s[o[l]],s);n&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,a){var r=Node.prototype.removeEventListener;"click"===e?r.call(t,e,n.hijacked||n,a):r.call(t,e,n,a)},t.addEventListener=function(e,n,a){var r=Node.prototype.addEventListener;"click"===e?r.call(t,e,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),a):r.call(t,e,n,a)}),"function"==typeof t.onclick&&(i=t.onclick,t.addEventListener("click",function(e){i(e)},!1),t.onclick=null)}}var t=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!t,a=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t,r=a&&/OS 4_\d(_\d)?/.test(navigator.userAgent),i=a&&/OS [6-7]_\d/.test(navigator.userAgent),o=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(a&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},e.prototype.sendClick=function(e,t){var n,a;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),a=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},e.prototype.determineEventType=function(e){return n&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},e.prototype.focus=function(e){var t;a&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},e.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},e.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},e.prototype.onTouchStart=function(e){var t,n,i;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],a){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!r){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n?!0:!1},e.prototype.onTouchMove=function(e){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},e.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},e.prototype.onTouchEnd=function(e){var t,o,s,l,u,c=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,o=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,i&&(u=e.changedTouches[0],c=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||c,c.fastClickScrollParent=this.targetElement.fastClickScrollParent),s=c.tagName.toLowerCase(),"label"===s){if(t=this.findControl(c)){if(this.focus(c),n)return!1;c=t}}else if(this.needsFocus(c))return e.timeStamp-o>100||a&&window.top!==window&&"input"===s?(this.targetElement=null,!1):(this.focus(c),this.sendClick(c,e),a&&"select"===s||(this.targetElement=null,e.preventDefault()),!1);return a&&!r&&(l=c.fastClickScrollParent,l&&l.fastClickLastScrollTop!==l.scrollTop)?!0:(this.needsClick(c)||(e.preventDefault(),this.sendClick(c,e)),!1)},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},e.prototype.onMouse=function(e){return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0:!0},e.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},e.prototype.destroy=function(){var e=this.layer;n&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},e.notNeeded=function(e){var t,a,r,i;if("undefined"==typeof window.ontouchstart)return!0;if(a=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(a>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(o&&(r=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),r[1]>=10&&r[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction?!0:(i=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],i>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===e.style.touchAction||"manipulation"===e.style.touchAction?!0:!1)},e.attach=function(t,n){return new e(t,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?(module.exports=e.attach,module.exports.FastClick=e):window.FastClick=e}(),$(function(){FastClick.attach(document.body)}),function(e,t){"use strict";e.namespace("Homepage"),e.Homepage.HomepageController=function(){var n=e.Homepage.ReviewFeedModel.loadReviewArray(),a=Backbone.Radio.channel("Homepage");new e.Homepage.HomepageView({"el":".page__homepage_show","vent":a,"inject":{"$videoModalTrigger":t(".js-video-modal-trigger"),"$ajaxElements":t("[data-ajax-replace]")}}),new e.Homepage.ReviewFeedView({"el":".js-review-feed","inject":{"reviewFeed":n,"initialLoadCount":5,"scrollInitMin":6,"scrollInitMax":15,"scrollInitIndex":0,"slideDuration":1e3,"removeLastDuration":700,"reviewSelector":"js-review","reviewClasses":{"wrapper":"customer_reviews__review","quote":"customer_reviews__quote","author":"customer_reviews__author","iconWrap":"customer_reviews__icon","icon":"ts-icon","reviewer":"customer_reviews__reviewer","source":"customer_reviews__source_name"}}}),new e.Homepage.VideoModalView({"el":".js-video-modal","vent":a,"inject":{"videoInDelay":500,"$videoIframe":t(".js-video-iframe"),"$iframeWrapper":t(".js-iframe-wrapper")}})}}(TS,jQuery,window),TS.Homepage.ReviewFeedModel={"loadReviewArray":function(){var e=[{"name":"Abel Collins","about":"@be1Collins","text":"What an awesome way to support a campaign.","source":"twitter"},{"name":"Amber Masso","about":"acco.org","text":"It was really easy to create a campaign, we raised over $7,000!","source":"email"},{"name":"Chris","about":"Buyer","text":"Thanks, Teespring, you guys really care about your customers.","source":"comments"},{"name":"Laura Paola","about":"RI Foundation","text":"Teespring continues to be the perfect fit for our campaigns.... and we never have to put in a dollar!","source":"phone"},{"name":"Justin Palmer","about":"TheILoveDogsSite.com","text":"Teespring is THE best way to easily create and sell clothing online, period.","source":"email"},{"name":"BoyMeetsWorld","about":"@BMW_LifeMorals","text":"Thanks to Teespring, we have sold over 2,000 tshirts across multiple campaigns!","source":"twitter"},{"name":"Sara","about":"Sweet Silly Sara","text":"Teespring eliminates the worry and the hassle of dealing with supply.","source":"comments"},{"name":"Alex","about":"TEAM2020.org","text":"Using Teespring has allowed us to spread our message internationally!","source":"email"},{"name":"Sarah Toney","about":"","text":"Absolutely exceptional customer service. Thank you so much!","source":"facebook"},{"name":"Sarah Christian","about":"MARSOC","text":"We raised over $3,000 without any up-front costs!","source":"email"},{"name":"Alex Xavier","about":"Phila Honey Badgers","text":"We're definitely using Teespring again for future campaigns.","source":"phone"},{"name":"Nicole Singer","about":"RiverBar Gal Creations","text":"I\u2019ve never had such great customer service so many times in a row!","source":"email"},{"name":"Corinne","about":"Mail 4 Rosey","text":"Super easy to use! Such a great resource for family reunions, fundraisers, or teams.","source":"comments"},{"name":"Richard Sirvano","about":"MattyFund.org","text":"The secret is out. Teespring is the easiest to raise funds and spread awareness.","source":"email"},{"name":"Nancy Riegler","about":"Oasis Camel","text":"I'm not a computer person, but it was really easy to create a design that looked original.","source":"phone"},{"name":"Alli Shea","about":"@allisonshea30","text":"Teespring has worked spectacularly 4 nonprofit causes, gets $, and buyers get to show off their support.","source":"twitter"},{"name":"Alexus Cee","about":"Down South Apparel","text":"Thanks so much - you guys are beyond helpful!","source":"email"},{"name":"Hannah","about":"Dreaming of Perfect","text":"If everyone used Teespring, there would be a lot less profit lost to unsold shirts!","source":"comments"},{"name":"Amy Kulp","about":"Director of AAOS","text":"Who knew fundraising could be so easy? We are thrilled with the success of our campaign!","source":"email"},{"name":"Jessica","about":"Sewcraftable","text":"You never have to worry about being stuck with a bunch of unsold shirts.","source":"comments"},{"name":"Brad Egel","about":"Cancer Warrior","text":"As usual, I\u2019m totally impressed with Teespring!","source":"email"},{"name":"Hadley Rouse","about":"Breadpig","text":"Teespring handles all the hassles and outputs nothing but quality. I can't recommend them enough.","source":"facebook"},{"name":"Jacqueline Baltrun","about":"Rescued Is My Favorite Breed","text":"Successful launch! Thanks for everything.","source":"email"},{"name":"Jamie","about":"Beantownica","text":"Whether making extra money for yourself or for a fundraiser, you can\u2019t go wrong with working with Teespring","source":"comments"},{"name":"Paula","about":"Beauty thru Imperfection","text":"I was pleasantly surprised at how easy it was to play with designs and create a professional looking shirt!","source":"comments"},{"name":"Steve Wescott","about":"Needle2Square","text":"Making shirts is always a hassle, but Teespring is so convenient.","source":"email"},{"name":"Tina Ghosn","about":"T1 Diabetes","text":"I honestly can't wait to create another tee in the future.","source":"phone"},{"name":"David Dufresne","about":"Buyer","text":"Thanks for the great service! I'll definitely remember that","source":"comments"},{"name":"Khloe","about":"KGStyleblogs","text":"The tees are made using screen printers\u2026so the images don\u2019t fade over time!","source":"comments"}];return e}},function(e,t,n){var a=t.View.extend({"initialize":function(e){n.extend(this,e.inject),this.init.apply(this,arguments),this.delegateUIEvents()},"init":function(){},"delegateUIEvents":function(){this.undelegateUIEvents(),n.each(this.uiEvents,function(e,t){var a=t.split(" "),r=a[0],i=a[1],o=this[i];r+=".delegateUIEvents"+this.cid,e=n.bind(this[e],this),o.on(r,e)},this)},"undelegateUIEvents":function(){n.each(this.uiEvents,function(e,t){var n=t.split(" "),a=n[1],r=this[a];r.off(".delegateUIEvents"+this.cid)},this)}});e.UIView=a}(TS,Backbone,_),function(){"use strict";TS.namespace("Homepage"),TS.Homepage.HomepageView=TS.UIView.extend({"uiEvents":{"click $videoModalTrigger":"videoTriggerClicked"},"init":function(e){this.vent=e.vent,this.replaceAjaxContent()},"videoTriggerClicked":function(e){e.preventDefault(),this.vent.trigger("videoTrigger:clicked")},"replaceAjaxContent":function(){_.each(this.$ajaxElements,function(e){var t=$(e);$.get(t.data("ajaxReplace"),function(e){t.html(e)})})}})}(),function(){"use strict";TS.namespace("Homepage"),TS.Homepage.ReviewFeedView=TS.UIView.extend({"init":function(){this.loadReviews(this.initialLoadCount),this.scrollerInit(this.scrollInitMin,this.scrollInitMax,this.scrollInitIndex)},"addReview":function(e){var t=this.$el.find("."+this.reviewSelector).last();e.slideDown(this.slideDuration),t.animate({"height":"0px"},this.removeLastDuration,function(){$(this).remove()})},"loadInitReviews":function(e){e.show()},"newitem":function(e){var t=""===e.about?"&nbsp;":e.about,n=$("<div />").addClass(this.reviewClasses.wrapper+" "+this.reviewSelector).css("display","none").append($("<div />",{"class":this.reviewClasses.quote,"html":"&ldquo;"+e.text+"&rdquo;"})).append($("<div />",{"class":this.reviewClasses.author}).append($("<div />",{"class":this.reviewClasses.iconWrap+" "+this.reviewClasses.iconWrap+"--"+e.source,"html":'<i class="'+this.reviewClasses.icon+"-"+e.source+'"></i>'})).append($("<div />",{"class":this.reviewClasses.reviewer,"html":e.name})).append($("<div />",{"class":this.reviewClasses.source,"html":t}))).prependTo(this.$el);return n},"scrollerInit":function(e,t,n){var a=this.setRand(e,t,n),r=this;setTimeout(function(){n=n>r.reviewFeed.length-1?0:n;var a=r.newitem(r.reviewFeed[n]);r.addReview(a),r.scrollerInit(e,t,++n)},a)},"loadReviews":function(e){for(var t=this.reviewFeed.slice(0),n=0;e>n;n++){var a=Math.floor(Math.random()*t.length),r=this.newitem(t[a]);t.splice(a,1),this.loadInitReviews(r)}},"setRand":function(e,t){return Math.round(1e3*(Math.random()*(t-e)+e))}})}(),function(e,t,n){"use strict";return TS.Views.ModalView=n.View.extend({"initialize":function(e){return this.$overlay=t(".modal__overlay")||null,e&&e.inits&&e.inits(this),this.$modal=t(".modal"),this._addOverlay(),this},"events":{"click .modal__close_btn":"closeModal","close.modal":"closeModal","open.modal":"openModal"},"_addOverlay":function(){var e=this;return t(".modal__overlay").length<1&&(t("body").append('<div class="modal__overlay modal--inactive"></div>'),this.$overlay=t(".modal__overlay"),this.$overlay.on("click",function(){e.$el.trigger("close.modal")})),this},"closeModal":function(e){return"undefined"!=typeof e&&e.preventDefault(),this.$el.addClass("modal--inactive"),this.$overlay.addClass("modal--inactive"),t("body").removeClass("modal--open"),this},"openModal":function(e){return"undefined"!=typeof e&&e.preventDefault(),this.$el.removeClass("modal--inactive"),this.$overlay.removeClass("modal--inactive"),t("body").addClass("modal--open"),this}}),TS.Views.ModalView}(window,jQuery,Backbone,_),function(){"use strict";TS.namespace("Homepage"),TS.Homepage.VideoModalView=TS.Views.ModalView.extend({"events":{"click .js-video-modal-hide":"closeVideo"},"initialize":function(e){this.bindOptions(e),this.setupListenters(),TS.Views.ModalView.prototype.initialize.apply(this),_.bindAll(this,"_addOverlay","openModal")},"bindOptions":function(e){this.vent=e.vent,this.videoInDelay=e.inject.videoInDelay,this.$videoIframe=e.inject.$videoIframe,this.$iframeWrapper=e.inject.$iframeWrapper},"setupListenters":function(){this.listenTo(this.vent,"videoTrigger:clicked",this.openVideo)},"openVideo":function(){var e=_.bind(this.animateVideoIn,this);this.openModal(),this.autoplayVideo(),setTimeout(e,this.videoInDelay)},"closeVideo":function(){this.$videoIframe.attr("src",this.$videoIframe.attr("src").replace("&autoplay=1","")).animate({"opacity":0}),this.$iframeWrapper.stop().animate({"opacity":0}),this.closeModal()},"autoplayVideo":function(){this.$videoIframe.attr("src",this.$videoIframe.attr("src")+"&autoplay=1")},"animateVideoIn":function(){this.$iframeWrapper.stop().animate({"opacity":1}),this.$videoIframe.animate({"opacity":1})}})}(),function(){"use strict";TS.namespace("Homepage"),TS.init(".page__homepage_show",function(){new TS.Homepage.HomepageController}),TS.runInitializers()}();
function packageDemand(){
  $(".topNav .top .menu ul li:nth-child(2) a").addClass("selected");

  $(".block-box .content-right .drafts_details:nth-child(4n)").css("margin-right",0);

  $("span.types-of").text(sessionStorage.getItem("servicetype"));
  $(".block-box .content-right .drafts_details").click(function(){
      $(this).addClass("selected").siblings().removeClass("selected");
      
      $("span.name").text($(".block-box .content-right .drafts_details.selected h2").text());//套餐名称
      $("span.industry").text($(".block-box .content-right .drafts_details.selected p.industry").text());//行业
      $("span.money").text($(".block-box .content-right .drafts_details.selected p.money i").text());//单价
      $("span.coupon").text($(".block-box .content-right .drafts_details.selected p.coupon").text());//优惠总价
      //$("span.price").text("￥" + $(".block-box .content-right .drafts_details.selected p.price").text());
      $("span.number").text($(".block-box .content-right .drafts_details.selected p.number").text());//数量
      $("span.cycle").text($(".block-box .content-right .drafts_details.selected p.cycle").text());//周期
      $("span.billing").text($(".block-box .content-right .drafts_details.selected p.billing").text());//结算模式

    });
}

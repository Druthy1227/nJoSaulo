//nVampeta
(function ($) {
  var self = ($.nVampeta = new (function () {})());

  $.extend(self, {
    nVampetaBackgrounds: ["http://www.away.com.br/nvampeta/bg1.png"],

    nVampetaImgs: [
      "https://i.imgur.com/K42MHb0.jpeg",
      "https://i.imgur.com/jlNy4KK.jpeg",
      "https://i.imgur.com/Ty0p5TR.jpeg",
      "https://i.imgur.com/BYbVLQa.jpeg",
      "https://i.imgur.com/AoH4lhz.jpeg",
      "https://i.imgur.com/en4Fcoy.jpeg",
      "https://i.imgur.com/AtjlrKT.jpeg",
      "https://i.imgur.com/AtjlrKT.jpeg",
      "https://i.imgur.com/8HHcxD7.jpeg",
      "https://i.imgur.com/b0P1fdW.jpeg",
      "https://i.imgur.com/cdBeI6L.jpeg",
      "https://i.imgur.com/rMRa0yg.jpeg",
      "https://i.imgur.com/B1VEhxz.jpeg",
      "https://i.imgur.com/FnTqV0n.jpeg",
      "https://i.imgur.com/2zRYXeO.jpeg",
      "https://i.imgur.com/2zRYXeO.jpeg",
      "https://i.imgur.com/jlNy4KK.jpeg",
      "https://i.imgur.com/rIiVMFl.jpeg",
      "https://i.imgur.com/pPkfEpI.jpeg",
      "https://i.imgur.com/O69n1Gc.jpeg",
      "https://i.imgur.com/2mBwc9Z.jpeg",
      "https://i.imgur.com/jk2mfCY.jpeg",
      "https://i.imgur.com/r8rBkCL.jpeg",
      "https://i.imgur.com/1P9e0hh.jpeg",
      "https://i.imgur.com/G6vql70.jpeg",
      "https://i.imgur.com/s0o0Fpu.jpeg",
      "https://i.imgur.com/4e5MxPq.jpeg",
      "https://i.imgur.com/Va9O7vm.jpeg",
      "https://i.imgur.com/WWnOqR8.jpeg",
      "https://i.imgur.com/UOaGNn5.jpeg",
      "https://i.imgur.com/iCmGwdB.jpeg",
      "https://i.imgur.com/ef7dIYd.jpeg",
      "https://i.imgur.com/eBpuQSk.jpeg",
      "https://i.imgur.com/Ojut3Wo.jpeg",
      "https://i.imgur.com/5hT0rfJ.jpeg",
      "https://i.imgur.com/XZLlYhH.jpeg",
    ],

    handleImages: function (lstImgs, time) {
      $.each($("img"), function (i, item) {
        //Skip if image is already replaced
        if ($.inArray($(item).attr("src"), lstImgs) == -1) {
          var h = $(item).height();
          var w = $(item).width();

          //If image loaded
          if (h > 0 && w > 0) {
            //Replace
            $(item)
              .css("width", w + "px")
              .css("height", h + "px");
            $(item).attr("src", lstImgs[Math.floor(Math.random() * lstImgs.length)]);
          } else {
            //Replace when loaded
            $(item).load(function () {
              //Prevent 'infinite' loop
              if ($.inArray($(item).attr("src"), lstImgs) == -1) {
                var h = $(item).height();
                var w = $(item).width();
                $(item)
                  .css("width", w + "px")
                  .css("height", h + "px");
                $(item).attr("src", lstImgs[Math.floor(Math.random() * lstImgs.length)]);
              }
            });
          }
        }
      });

      //Keep replacing
      if (time > 0) {
        setTimeout(function () {
          self.handleImages(lstImgs, time);
        }, time);
      }
    },

    handleLogo: function (bgImgs, time) {
      $backgroundImages = $(
        "[class*=logo], [class*=header], [id*=header], [id*=logo]," +
          "[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span," +
          "[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1," +
          "[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a"
      ).filter(function () {
        backgroundImg = $(this).css("background-image");
        return backgroundImg && backgroundImg != "none";
      });

      $backgroundImages.each(function (i, item) {
        $(item).css("background-image", "url(" + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ")");
        $(item).css("background-position", "0 0");
        $(item).css("background-repeat", "no-repeat");
        $(item).css("background-size", "contain");
      });
    },
  });

  //Run on jQuery ready
  $(function () {
    self.handleImages(self.nVampetaImgs, 3000);
    self.handleLogo(self.nVampetaBackgrounds, 3000);
  });
})(jQuery);

/* 
This JQuery handles the click actions on the menu items.
*/

$(document).ready(function () {
  var china_item = $("#china_item");
  var petra_item = $("#petra_item");
  var machu_item = $("#machu_item");
  var itza_item = $("#itza_item");
  var colosseum_item = $("#colosseum_item");
  var taj_item = $("#taj_item");
  var christ_item = $("#christ_item");

  var chinaIsExpanded = false;
  var petraIsExpanded = false;
  var machuIsExpanded = false;
  var itzaIsExpanded = false;
  var colosseumIsExpanded = false;
  var tajIsExpanded = false;
  var christIsExpanded = false;

  var itemOriginalHeight = $(".item_container").height();

  var isSmallScreen = false;

  // Store is desktop or mobile version in a var.
  function checkScreenSize() {
    var windowWidth = $(window).width();
    isSmallScreen = windowWidth <= 1100;
  }

  /*  
  Calculate the width of the container based on screen size and 
  set video size for mobile, as container size is set according to video size.
  */
  function calculateContainerSize(item, video) {
    var itemHeight = $(item).height();
    var screenWidth = window.innerWidth;
    var size;

    if (isSmallScreen) {
      $(video).width("100vw");
      $(video).height("auto");

      size = $(video).height() + $(item).height();

      $(video).css("top", $(item).height());
    } else {
      // Calculate the maximum width allowed without going past the edge.
      var maxWidth = screenWidth - itemHeight * 6;
      var offset = $(item).width() / Math.tan(1.28);

      size = maxWidth - offset;
    }
    return size;
  }

  function setHeaderSize(span) {
    if (isSmallScreen) {
      $(".header").width("100vw");
    } else {
      var offset = $(".menu_item").height();
      $(".header").width(span - offset / 2);
    }
  }

  function setVideoSizeForDesktop(video, container, aspectRatio) {
    // Change video size according to container aspect ratio; for desktop only.
    if (!isSmallScreen) {
      if (aspectRatio > 1.55) {
        $(video).css({
          width: maxWidth + "px",
          height: "auto",
          transform: "translateY(-90%) rotate(90deg) skewX(15deg)",
        });
      } else if (aspectRatio > 1.4) {
        $(video).css({
          height: $(container).width() + "px",
          width: "auto",
          transform: "translateY(-95%) rotate(90deg) skewX(15deg)",
        });
      } else if (aspectRatio > 1.3) {
        $(video).css({
          height: $(container).width() + "px",
          width: "auto",
          transform: "translateY(-105%) rotate(90deg) skewX(15deg)",
        });
      } else {
        $(video).css({
          height: $(container).width() + "px",
          width: "auto",
          transform: "translateY(-120%) rotate(90deg) skewX(15deg)",
        });
      }
      $("#background").css("background-color", "black");
      $("#title").css("color", "black");
    } else {
      $(video).css({
        width: "100vw",
        height: "auto",
        transform: "rotate(0deg)",
      });
      $("#background").css("background-color", "black");
      $("#title").css("color", "white");
    }
  }

  function openContainer(wonder) {
    var item = "#" + wonder + "_item";
    var container = "#" + wonder + "_container";
    var video = "#" + wonder + "_video";

    checkScreenSize();

    var containerSpan = calculateContainerSize(item, video);

    // Set header width equal to the width of the container.
    setHeaderSize(containerSpan);

    var aspectRatio = containerSpan / $(container).width();

    setVideoSizeForDesktop(video, container, aspectRatio);

    $(video).trigger("play");

    $(container).animate({ height: containerSpan }, 500);
  }

  function closeContainer(wonder) {
    var container = "#" + wonder + "_container";
    var video = "#" + wonder + "_video";

    $(container).animate({ height: itemOriginalHeight }, 500, function () {
      $(video).trigger("pause");
    });

    if (
      !chinaIsExpanded &&
      !petraIsExpanded &&
      !machuIsExpanded &&
      !itzaIsExpanded &&
      !colosseumIsExpanded &&
      !tajIsExpanded &&
      !christIsExpanded
    ) {
      $("#background").css("background-color", "#61866c");
      $("#title").css("color", "white");
    }
  }

  // Execute Click actions ----------------------------------------------
  // Each click toggles the corresponding container and closes all others.

  // China

  $(china_item).click(function () {
    if (chinaIsExpanded) {
      chinaIsExpanded = false;
      closeContainer("china");
    } else {
      openContainer("china");
      chinaIsExpanded = true;

      closeContainer("petra");
      petraIsExpanded = false;
      closeContainer("machu");
      machuIsExpanded = false;
      closeContainer("itza");
      itzaIsExpanded = false;
      closeContainer("colosseum");
      colosseumIsExpanded = false;
      closeContainer("taj");
      tajIsExpanded = false;
      closeContainer("christ");
      christIsExpanded = false;
    }
  });

  // Petra

  $(petra_item).click(function () {
    if (petraIsExpanded) {
      petraIsExpanded = false;
      closeContainer("petra");
    } else {
      openContainer("petra");
      petraIsExpanded = true;

      closeContainer("china");
      chinaIsExpanded = false;
      closeContainer("machu");
      machuIsExpanded = false;
      closeContainer("itza");
      itzaIsExpanded = false;
      closeContainer("colosseum");
      colosseumIsExpanded = false;
      closeContainer("taj");
      tajIsExpanded = false;
      closeContainer("christ");
      christIsExpanded = false;
    }
  });

  // Machu Picchu

  $(machu_item).click(function () {
    if (machuIsExpanded) {
      machuIsExpanded = false;
      closeContainer("machu");
    } else {
      openContainer("machu");
      machuIsExpanded = true;

      closeContainer("china");
      chinaIsExpanded = false;
      closeContainer("petra");
      petraIsExpanded = false;
      closeContainer("itza");
      itzaIsExpanded = false;
      closeContainer("colosseum");
      colosseumIsExpanded = false;
      closeContainer("taj");
      tajIsExpanded = false;
      closeContainer("christ");
      christIsExpanded = false;
    }
  });

  // Chichén Itzá

  $(itza_item).click(function () {
    if (itzaIsExpanded) {
      itzaIsExpanded = false;
      closeContainer("itza");
    } else {
      openContainer("itza");
      itzaIsExpanded = true;

      closeContainer("china");
      chinaIsExpanded = false;
      closeContainer("petra");
      petraIsExpanded = false;
      closeContainer("machu");
      machuIsExpanded = false;
      closeContainer("colosseum");
      colosseumIsExpanded = false;
      closeContainer("taj");
      tajIsExpanded = false;
      closeContainer("christ");
      christIsExpanded = false;
    }
  });

  // Colosseum

  $(colosseum_item).click(function () {
    if (colosseumIsExpanded) {
      colosseumIsExpanded = false;
      closeContainer("colosseum");
    } else {
      openContainer("colosseum");
      colosseumIsExpanded = true;

      closeContainer("china");
      chinaIsExpanded = false;
      closeContainer("petra");
      petraIsExpanded = false;
      closeContainer("machu");
      machuIsExpanded = false;
      closeContainer("itza");
      itzaIsExpanded = false;
      closeContainer("taj");
      tajIsExpanded = false;
      closeContainer("christ");
      christIsExpanded = false;
    }
  });

  // Taj Mahal

  $(taj_item).click(function () {
    if (tajIsExpanded) {
      tajIsExpanded = false;
      closeContainer("taj");
    } else {
      openContainer("taj");
      tajIsExpanded = true;

      closeContainer("china");
      chinaIsExpanded = false;
      closeContainer("petra");
      petraIsExpanded = false;
      closeContainer("machu");
      machuIsExpanded = false;
      closeContainer("itza");
      itzaIsExpanded = false;
      closeContainer("colosseum");
      colosseumIsExpanded = false;
      closeContainer("christ");
      christIsExpanded = false;
    }
  });

  // Christ the Redeemer

  $(christ_item).click(function () {
    if (christIsExpanded) {
      christIsExpanded = false;
      closeContainer("christ");
    } else {
      openContainer("christ");
      christIsExpanded = true;

      closeContainer("china");
      chinaIsExpanded = false;
      closeContainer("petra");
      petraIsExpanded = false;
      closeContainer("machu");
      machuIsExpanded = false;
      closeContainer("itza");
      itzaIsExpanded = false;
      closeContainer("colosseum");
      colosseumIsExpanded = false;
      closeContainer("taj");
      tajIsExpanded = false;
    }
  });

  // End of executiong click actions ----------------------------------------------
});

$(document).ready(function () {
    $("#button-click").on("click", function () {
        $("#outputArea").text("Button was clicked! (.click() demonstrated)");
        console.log(".click() demonstrated");
    });

    $("#button-click2").on("click", function () {
        $("#outputArea2").hide();
        console.log(".hide() demonstrated - area hidden");
    });

    $("#button-click3").on("click", function () {
        $("#outputArea3").show();
        console.log(".show() demonstrated - area shown");
    });

    $("#button-click4").on("click", function () {
        $("#outputArea4").toggle();
        console.log(".toggle() demonstrated - area toggled");
    });

    $("#button-click5").on("click", function () {
        $("#outputArea5").slideDown();
        console.log(".slideDown() demonstrated - area slid down");
    });

    $("#button-click6").on("click", function () {
        $("#outputArea6").slideUp();
        console.log(".slideUp() demonstrated - area slid up");
    });

    $("#button-click7").on("click", function () {
        $("#outputArea7").slideToggle();
        console.log(".slideToggle() demonstrated - area toggled slide");
    });

    $("#button-click8").on("click", function () {
        $("#outputArea8").fadeIn();
        console.log(".fadeIn() demonstrated - area faded in");
    });

    $("#button-click9").on("click", function () {
        $("#outputArea9").fadeOut();
        console.log(".fadeOut() demonstrated - area faded out");
    });

    $("#button-click10").on("click", function () {
        $("#outputArea10").addClass("highlight");
        $("#outputArea10").text(
            "Class 'highlight' added! (.addClass() demonstrated)"
        );
        console.log(".addClass() demonstrated - class added");
    });

    $("#button-click11").on("click", function () {
        $("#outputArea11").before(
            "<p><em>Content inserted BEFORE with .before()!</em></p>"
        );
        console.log(".before() demonstrated - content inserted before");
    });

    $("#button-click12").on("click", function () {
        $("#outputArea12").after(
            "<p><em>Content inserted AFTER with .after()!</em></p>"
        );
        console.log(".after() demonstrated - content inserted after");
    });

    $("#button-click13").on("click", function () {
        $("#outputArea13").append(
            "<span><em> Appended with .append()!</em></span>"
        );
        console.log(".append() demonstrated - content appended");
    });

    $("#button-click14").on("click", function () {
        var htmlContent = $("#outputArea14").html();
        $("#outputArea14").text(
            "HTML retrieved: " + htmlContent + " (.html() demonstrated)"
        );
        console.log(".html() demonstrated - HTML:", htmlContent);
    });

    $("#button-click15").on("click", function () {
        var attrValue = $("#button-click15").attr("id");
        $("#outputArea15").text(
            "Attribute 'id' of button: " + attrValue + " (.attr() demonstrated)"
        );
        console.log(".attr() demonstrated - Attribute:", attrValue);
    });

    $("#button-click16").on("click", function () {
        $("#outputArea16").text("New simulated value set!");
        var val = $("#outputArea16").text();
        $("#outputArea16").append(
            " (Retrieved: " + val + ") (.val() demonstrated)"
        );
        console.log(".val() demonstrated - Value:", val);
    });

    $("#button-click17").on("click", function () {
        var textContent = $("#outputArea17").text();
        $("#outputArea17").text(
            "Text retrieved and reset: " +
                textContent +
                " (.text() demonstrated)"
        );
        console.log(".text() demonstrated - Text:", textContent);
    });
});

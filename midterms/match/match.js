$(document).ready(function () {
    let hasFlippedCard = false;
    let firstCard = null,
        secondCard = null;
    let lockBoard = false;

    shuffle();

    $(".card").on("click", function () {
        if (lockBoard || $(this).hasClass("flipped") || $(this).is(firstCard))
            return;

        $(this).addClass("flipped");

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = $(this);
            return;
        }

        secondCard = $(this);
        checkForMatch();
    });

    function checkForMatch() {
        const isMatch = firstCard.data("card") === secondCard.data("card");

        if (isMatch) {
            disableCards();
        } else {
            lockBoard = true;
            setTimeout(() => {
                firstCard.removeClass("flipped");
                secondCard.removeClass("flipped");
                resetBoard();
            }, 1000);
        }
    }

    function disableCards() {
        firstCard.off("click");
        secondCard.off("click");
        resetBoard();
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function shuffle() {
        $(".card").each(function () {
            let randomPos = Math.floor(Math.random() * 12);
            $(this).css("order", randomPos);
        });
    }
});

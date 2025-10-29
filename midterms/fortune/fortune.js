function shuffleCards() {
    const grid = $('.game-grid');
    const cards = $('.card').detach();
    
    while (cards.length) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const card = cards.splice(randomIndex, 1)[0];
        grid.append(card);
    }
}

$(document).ready(function() {
    let currentCard = null;
    
    $('.card').on('click', function() {
        if (currentCard && !currentCard.is(this)) {
            currentCard.removeClass('flipped');
        }
        $(this).toggleClass('flipped');
        currentCard = $(this);
    });
    
    $('#closeFortune').on('click', function() {
        $('.card').removeClass('flipped');
        currentCard = null;
    });
    
    shuffleCards();
});
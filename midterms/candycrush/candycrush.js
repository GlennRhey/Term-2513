$(document).ready(function() {
    const candyTypes = ['red', 'orange', 'yellow', 'multicolor'];
    const boardSize = 8;
    const $gameBoard = $('#game-board');

    function createBoard() {
        $gameBoard.empty();
        
        for (let i = 0; i < boardSize * boardSize; i++) {
            const randomType = candyTypes[Math.floor(Math.random() * candyTypes.length)];
            $gameBoard.append(`
                <div class="candy" 
                     data-type="${randomType}" 
                     style="background-image: url('${randomType}_candy.png')">
                </div>`
            );
        }
    }

    createBoard();

    $gameBoard.on('click', '.candy', function() {
        $(this).addClass('hidden');
    });

    $('#reset-btn').on('click', function() {
        $('.candy').removeClass('hidden');
        createBoard();
    });
});
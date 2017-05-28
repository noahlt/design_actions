function redraw() {
    var $card = $('.card');
    grammar = tracery.createGrammar({
        origin: '#modifier# #noun#',
        modifier: ['adjust', 'combine', 'separate'],
        noun: ['frameworks', 'inputs', 'chris ideas'],
    });
    $card.text(grammar.flatten('#origin#'));
}

window.setTimeout(function() {
    redraw();
}, 250);

$(document).ready(function() {
    $(document.body).click(function() {
        // called when you click anywhere on the page
        redraw();
    });
});


let idOrder = ['#a', '#b', '#c', '#d', '#e', '#f'];
let curr = '#a';

let goToNext = () => {
    $('h1').hide();
    curr = idOrder[(idOrder.indexOf(curr)+1) % idOrder.length];
    $(curr).show();
};
let goToPrev = () => {
    $('h1').hide();
    curr = idOrder[(idOrder.indexOf(curr)+idOrder.length-1) % idOrder.length];
    $(curr).show();
};

$(() => {
    $(curr).show();
    $('body').on('swipeleft', goToNext);
    $('body').on('swiperight', goToPrev);
    $(document).on('keydown', (key) => {
        switch(key.which) {
            case 37: case 74: goToPrev(); break;
            case 39: case 75: goToNext(); break;
        }
    });
});

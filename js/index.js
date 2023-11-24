$(document).ready(()=>{
    $('#header-show-btn').hide();

    $('#header-hide-btn').click(()=>{
    $('#header-show-btn').show();
    $('header').hide();
        $('body').css({
            'height': '110vh',
            'grid-template': '100vh min(5vw, 10vh) / 1fr'
        });
    });
    $('#header-show-btn').click(()=>{
    $('#header-show-btn').hide();
    $('header').show();
        $('body').css({
            'height': '120vh',
            'grid-template': 'min(5vw, 10vh) 100vh min(5vw, 10vh) / 1fr'
        });
    });
});
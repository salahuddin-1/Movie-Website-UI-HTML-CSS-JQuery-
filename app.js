let arrows = $(".arrow");
let items = $(".movie-list-without-arrow");
let countPx = 280;


$(
    function() {

        for (let i = 0; i < arrows.length; i++) {
            $(arrows[i]).click(function() {
                if (countPx < 850) {
                    scrollMoviesList(countPx, i);
                    countPx += 280;

                } else {
                    scrollMoviesList(0, i);
                    countPx = 280;
                }
            });
        }

        login_register();
    }
);


function scrollMoviesList(countPx, i) {
    $(items[i]).css({
        transform: "translateX(-" + countPx + "px)",
        transition: "1s",
    });
}


function login_register() {
    $(".login-register-text").click(
        function() {
            $(".navigation-login").attr(
                "href", "registration.html"
            );
        }
    );
}
window.onload = TypeItLoadScript;

function TypeItInit() {
    const main_title = new TypeIt("#main-title", {
        speed: 17,
        startDelay: 200,
        lifeLike: true,
        cursor: false,
        afterComplete: function(main_title) {
            main_title.destroy();
            const tagline = new TypeIt("#tagline-text", {
                speed: 15,
                cursor: false,
                startDelay: 200,
                lifeLike: false,
                strings: "Navigating The Unknown",
                afterComplete: function(tagline) {
                    tagline.destroy();
                    const venue = new TypeIt("#venue-text", {
                        speed: 12,
                        startDelay: 200,
                        lifeLike: false,
                        cursor: false,
                        strings: "March 24 - 26, Zamra International Convention & Exhibition Centre, Kochi",
                        afterComplete: function(venue) {
                            venue.destroy();
                            const book_button = document.getElementById('book-button');
                            book_button.style.opacity = 1;
                            new TypeIt("#tagline-text", {
                                startDelete: true,
                                speed: 70,
                                cursor: false,
                                startDelay: 200,
                                deleteSpeed: 60,
                                lifeLike: false,
                                breakLines: false,
                                nextStringDelay: [1000, 200],
                                loop: true,
                                strings: ["The Celebration of Entrepreneurship", "In association with SponsorName", "Navigating The Unknown"]
                            }).go()
                        }
                    }).go();
                }
            }).go()
        }
    }).go();

    // new TypeIt("#tagline-text", {
    //     speed: 70,
    //     cursor: false,
    //     startDelay: 3000,
    //     deleteSpeed: 60,
    //     lifeLike: false,
    //     breakLines: false,
    //     nextStringDelay: [1000, 200],
    //     loop: true,
    //     strings: ["Navigating The Unknown", "The Celebration of Entrepreneurship", "In association with SponsorName"]
    // }).go()

    // new TypeIt("#venue-text", {
    //     speed: 11,
    //     startDelay: 6000,
    //     lifeLike: false,
    //     cursor: false
    // }).go();
}


function TypeItLoadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	TypeItInit();
	document.body.appendChild(script);
}
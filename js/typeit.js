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
                lifeLike: true,
                strings: "Navigating The Unknown",
                afterComplete: function(tagline) {
                    tagline.destroy();
                    const calendar_icon = document.getElementById('calendar-icon');
                    calendar_icon.style.opacity = 1;
                    const date = new TypeIt("#date-text", {
                        speed: 12,
                        startDelay: 200,
                        lifeLike: true,
                        cursor: false,
                        strings: "March 25-26, 2023",
                        afterComplete: function(date) {
                            const map_marker = document.getElementById('map-marker');
                            map_marker.style.opacity = 1;
                            const venue = new TypeIt("#venue-text", {
                                speed: 12,
                                startDelay: 200,
                                lifeLike: true,
                                cursor: false,
                                strings: "Zamra International Convention & Exhibition Centre, Kochi",
                                afterComplete: function(venue) {
                                    venue.destroy();
                                    const link_icon = document.getElementById('link-icon');
                                    link_icon.style.opacity = 1;
                                    const book_button = document.getElementById('book-button');
                                    book_button.style.opacity = 1;
                                    new TypeIt("#tagline-text", {
                                        startDelete: true,
                                        speed: 70,
                                        cursor: false,
                                        startDelay: 200,
                                        deleteSpeed: 12,
                                        lifeLike: false,
                                        breakLines: false,
                                        nextStringDelay: [1000, 200],
                                        loop: true,
                                        strings: ["The Celebration of Entrepreneurship", "Emerge | Endure | Evolve", "Navigating The Unknown"]
                                    }).go()
                                }
                            }).go();
                        }
                    }).go();
                }
            }).go()
        }
    }).go();
}


function TypeItLoadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	TypeItInit();
	document.body.appendChild(script);
}
console.log("janskrzy.js");
function janskrzy (fase) {
    console.log("janskrzy.js: fase = " + fase);

    let section = document.getElementById('janskrzy');

    if (!section.init) {
        section.init = true;
        // eigen animatie schrijven
        console.log("janskrzy.js: init");
        section.tl
        .to("#janskrzy .box",{
            borderRadius: "50%",
            backgroundColor: "blue",
            rotation: 360,
        });
    }
}
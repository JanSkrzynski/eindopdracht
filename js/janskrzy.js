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
            left: "30vw",
            top: "calc(50vh-20vh)",
            width: "40vw",
            height: "40vw",
        })
        // Last box
        .to("#janskrzy .box",{
            borderRadius: "0",
            backgroundColor: "white",
            rotation: 360,
            left: "40vw",
            top: "calc(50vh-10vh)",
            width: "20vw",
            height: "20vw",
        });
    }
}
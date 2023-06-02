console.log("janskrzy.js");
function janskrzy(fase) {
  console.log("janskrzy.js: fase = " + fase);

  let section = document.getElementById("janskrzy");

  if (!section.init) {
    section.init = true;
    // eigen animatie schrijven
    console.log("janskrzy.js: init");
    section.tl
      .to("#janskrzy .box", {
        borderRadius: "50%",
        rotation: 360,
        width: "4vw",
        height: "4vw",
        x: "50vw",
        y: "16vh",
        border: "0.5rem solid white",
        backgroundColor: "black",
        ease: "sine.out",
      })
      .to("#janskrzy .box", {
        x: "-35vw",
        y: "13vh",
        // ease: "sine.out",
      })
      .to("#janskrzy .box", {
        x: "0",
        // ,
      })

      // Last box
      .to("#janskrzy .box", {
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

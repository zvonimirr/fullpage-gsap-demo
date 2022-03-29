new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  navigationPosition: "left",
  onLeave: function (origin, destination, direction) {
    const section = destination.item;
    const rotateProperty = `rotate${direction === "down" ? "Y" : "X"}`;
    const slideProperty = direction === "down" ? "y" : "x";
    const prefixes = [1, -1];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

    switch (destination.index) {
      case 1:
        const [firstQuadrant, secondQuadrant, thirdQuadrant, fourthQuadrant] =
          section.querySelectorAll("#container div");
        const content = section.querySelector(".content");

        const duration = 1;
        const delay = 0.5;

        const from = {
          x: 0,
          y: 0,
        };

        const timeline = new gsap.timeline({ defaults: { duration, delay } });

        timeline
          .fromTo(firstQuadrant, from, {
            x: "-100%",
            y: "-100%",
          })
          .fromTo(
            secondQuadrant,
            from,
            {
              x: "100%",
              y: "-100%",
            },
            0
          )
          .fromTo(
            thirdQuadrant,
            from,
            {
              x: "-100%",
              y: "100%",
            },
            0
          )
          .fromTo(
            fourthQuadrant,
            from,
            {
              x: "100%",
              y: "100%",
            },
            0
          )
          .fromTo(content, { opacity: 0 }, { opacity: 1 }, 0.5);
        break;

      default:
        gsap.from(section, {
          opacity: 0,
          duration: 0.5,
          delay: 0.5,
        });
        gsap.from(section, {
          [rotateProperty]: 360,
          duration: 0.5,
          delay: 0.5,
        });
        gsap.from(section, {
          [slideProperty]: `${prefix * 100}%`,
          duration: 1,
        });
        break;
    }
  },
});

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
  },
});

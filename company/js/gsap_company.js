gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#visual",
      start: "top top",
      end: "+=2500",
      scrub: 2,
      pin: true,
      // markers: true,
    },
  })
  .from("#visual", {
    opacity: 0.7,
    scale: 0.8,
  })
  .from(".txtBox h3", {
    opacity: 0,
    y: -100,
  })
  .from(".txtBox p", {
    opacity: 0,
    y: -50,
  })
  .from(".scroll", {
    opacity: 0,
    y: -50,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".con01",
      start: "top top",
      end: "bottom",
      // scrub: 2,
      // pin: true,
      // markers: true,
    },
  })
  .from(".center .cir01", {
    scale: 0,
    duration: 0.8,
  })
  .from(".center hr", {
    height: 0,
    duration: 1,
  })
  .from("#timeline li", {
    opacity: 0,
  })
  .from(
    ".history1 hr",
    {
      width: "0%",
      ease: "power3.out",
      stagger: 0.4,
    },
    2
  )
  .from(
    ".history2 hr",
    {
      width: "0%",
      ease: "power3.out",
      stagger: 0.4,
    },
    2
  )
  .from(
    "#timeline .history1 li p",
    {
      y: -50,
      opacity: 0,
      stagger: 0.3,
    },
    3
  )
  .from(
    "#timeline .history2 li p",
    {
      y: -50,
      opacity: 0,
      stagger: 0.3,
    },
    3
  )
  .from(
    "#timeline .history1 li h6",
    {
      y: -50,
      opacity: 0,
      stagger: 0.3,
    },
    3.5
  )
  .from(
    "#timeline .history2 li h6",
    {
      y: -50,
      opacity: 0,
      stagger: 0.3,
    },
    3.5
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".con02",
      start: "top 80%",
      end: "20%",
      // scrub: 2,
      // pin: true,
      // markers: true,
    },
  })
  .from(".con02 h3", {
    x: -100,
    opacity: 0,
  })
  .from(".con02 .circle", {
    scale: 0,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".con03",
      start: "0% 20%",
      end: "bottom",
      //   scrub: 2,
      //   pin: true,
      //   markers: true,
    },
  })
  .from(".con03 h2", {
    y: -100,
    opacity: 0,
    duration: 0.5,
  })
  .from(".con03 .circle", {
    scale: 0,
  })
  .from(
    ".con03 .map",
    {
      //   width: 0,
      height: 0,
      opacity: 0,
      duration: 1,
      // ease: "back.out",
    },
    0.5
  )
  .from(".con03 h3", {
    x: 100,
    opacity: 0,
    duration: 1,
  })
  .from(
    ".con03 .location hr",
    {
      width: 0,
      opacity: 0,
      delay: 0.2,
    },
    0.5
  )
  .from(
    ".con03 .location p",
    {
      x: -200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    },
    0.5
  )
  .from(
    ".con03 .office",
    {
      x: 200,
      opacity: 0,
      duration: 1,
    },
    0.5
  );

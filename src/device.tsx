import facepaint from "facepaint";

const breakpoints = [576, 768, 1200];

export const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

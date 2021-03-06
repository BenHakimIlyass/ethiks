export const variants = delay => ({
  full: {
    transition: { staggerChildren: 0.05, delayChildren: delay }
  },
  empty: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
});
export const itemsVariants = {
  full: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } }
  },
  empty: {
    y: 100,
    opacity: 0,

    transition: {
      y: { stiffness: 1000 }
    }
  }
};
export const ParagraphProps = delay => ({
  initial: "hidden",
  animate: "visible",
  transition: { duration: 1, delay },
  variants: {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -40, opacity: 0 }
  }
});

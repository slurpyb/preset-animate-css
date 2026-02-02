/**
 * Popular animation utilities for common use cases
 * Encapsulates Animate.css animations into semantic, easy-to-use properties
 */

import type { Preset } from "@pandacss/types";

/**
 * Animation preset definitions
 * Maps semantic names to Animate.css keyframe names
 */
export const animationPresets = {
  // Fade animations
  fadeIn: "fadeIn",
  fadeOut: "fadeOut",
  fadeInUp: "fadeInUp",
  fadeInDown: "fadeInDown",
  fadeInLeft: "fadeInLeft",
  fadeInRight: "fadeInRight",
  fadeOutUp: "fadeOutUp",
  fadeOutDown: "fadeOutDown",
  fadeOutLeft: "fadeOutLeft",
  fadeOutRight: "fadeOutRight",

  // Slide animations
  slideInUp: "slideInUp",
  slideInDown: "slideInDown",
  slideInLeft: "slideInLeft",
  slideInRight: "slideInRight",
  slideOutUp: "slideOutUp",
  slideOutDown: "slideOutDown",
  slideOutLeft: "slideOutLeft",
  slideOutRight: "slideOutRight",

  // Bounce animations
  bounce: "bounce",
  bounceIn: "bounceIn",
  bounceOut: "bounceOut",
  bounceInUp: "bounceInUp",
  bounceInDown: "bounceInDown",
  bounceInLeft: "bounceInLeft",
  bounceInRight: "bounceInRight",

  // Zoom animations
  zoomIn: "zoomIn",
  zoomOut: "zoomOut",
  zoomInUp: "zoomInUp",
  zoomInDown: "zoomInDown",
  zoomInLeft: "zoomInLeft",
  zoomInRight: "zoomInRight",

  // Rotate animations
  rotateIn: "rotateIn",
  rotateOut: "rotateOut",

  // Flip animations
  flip: "flip",
  flipInX: "flipInX",
  flipInY: "flipInY",
  flipOutX: "flipOutX",
  flipOutY: "flipOutY",

  // Back animations
  backInUp: "backInUp",
  backInDown: "backInDown",
  backInLeft: "backInLeft",
  backInRight: "backInRight",

  // Attention seekers
  pulse: "pulse",
  flash: "flash",
  shake: "shakeX",
  shakeX: "shakeX",
  shakeY: "shakeY",
  headShake: "headShake",
  swing: "swing",
  tada: "tada",
  wobble: "wobble",
  jello: "jello",
  heartBeat: "heartBeat",
  rubberBand: "rubberBand",
} as const;

/**
 * Entrance animation presets
 */
export const entranceAnimations = {
  fadeIn: "fadeIn",
  fadeInUp: "fadeInUp",
  fadeInDown: "fadeInDown",
  fadeInLeft: "fadeInLeft",
  fadeInRight: "fadeInRight",
  slideInUp: "slideInUp",
  slideInDown: "slideInDown",
  slideInLeft: "slideInLeft",
  slideInRight: "slideInRight",
  bounceIn: "bounceIn",
  bounceInUp: "bounceInUp",
  bounceInDown: "bounceInDown",
  zoomIn: "zoomIn",
  rotateIn: "rotateIn",
  flipInX: "flipInX",
  flipInY: "flipInY",
  backInUp: "backInUp",
  backInDown: "backInDown",
} as const;

/**
 * Exit animation presets
 */
export const exitAnimations = {
  fadeOut: "fadeOut",
  fadeOutUp: "fadeOutUp",
  fadeOutDown: "fadeOutDown",
  fadeOutLeft: "fadeOutLeft",
  fadeOutRight: "fadeOutRight",
  slideOutUp: "slideOutUp",
  slideOutDown: "slideOutDown",
  slideOutLeft: "slideOutLeft",
  slideOutRight: "slideOutRight",
  bounceOut: "bounceOut",
  zoomOut: "zoomOut",
  rotateOut: "rotateOut",
  flipOutX: "flipOutX",
  flipOutY: "flipOutY",
} as const;

/**
 * Attention seeker animations (for infinite/hover)
 */
export const attentionAnimations = {
  bounce: "bounce",
  pulse: "pulse",
  flash: "flash",
  shake: "shakeX",
  shakeX: "shakeX",
  shakeY: "shakeY",
  headShake: "headShake",
  swing: "swing",
  tada: "tada",
  wobble: "wobble",
  jello: "jello",
  heartBeat: "heartBeat",
  rubberBand: "rubberBand",
} as const;

/**
 * Animation speed presets
 */
export const animationSpeeds = {
  slower: "3s",
  slow: "2s",
  normal: "1s",
  fast: "500ms",
  faster: "300ms",
} as const;

/**
 * Base animation styles with accessibility support
 */
const baseAnimationStyles = {
  animationFillMode: "both",
  "@media (prefers-reduced-motion: reduce), print": {
    animationDuration: "1ms !important",
    transitionDuration: "1ms !important",
    animationIterationCount: "1 !important",
  },
};

/**
 * Create animation utilities
 */
export const animationUtilities = {
  extend: {
    /**
     * Main animation utility with popular presets
     * @example css({ animate: 'fadeIn' })
     * @example css({ animate: 'slideInUp' })
     */
    animate: {
      className: "animate",
      values: animationPresets,
      transform(value: string) {
        return {
          animationName: value,
          animationDuration: "1s",
          ...baseAnimationStyles,
        };
      },
    },

    /**
     * Entrance animation utility
     * @example css({ animateIn: 'fadeInUp' })
     * @example css({ animateIn: 'slideInLeft' })
     */
    animateIn: {
      className: "animate-in",
      values: entranceAnimations,
      transform(value: string) {
        return {
          animationName: value,
          animationDuration: "1s",
          ...baseAnimationStyles,
        };
      },
    },

    /**
     * Exit animation utility
     * @example css({ animateOut: 'fadeOut' })
     * @example css({ animateOut: 'slideOutRight' })
     */
    animateOut: {
      className: "animate-out",
      values: exitAnimations,
      transform(value: string) {
        return {
          animationName: value,
          animationDuration: "1s",
          ...baseAnimationStyles,
          opacity: 0, // Ensure element is hidden after exit animation
        };
      },
    },

    /**
     * Hover-triggered animation utility
     * @example css({ animateOnHover: 'bounce' })
     * @example css({ animateOnHover: 'pulse' })
     */
    animateOnHover: {
      className: "animate-hover",
      values: attentionAnimations,
      transform(value: string) {
        return {
          "&:hover": {
            animationName: value,
            animationDuration: "1s",
            ...baseAnimationStyles,
          },
        };
      },
    },

    /**
     * Infinite animation utility
     * @example css({ animateInfinite: 'pulse' })
     * @example css({ animateInfinite: 'bounce' })
     */
    animateInfinite: {
      className: "animate-infinite",
      values: attentionAnimations,
      transform(value: string) {
        return {
          animationName: value,
          animationDuration: "1s",
          animationIterationCount: "infinite",
          ...baseAnimationStyles,
        };
      },
    },

    /**
     * Animation speed utility
     * @example css({ animateSpeed: 'fast' })
     * @example css({ animateSpeed: 'slow' })
     */
    animateSpeed: {
      className: "animate-speed",
      values: animationSpeeds,
      transform(value: string) {
        return {
          animationDuration: value,
        };
      },
    },

    /**
     * Animation delay utility
     * @example css({ animateDelay: '500ms' })
     * @example css({ animateDelay: '1s' })
     */
    animateDelay: {
      className: "animate-delay",
      values: { type: "string" },
      transform(value: string) {
        return {
          animationDelay: value,
        };
      },
    },

    /**
     * Animation count utility
     * @example css({ animateCount: '3' })
     * @example css({ animateCount: 'infinite' })
     */
    animateCount: {
      className: "animate-count",
      values: { type: "string" },
      transform(value: string) {
        return {
          animationIterationCount: value,
        };
      },
    },
  },
};

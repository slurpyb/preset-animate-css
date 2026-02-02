import { describe, it, expect } from "vitest";
import {
  animationUtilities,
  animationPresets,
  entranceAnimations,
  exitAnimations,
  attentionAnimations,
  animationSpeeds,
} from "../src/utilities";

describe("Animation Utilities", () => {
  describe("animationPresets", () => {
    it("includes fade animations", () => {
      expect(animationPresets.fadeIn).toBe("fadeIn");
      expect(animationPresets.fadeOut).toBe("fadeOut");
      expect(animationPresets.fadeInUp).toBe("fadeInUp");
    });

    it("includes slide animations", () => {
      expect(animationPresets.slideInUp).toBe("slideInUp");
      expect(animationPresets.slideOutDown).toBe("slideOutDown");
    });

    it("includes bounce animations", () => {
      expect(animationPresets.bounce).toBe("bounce");
      expect(animationPresets.bounceIn).toBe("bounceIn");
    });

    it("includes attention seekers", () => {
      expect(animationPresets.pulse).toBe("pulse");
      expect(animationPresets.shake).toBe("shakeX");
      expect(animationPresets.tada).toBe("tada");
    });
  });

  describe("entranceAnimations", () => {
    it("includes only entrance animations", () => {
      expect(entranceAnimations.fadeIn).toBe("fadeIn");
      expect(entranceAnimations.slideInUp).toBe("slideInUp");
      expect(entranceAnimations.bounceIn).toBe("bounceIn");
    });

    it("does not include exit animations", () => {
      expect(entranceAnimations).not.toHaveProperty("fadeOut");
      expect(entranceAnimations).not.toHaveProperty("slideOutUp");
    });
  });

  describe("exitAnimations", () => {
    it("includes only exit animations", () => {
      expect(exitAnimations.fadeOut).toBe("fadeOut");
      expect(exitAnimations.slideOutUp).toBe("slideOutUp");
      expect(exitAnimations.bounceOut).toBe("bounceOut");
    });

    it("does not include entrance animations", () => {
      expect(exitAnimations).not.toHaveProperty("fadeIn");
      expect(exitAnimations).not.toHaveProperty("slideInUp");
    });
  });

  describe("attentionAnimations", () => {
    it("includes attention seeker animations", () => {
      expect(attentionAnimations.bounce).toBe("bounce");
      expect(attentionAnimations.pulse).toBe("pulse");
      expect(attentionAnimations.shake).toBe("shakeX");
    });

    it("does not include entrance/exit animations", () => {
      expect(attentionAnimations).not.toHaveProperty("fadeIn");
      expect(attentionAnimations).not.toHaveProperty("fadeOut");
    });
  });

  describe("animationSpeeds", () => {
    it("defines speed presets", () => {
      expect(animationSpeeds.slower).toBe("3s");
      expect(animationSpeeds.slow).toBe("2s");
      expect(animationSpeeds.normal).toBe("1s");
      expect(animationSpeeds.fast).toBe("500ms");
      expect(animationSpeeds.faster).toBe("300ms");
    });
  });

  describe("animationUtilities", () => {
    it("exports extend object with utilities", () => {
      expect(animationUtilities.extend).toBeDefined();
      expect(typeof animationUtilities.extend).toBe("object");
    });

    it("includes animate utility", () => {
      const animate = animationUtilities.extend?.animate;
      expect(animate).toBeDefined();
      expect(animate?.className).toBe("animate");
      expect(animate?.values).toBe(animationPresets);
      expect(typeof animate?.transform).toBe("function");
    });

    it("includes animateIn utility", () => {
      const animateIn = animationUtilities.extend?.animateIn;
      expect(animateIn).toBeDefined();
      expect(animateIn?.className).toBe("animate-in");
      expect(animateIn?.values).toBe(entranceAnimations);
    });

    it("includes animateOut utility", () => {
      const animateOut = animationUtilities.extend?.animateOut;
      expect(animateOut).toBeDefined();
      expect(animateOut?.className).toBe("animate-out");
      expect(animateOut?.values).toBe(exitAnimations);
    });

    it("includes animateOnHover utility", () => {
      const animateOnHover = animationUtilities.extend?.animateOnHover;
      expect(animateOnHover).toBeDefined();
      expect(animateOnHover?.className).toBe("animate-hover");
      expect(animateOnHover?.values).toBe(attentionAnimations);
    });

    it("includes animateInfinite utility", () => {
      const animateInfinite = animationUtilities.extend?.animateInfinite;
      expect(animateInfinite).toBeDefined();
      expect(animateInfinite?.className).toBe("animate-infinite");
      expect(animateInfinite?.values).toBe(attentionAnimations);
    });

    it("includes animateSpeed utility", () => {
      const animateSpeed = animationUtilities.extend?.animateSpeed;
      expect(animateSpeed).toBeDefined();
      expect(animateSpeed?.className).toBe("animate-speed");
      expect(animateSpeed?.values).toBe(animationSpeeds);
    });

    it("includes animateDelay utility", () => {
      const animateDelay = animationUtilities.extend?.animateDelay;
      expect(animateDelay).toBeDefined();
      expect(animateDelay?.className).toBe("animate-delay");
    });

    it("includes animateCount utility", () => {
      const animateCount = animationUtilities.extend?.animateCount;
      expect(animateCount).toBeDefined();
      expect(animateCount?.className).toBe("animate-count");
    });
  });

  describe("utility transform functions", () => {
    it("animate transform returns correct CSS", () => {
      const animate = animationUtilities.extend?.animate;
      const result = animate?.transform("fadeIn");
      expect(result).toMatchObject({
        animationName: "fadeIn",
        animationDuration: "1s",
        animationFillMode: "both",
      });
      expect(result?.["@media (prefers-reduced-motion: reduce), print"]).toBeDefined();
    });

    it("animateOut transform sets opacity: 0", () => {
      const animateOut = animationUtilities.extend?.animateOut;
      const result = animateOut?.transform("fadeOut");
      expect(result?.opacity).toBe(0);
    });

    it("animateOnHover transform wraps in hover selector", () => {
      const animateOnHover = animationUtilities.extend?.animateOnHover;
      const result = animateOnHover?.transform("pulse");
      expect(result?.["&:hover"]).toBeDefined();
      expect(result?.["&:hover"]?.animationName).toBe("pulse");
    });

    it("animateInfinite transform sets infinite iteration", () => {
      const animateInfinite = animationUtilities.extend?.animateInfinite;
      const result = animateInfinite?.transform("bounce");
      expect(result?.animationIterationCount).toBe("infinite");
    });

    it("animateSpeed transform sets duration", () => {
      const animateSpeed = animationUtilities.extend?.animateSpeed;
      const result = animateSpeed?.transform("fast");
      expect(result?.animationDuration).toBe("fast");
    });

    it("animateDelay transform sets delay", () => {
      const animateDelay = animationUtilities.extend?.animateDelay;
      const result = animateDelay?.transform("500ms");
      expect(result?.animationDelay).toBe("500ms");
    });

    it("animateCount transform sets iteration count", () => {
      const animateCount = animationUtilities.extend?.animateCount;
      const result = animateCount?.transform("3");
      expect(result?.animationIterationCount).toBe("3");
    });
  });
});

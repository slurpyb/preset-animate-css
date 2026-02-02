import { describe, it, expect } from "vitest";
import preset, { keyframes } from "../src/index";

describe("@slurpyb/preset-animate-css", () => {
  it("exports a valid preset with name", () => {
    expect(preset).toBeDefined();
    expect(preset.name).toBe("@slurpyb/preset-animate-css");
  });

  it("exports keyframes object", () => {
    expect(keyframes).toBeDefined();
    expect(typeof keyframes).toBe("object");
  });

  it("includes theme with keyframes", () => {
    expect(preset.theme).toBeDefined();
    expect(preset.theme?.extend?.keyframes).toBeDefined();
  });

  it("includes custom utilities", () => {
    expect(preset.utilities).toBeDefined();
    expect(preset.utilities?.extend).toBeDefined();
    expect(preset.utilities?.extend?.animationName).toBeDefined();
    expect(preset.utilities?.extend?.animationRepeat).toBeDefined();
  });

  it("has bounce animation in keyframes", () => {
    expect(keyframes.bounce).toBeDefined();
  });

  it("has fadeIn animation in keyframes", () => {
    expect(keyframes.fadeIn).toBeDefined();
  });

  it("has slideInDown animation in keyframes", () => {
    expect(keyframes.slideInDown).toBeDefined();
  });

  it("animationName utility has correct structure", () => {
    const animationName = preset.utilities?.extend?.animationName;
    expect(animationName).toMatchObject({
      className: "animation-name",
      values: "animationName",
    });
    expect(typeof animationName?.transform).toBe("function");
  });

  it("animationRepeat utility has correct structure", () => {
    const animationRepeat = preset.utilities?.extend?.animationRepeat;
    expect(animationRepeat).toMatchObject({
      className: "animation-name",
      property: "animationIterationCount",
    });
    expect(typeof animationRepeat?.transform).toBe("function");
  });
});

# preset-animate-css - Agent Development Guide

**Version**: 0.0.4  
**Type**: PandaCSS Preset Library  
**Purpose**: Animate.css keyframes and utilities for PandaCSS

Ported from [Animate.css](https://animate.style/) - A cross-browser library of CSS animations.  
Provides ready-to-use CSS animation keyframes and custom PandaCSS utilities.

---

## Build, Lint, Test Commands

### Build Commands
```bash
# Build library (TypeScript → ESM + CJS)
pnpm build

# Watch mode (rebuild on changes)
pnpm dev
```

**Build outputs**: `dist/index.js` (ESM), `dist/index.cjs` (CJS), `dist/index.d.ts` (types)

### Testing
**Framework**: Vitest  
**Location**: `tests/` directory  
**Coverage**: TODO - Add tests for preset structure

```bash
# Run all tests
pnpm test

# Run in watch mode
pnpm test:watch
```

### Linting & Formatting
**Status**: No linter/formatter configured  
**TODO**: Add ESLint + Prettier (inherit from workspace root)

---

## Code Style Guidelines

### Import Organization
Type imports first, grouped by source, blank lines between groups:
```ts
// Group 1: Type imports
import type { Preset } from "@pandacss/types";

// Group 2: External packages
import { definePreset } from "@pandacss/dev";

// Group 3: Internal modules
import { keyframes } from "./keyframes";
```

### Naming Conventions
- **Functions**: `camelCase`, verb-first
- **Types/Interfaces**: `PascalCase`
- **Files**: `kebab-case`
- **Variables**: `camelCase`, descriptive
- **Constants**: `camelCase` for exported configs

### TypeScript Patterns
- **Interfaces** for object shapes (configs, options)
- **Types** for unions and aliases
- **Type imports**: Always use `import type` for type-only imports

### Documentation
- **JSDoc blocks** for all exported functions and types with `@example` blocks
- **File headers** with attribution
- **Inline comments** only for non-obvious logic

### Export Patterns
- **Named exports** for functions and types
- **Default export** for preset instance: `export default preset;`

### File Organization
- **Single responsibility**: One concern per file
- **Typical structure**: Header → Imports → Implementation → Exports
- **Separation of concerns**: keyframes, utilities, preset

---

## Architecture

**Simple structure** (2 files):
1. **Keyframes Layer** (`keyframes.ts`): 903 lines of Animate.css animations
2. **Integration Layer** (`index.ts`): PandaCSS preset with custom utilities

**Key files**:
- `src/index.ts` - Preset definition with utilities
- `src/keyframes.ts` - All Animate.css keyframe definitions

---

## Critical Rules (ALWAYS/NEVER)

### Immutability (CRITICAL)
- **ALWAYS** create new objects/arrays, **NEVER** mutate existing ones
- **FORBIDDEN**: Direct property assignment (`user.name = value`)

### Security (MANDATORY before ANY commit)
- **NEVER** hardcode secrets (API keys, passwords, tokens)
- **ALWAYS** use environment variables for sensitive data
- **ALWAYS** validate all user inputs

### Testing (MANDATORY)
- **ALWAYS** maintain 80% minimum test coverage
- **ALWAYS** use Test-Driven Development (TDD): Write test first, then implementation
- **FORBIDDEN**: Committing code without tests

### Code Quality
- **ALWAYS** handle errors with try/catch or defensive checks
- **FORBIDDEN**: `console.log` statements in production code
- **FORBIDDEN**: Deep nesting (>4 levels)
- **FORBIDDEN**: Functions >50 lines
- **FORBIDDEN**: Files >800 lines

### Git Workflow
- **ALWAYS** use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`
- **ALWAYS** test locally before committing
- **ALWAYS** create small, focused commits

---

## Anti-Patterns to Avoid

1. **Mutation**: Directly modifying objects/arrays
2. **Monolithic files**: Files >800 lines (keyframes.ts is 903 lines - exception for data)
3. **Incomplete error handling**: Missing defensive checks or try/catch
4. **Hardcoded values**: Magic numbers without constants/config
5. **Deep nesting**: More than 4 levels of indentation
6. **Large functions**: Functions >50 lines
7. **Console statements**: `console.log` in production code

---

## Animate.css Integration

### Available Animations
The preset includes all Animate.css animations:
- **Attention seekers**: bounce, flash, pulse, rubberBand, shakeX, shakeY, headShake, swing, tada, wobble, jello, heartBeat
- **Back entrances**: backInDown, backInLeft, backInRight, backInUp
- **Back exits**: backOutDown, backOutLeft, backOutRight, backOutUp
- **Bouncing entrances**: bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp
- **Bouncing exits**: bounceOut, bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp
- **Fading entrances**: fadeIn, fadeInDown, fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp, fadeInUpBig, fadeInTopLeft, fadeInTopRight, fadeInBottomLeft, fadeInBottomRight
- **Fading exits**: fadeOut, fadeOutDown, fadeOutDownBig, fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp, fadeOutUpBig, fadeOutTopLeft, fadeOutTopRight, fadeOutBottomRight, fadeOutBottomLeft
- **Flippers**: flip, flipInX, flipInY, flipOutX, flipOutY
- **Light speed**: lightSpeedInRight, lightSpeedInLeft, lightSpeedOutRight, lightSpeedOutLeft
- **Rotating entrances**: rotateIn, rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight
- **Rotating exits**: rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight
- **Specials**: hinge, jackInTheBox, rollIn, rollOut
- **Zooming entrances**: zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp
- **Zooming exits**: zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp
- **Sliding entrances**: slideInDown, slideInLeft, slideInRight, slideInUp
- **Sliding exits**: slideOutDown, slideOutLeft, slideOutRight, slideOutUp

### Custom Utilities

#### Popular Animation Utilities

The preset includes semantic utilities that encapsulate common animation patterns:

##### `animate`
Main utility with popular animation presets:

```tsx
<div className={css({ animate: 'fadeIn' })}>Fades in</div>
<div className={css({ animate: 'slideInUp' })}>Slides in from bottom</div>
<div className={css({ animate: 'bounce' })}>Bounces</div>
```

**Available presets**: fadeIn, fadeOut, slideInUp, slideInDown, bounceIn, zoomIn, rotateIn, flip, pulse, shake, tada, and 60+ more

##### `animateIn` / `animateOut`
Entrance and exit animations:

```tsx
<div className={css({ animateIn: 'fadeInUp' })}>
  Entrance animation
</div>

<div className={css({ animateOut: 'fadeOut' })}>
  Exit animation (opacity: 0 applied)
</div>
```

**Entrance animations**: fadeInUp, slideInLeft, bounceIn, zoomIn, rotateIn, flipInX  
**Exit animations**: fadeOut, slideOutRight, bounceOut, zoomOut, rotateOut, flipOutY

##### `animateOnHover`
Hover-triggered animations:

```tsx
<button className={css({ animateOnHover: 'pulse' })}>
  Pulses on hover
</button>

<div className={css({ animateOnHover: 'bounce' })}>
  Bounces on hover
</div>
```

**Available**: bounce, pulse, flash, shake, shakeX, shakeY, headShake, swing, tada, wobble, jello, heartBeat, rubberBand

##### `animateInfinite`
Infinite looping animations:

```tsx
<div className={css({ animateInfinite: 'pulse' })}>
  Pulses infinitely
</div>

<div className={css({ animateInfinite: 'bounce' })}>
  Bounces infinitely
</div>
```

##### `animateSpeed`
Animation duration presets:

```tsx
<div className={css({ animate: 'fadeIn', animateSpeed: 'fast' })}>
  Fast animation (500ms)
</div>
```

**Available speeds**: slower (3s), slow (2s), normal (1s), fast (500ms), faster (300ms)

##### `animateDelay`
Animation delay:

```tsx
<div className={css({ animate: 'fadeIn', animateDelay: '500ms' })}>
  Delayed animation
</div>
```

##### `animateCount`
Animation iteration count:

```tsx
<div className={css({ animate: 'bounce', animateCount: '3' })}>
  Bounces 3 times
</div>
```

#### Low-Level Utilities

##### `animationName`
Direct keyframe access with defaults:
- **Duration**: 1s
- **Fill mode**: both
- **Accessibility**: Respects `prefers-reduced-motion` (reduces to 1ms, single iteration)

```tsx
<div className={css({ animationName: 'bounce' })}>
  Bouncing element
</div>
```

##### `animationRepeat`
Controls animation iteration count:

```tsx
<div className={css({ 
  animationName: 'pulse',
  animationRepeat: 'infinite'
})}>
  Infinite pulse
</div>
```

### Accessibility Features
- **Automatic `prefers-reduced-motion` support**: Animations are reduced to 1ms duration when user prefers reduced motion
- **Out animations**: Automatically set `opacity: 0` for exit animations (animations with "Out" in name)

---

## Usage Examples

### Basic Usage

```ts
import { defineConfig } from '@pandacss/dev'
import preset from '@slurpyb/preset-animate-css'

export default defineConfig({
  presets: [preset],
})
```

### Simple Animations

```tsx
import { css } from '../styled-system/css'

function Card() {
  return (
    <div className={css({ animate: 'fadeInUp' })}>
      I fade in from bottom!
    </div>
  )
}
```

### Entrance/Exit Animations

```tsx
function Modal({ isOpen }) {
  return (
    <div className={css({ 
      animateIn: isOpen ? 'zoomIn' : undefined,
      animateOut: !isOpen ? 'zoomOut' : undefined
    })}>
      Modal content
    </div>
  )
}
```

### Hover Interactions

```tsx
function Button() {
  return (
    <button className={css({ 
      animateOnHover: 'pulse',
      animateSpeed: 'fast'
    })}>
      Hover me!
    </button>
  )
}
```

### Infinite Animations

```tsx
function LoadingSpinner() {
  return (
    <div className={css({ 
      animateInfinite: 'bounce',
      animateSpeed: 'slower'
    })}>
      Loading...
    </div>
  )
}
```

### Combining Utilities

```tsx
function Notification() {
  return (
    <div className={css({ 
      animate: 'slideInRight',
      animateSpeed: 'fast',
      animateDelay: '200ms'
    })}>
      New notification!
    </div>
  )
}
```

### Low-Level Control

```tsx
function CustomAnimation() {
  return (
    <div className={css({ 
      animationName: 'fadeInUp',
      animationRepeat: '3',
      animationSpeed: 'slow'
    })}>
      Fades in 3 times slowly
    </div>
  )
}
```

---

## Notes

- **No runtime dependencies**: Pure CSS keyframes
- **Full Animate.css parity**: All animations included
- **Accessibility-first**: Respects motion preferences
- **Type-safe**: Full TypeScript support
- **Zero configuration**: Works out of the box
- **Semantic utilities**: Popular use cases encapsulated

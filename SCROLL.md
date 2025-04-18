# 🎯 Scroll Animations in Motion

Framer Motion provides powerful tools for creating **scroll-based animations**, which fall under two broad categories:

---

## 🌀 Scroll Triggered Animations

### 🔍 What It Is:
- These animations are **triggered once** when an element enters the viewport.
- Think of it like “play once when seen”.

### 🧠 Great For:
- **Reveal-on-scroll** effects (text/images sliding or fading in)
- **Staggered animations** for content blocks
- Section transitions and page storytelling
- Interactive landing pages

### ✅ Use When:
- You want an animation to run **once** when the element scrolls into view.
- You don’t need continuous updates based on scroll position.
- You want to trigger animation **only when visible**, not tied to scroll progress.

### ❌ Avoid When:
- You need scroll-synced interactions (e.g., parallax, scroll progress bar).
- You want continuous feedback or transformation based on how far the user has scrolled.

---

### ✨ How to Use:

#### 1. `whileInView` prop

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Reveal Me on Scroll!
</motion.div>
```

#### 🔧 `viewport` options:

| Option        | Description                                          |
|---------------|------------------------------------------------------|
| `once: true`  | Animate only the **first time** it comes into view. |
| `amount: 0.5` | Start animation when **50%** of element is visible. |

---

### 📚 Learnings:
- Use `whileInView` for **declarative reveal** effects.
- `viewport` gives you fine-tuned control over **when** the animation triggers.
- Add `initial` and `transition` to customize entry.
- Combine with `staggerChildren` for beautiful scroll reveals.

---

## 🔄 Scroll Driven Animations

### 🔍 What It Is:
- These animations **respond continuously** to scroll position.
- You **map scroll progress** to transform properties like `scale`, `opacity`, or `x/y` values.
- It's more **interactive**, fluid, and immersive.

### 🧠 Great For:
- **Parallax effects**
- Scroll-based scaling, skewing, fading, rotating
- Scroll progress bars
- Horizontal scrolling experiences

### ✅ Use When:
- You want **continuous transformation** as the user scrolls.
- You’re syncing animation to scroll progress.
- You want **precise control** over movement, timing, and depth.

### ❌ Avoid When:
- You just want to reveal elements once.
- You need quick and simple animations (prefer `whileInView`).

---

## ✨ How to Use Scroll-Driven Animations

Framer Motion provides two hooks to power scroll-based animations:

---

### 1. `useScroll`

Tracks the scroll progress and gives you reactive values to animate with.

```tsx
const { scrollYProgress } = useScroll();
```

- `scrollY` → raw vertical scroll value
- `scrollYProgress` → normalized `0 to 1` progress between target element's position and viewport

---

### 2. `useTransform`

Map scroll progress to transform styles like scale, opacity, x, y, rotate.

```tsx
const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
```

---

### 🔥 Example: Scroll-Based Scale + Fade

```tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollScaleFade() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="h-[200vh] flex items-center justify-center">
      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        className="w-40 h-40 bg-indigo-500 rounded-xl shadow-xl"
      />
    </div>
  );
}
```

---

### 📚 Learnings:

- `useScroll` + `useTransform` enables smooth scroll-driven effects.
- Always wrap the element in a `ref` and pass it to `useScroll` when targeting specific sections.
- You can customize `offset` to decide when the scroll effect starts and ends.
- Perfect for storytelling pages or animated transitions on scroll.

---

### 🧪 More Use Cases:

| Effect                    | Hook(s) Used                        | Description                                 |
|--------------------------|-------------------------------------|---------------------------------------------|
| Scroll Reveal Text       | `whileInView` + `viewport`          | Fade-in text as user scrolls                |
| Parallax Image           | `useScroll` + `useTransform`        | Background scrolls slower than foreground   |
| Scale on Scroll          | `useScroll` + `useTransform`        | Element grows based on scroll depth         |
| Scroll Progress Bar      | `scrollYProgress` + `scaleX`        | Top bar showing how much page is scrolled   |
| Section Color Shift      | `useTransform(scrollYProgress)`     | Change background color with scroll         |

---

## ✅ Summary — When to Use What?

| Type                    | Use When                                                   | Hook / Prop             |
|-------------------------|------------------------------------------------------------|-------------------------|
| Triggered on Enter View | Animate once on visibility                                | `whileInView`, `viewport` |
| Continuous Scroll-Based | Animate based on scroll progress                          | `useScroll`, `useTransform` |
| Momentum/Swipe Feel     | React to drag + velocity                                   | `useVelocity`, `useMotionValue` |
| Natural Follow          | Smooth, physics-based transformation                      | `useSpring`              |

---

## 🚫 Where Not to Use Scroll Animations

- ❌ On pages where performance is a concern (too many scroll-based anims = jank).
- ❌ Overuse of scroll animations can distract or confuse users.
- ❌ Avoid when your target audience prefers minimal interactions (e.g., enterprise dashboards).

---

## 💡 Bonus Tips:

- Combine `useScroll` with `motion.div layout` for powerful scroll transitions.
- Use `staggerChildren` inside `whileInView` containers for beautiful scroll reveals.
- Use `intersection observer` manually if you need pixel-perfect control (though `whileInView` handles 90% cases).
- Prefer `viewport: { once: true }` for performance and simplicity unless looping is required.

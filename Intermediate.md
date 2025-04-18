
# 🎯 Intermediate Motion Notes

## ✅ Hooks : 

### 1. `useMotionValue`

#### 🔍 What It Does:

The `useMotionValue` hook enables **fine-grained control** over animations. It lets you manually read and update animated values and tie them to gestures, scroll events, or custom logic.

Useful for:

- Real-time updates (e.g., drag, scroll)
- Animating non-Motion components
- Passing values between elements

#### 🧠 Syntax:

```tsx
const x = useMotionValue(0);
```

#### 🧪 Example – Draggable Box with Live Shadow:

```tsx
"use client";

import { motion, useMotionValue, useTransform } from "motion/react";

export default function DragBox() {
  const x = useMotionValue(0);
  const boxShadow = useTransform(
    x,
    [-100, 100],
    ["0px 5px 15px rgba(0, 0, 0, 0.2)", "0px 5px 25px rgba(0, 0, 0, 0.5)"]
  );

  return (
    <motion.div
      drag="x"
      style={{ x, boxShadow }}
      className="w-32 h-32 bg-blue-500 rounded-xl mx-auto mt-20 cursor-grab"
    />
  );
}
```

#### 📚 Learnings:

- `useMotionValue` gives **direct access to animation values**.
- Use it when you want to track a value and update other properties based on it (e.g., `useTransform`).
- Helpful when animating **custom components or non-animatable props**.

#### 🧠 Why Not useState for Animation in place of useMotionValue?

- `useState` causes a **re-render every** time the value changes.
- Bad for performance with high-frequency updates like dragging, mouse movement, scroll, etc.
- Motion values update on the animation frame, **without needing to re-render the component.**
- Super smooth and more performant.

---

### 2. `useSpring`

#### 🔍 What It Does:

`useSpring` wraps a `MotionValue` and animates it with a **spring-based physics model**. It creates a smooth, natural feel for transitions.

Great for:

- Smooth-follow behavior
- Inertia-like motion
- Springy animations on change

#### 🧠 Syntax:

```tsx
const springX = useSpring(x, { stiffness: 200, damping: 20 });
```

#### 🧪 Example – Smooth Follow Drag:

```tsx
"use client";

import { motion, useMotionValue, useSpring } from "motion/react";

export default function SpringBox() {
  const x = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 300, damping: 25 });

  return (
    <motion.div
      drag="x"
      style={{ x: smoothX }}
      className="w-32 h-32 bg-green-500 rounded-xl mx-auto mt-20 cursor-grab"
    />
  );
}
```

#### 📚 Learnings:

- `useSpring` is best when you want **smooth transitions on dynamic input**, such as dragging or scroll-based motion.
- Can be combined with other hooks like `useTransform`.
- Adjusting `stiffness`, `damping`, and `mass` changes the spring behavior.

---


## 🧩 3. `useTransform`

The `useTransform` hook from **Framer Motion** is used to create derived, reactive values based on a `MotionValue`. It’s incredibly useful when you want to **map one range of values to another**, making it perfect for scroll-based effects, drag-based transformations, or creating synchronized animations.


### 📌 What does `useTransform` do?

It **transforms** one motion value into another.

Think of it as a smart mapping:
- You give it a motion value (like `x` from dragging),
- an input range (where the value starts and ends),
- and an output range (what you want to turn that into, like scale, opacity, rotation, etc).

It continuously tracks changes in the original `MotionValue` and updates the new one reactively.


### ⚙️ Syntax

```ts
const derivedValue = useTransform(
  motionValue,        // original MotionValue
  [inputStart, inputEnd],   // input range
  [outputStart, outputEnd]  // output range
);
```

You can also use a function-based version:

```ts
const newValue = useTransform(motionValue, (latest) => latest * 2);
```


### 🎯 Real-world Use Cases

- Make an element **scale up or down** based on drag distance.
- Animate **background color** when an element is moved.
- Change **opacity or blur** based on scroll.
- Rotate or skew components on interaction.


### 📘 Learnings & Key Points

| Concept | Insight |
|--------|---------|
| Reactive | `useTransform` updates the variable value automatically with the base `MotionValue`. |
| Declarative | You don’t need `useEffect` or listeners. |
| Smooth Mapping | Animations feel fluid and controlled. |
| Chainable | You can transform multiple values off a single source. |


### ✅ Example: Drag to Scale and Change Color

```tsx
"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function TransformExample() {
  const x = useMotionValue(0);

  const scale = useTransform(x, [-200, 200], [0.5, 1.5]);
  const backgroundColor = useTransform(x, [-200, 0, 200], ["#f43f5e", "#3b82f6", "#10b981"]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        drag="x"
        style={{ x, scale, backgroundColor }}
        className="w-32 h-32 rounded-xl flex items-center justify-center text-white font-bold shadow-xl cursor-grab"
      >
        Drag Me
      </motion.div>
    </div>
  );
}
```


### 🧠 What this does:
- You can drag the box **horizontally** (`drag="x"`).
- As you drag:
  - The `x` value updates in real-time.
  - `scale` grows from 0.5 → 1.5 depending on distance.
  - `backgroundColor` smoothly shifts from red → blue → green.

---

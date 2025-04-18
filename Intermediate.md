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

#### ✅ Use When:
- You want to **track gestures** like drag, scroll, or mouse move.
- You need **smooth real-time updates** without re-render.
- You want to **sync multiple elements** or use complex `useTransform`.

#### 🛠️ Real World Example:
- Custom cursor tracking
- Real-time animated charts
- Parallax effect on mouse move
- Live shadows on draggable elements


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

#### ✅ Use When:
- You want **natural motion** (like easing into a new position).
- You need an object to follow another with **lag/spring feel**.
- You're simulating **physics-based motion**.

#### 🛠️ Real World Example:
- Smoothly following a cursor (lag effect)
- Bouncy drag + release animation
- Springy tab indicator or sidebar toggle



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
  motionValue, // original MotionValue
  [inputStart, inputEnd], // input range
  [outputStart, outputEnd] // output range
);
```

You can also use a function-based version:

```ts
const newValue = useTransform(motionValue, (latest) => latest * 2);
```

#### ✅ Use When:
- You need to **derive styles** (like `scale`, `opacity`, `rotate`) from another motion value.
- You want **scroll-based animations** (e.g., fade on scroll).
- You want to map a value like `x` to any effect (color, shadow, etc).


### 🎯 Real-world Use Cases

- Make an element **scale up or down** based on drag distance.
- Animate **background color** when an element is moved.
- Change **opacity or blur** based on scroll.
- Rotate or skew components on interaction.
- Scroll-triggered fades or scales
- Interactive sliders that affect multiple outputs



### 📘 Learnings & Key Points

| Concept        | Insight                                                                              |
| -------------- | ------------------------------------------------------------------------------------ |
| Reactive       | `useTransform` updates the variable value automatically with the base `MotionValue`. |
| Declarative    | You don’t need `useEffect` or listeners.                                             |
| Smooth Mapping | Animations feel fluid and controlled.                                                |
| Chainable      | You can transform multiple values off a single source.                               |


### ✅ Example: Drag to Scale and Change Color

```tsx
"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function TransformExample() {
  const x = useMotionValue(0);

  const scale = useTransform(x, [-200, 200], [0.5, 1.5]);
  const backgroundColor = useTransform(
    x,
    [-200, 0, 200],
    ["#f43f5e", "#3b82f6", "#10b981"]
  );

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


### 4. `useVelocity`

#### 🔍 What It Does:

`useVelocity` tracks the **velocity** (speed and direction) of a `MotionValue`. It returns a new `MotionValue` that updates in real-time as the source value changes.

---

#### ✅ Use When:
- You want to create **momentum-based effects** after dragging.
- You want to detect **fast movements** to trigger an effect.
- For swipe gestures, **throw animations**, or **inertia-based motion** (like Tinder swipe or carousels).

---

#### ⚙️ Syntax:
```ts
const x = useMotionValue(0);
const velocity = useVelocity(x);
```

---

### 💻 Example: Swipe-to-dismiss with Velocity Threshold

```tsx
'use client';

import { motion, useMotionValue, useVelocity, animate } from 'framer-motion';
import { useEffect } from 'react';

export default function SwipeCard() {
  const x = useMotionValue(0);
  const velocity = useVelocity(x);

  useEffect(() => {
    const unsubscribe = velocity.on('change', (latestVelocity) => {
      if (Math.abs(latestVelocity) > 1000) {
        animate(x, latestVelocity > 0 ? 1000 : -1000, {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        });
      }
    });

    return () => unsubscribe();
  }, [velocity]);

  return (
    <motion.div
      drag="x"
      style={{ x }}
      className="w-64 h-40 bg-purple-600 text-white flex items-center justify-center text-xl font-bold rounded-2xl shadow-lg cursor-pointer"
    >
      Swipe Me Fast
    </motion.div>
  );
}
```

#### 💬 What’s Happening:
- Drag the card.
- If the **velocity** is high (fast swipe), it automatically flies off the screen.
- We're listening to velocity changes with `.on('change')` to trigger animations.

---

### 🎓 Learnings

- `useVelocity` helps you build **physics-aware** interactions.
- It’s especially useful when combined with drag, scroll, or gesture-based `MotionValues`.
- Unlike `useSpring` (which smooths the value), `useVelocity` observes how fast it's changing.
- Can be chained with `useTransform`, `useSpring`, or event listeners for custom control.


---

## 🔄 When To Use What:

| Hook             | Best For                                         | Real World Use Case                            |
|------------------|--------------------------------------------------|------------------------------------------------|
| `useMotionValue` | Real-time animations, gestures, syncing elements | Drag-to-reveal menu, parallax cursor effect    |
| `useSpring`      | Smooth transitions, spring physics               | Tab indicators, modal bounce on open           |
| `useTransform`   | Mapping values for style changes                 | Scroll-to-fade or scale effects                |
| `useVelocity`    | Detecting speed, inertia, swipe gestures         | Tinder swipe cards, carousel momentum          |


---

## ✅ Bonus Ideas (Practical)

| Animation Type      | Hook(s) Used                              | Notes |
|---------------------|-------------------------------------------|-------|
| Custom Cursor       | `useMotionValue` + `mouse move` listener  | Smooth cursor follow |
| Scroll Reveal       | `useScroll` + `useTransform`              | Fade/slide on scroll |
| Parallax Cards      | `useMotionValue`, `useTransform`          | 3D feel on hover     |
| Inertia Swipe Cards | `useMotionValue`, `useVelocity`           | Natural swipe + throw away |
| Tooltip Delay Hover | `useMotionValue` + `useSpring`            | Laggy follow tooltips |

---

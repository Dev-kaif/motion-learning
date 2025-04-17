
---

# Framer Motion BASIC Notes 


If you're using client-side rendering (like in a standard React app):

```tsx
import { motion } from "motion/react";
```
If you're using server components (like in Next.js App Router with RSC):

```tsx
import * as motion from "motion/react-client";
```

---

## `initial`, `animate`, `exit` Props

```tsx
<motion.div
  initial="" 
  animate="" 
  exit="" 
>
```

🔹 `initial`: Defines the starting state of the animation when the component first mounts.  
&nbsp;&nbsp;&nbsp;&nbsp;- This is how the element looks before the animation begins.

🔹 `animate`: Defines the target state. The component will animate *from* `initial` *to* `animate`.  
&nbsp;&nbsp;&nbsp;&nbsp;- Whenever the component state or props change, it will animate to this state.

🔹 `exit`: Defines the animation for when the component is removed (unmounted) from the DOM.  
&nbsp;&nbsp;&nbsp;&nbsp;- Especially useful with conditional rendering and components like `<AnimatePresence>`.

💡 **Learnings & Tips:**
- You must wrap exiting animations (using `exit`) with `<AnimatePresence>`.
- These props accept either objects (e.g. `{ opacity: 0 }`) or variant names (if you're using variants).
- `initial`, `animate`, and `exit` help control the lifecycle animation: enter → update → exit.
- You can also define `transition` to control duration, delay, easing, etc.
- Useful for page transitions, modals, dropdowns, etc.

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  Fades in and out!
</motion.div>
```

---

## 🔄 Transform-based animations using Motion

```tsx
<motion.div
  animate={{
    x: 100,       // Moves element 100px to the right (on x-axis)
    x: -100,      // Moves element 100px to the Left (on x-axis)

    y: -100,      // Moves element 100px up (on y-axis)
    y: 100,       // Moves element 100px down (on y-axis)

    rotate: 45,   // Rotates element 45 degrees clockwise
    rotateX: 45,  // Rotates along the X-axis (3D effect)
    rotateY: 45,  // Rotates along the Y-axis (3D effect)

    scale: 1.5,   // Scales uniformly by 1.5x
    scaleX: 2,    // Scales width (horizontally) by 2x (on x-axis)
    scaleY: 2,    // Scales height (vertically) by 2x (on y-axis)

    skew: 20,     // Skews element by 20 degrees
    skewX: 20,    // Skews element along the X-axis by 20 degrees
    skewY: 20     // Skews element along the Y-axis by 20 degrees
  }}
/>
```

- `x` and `y` are shorthand for `translateX` and `translateY`.
- `rotate`, `scale`, and `skew` help create powerful motion effects.
- `rotateX` and `rotateY` give a 3D look; best used with perspective CSS.

---

## 🎬 Transition Properties in Framer Motion

🔹 **duration**:  
Defines how long the animation takes to complete (in seconds).  
Example: `duration: 0.5` → animation lasts half a second.

🔹 **delay**:  
Waits for a specified time before the animation starts.  
Example: `delay: 0.3` → animation starts after 300ms.

🔹 **ease** (easing):  
Controls the speed curve of the animation (how it accelerates/decelerates).  
Can be a string or custom array.

✅ Common `ease` values:
- `"linear"`
- `"easeIn"`
- `"easeOut"`
- `"easeInOut"`
- `[0.42, 0, 0.58, 1]` (custom cubic bezier)

```tsx
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
/>
```

🧠 Learnings & Tips:
- You can also control `type: "spring"` or `"tween"` inside `transition`.
- Customize per property:

```tsx
transition: {
  x: { duration: 0.3 },
  opacity: { duration: 1 }
}
```

---

## 🎞️ Keyframes in Framer Motion

- Animate through multiple values using arrays.

```tsx
<motion.div
  animate={{ 
    scale: [1, 2, 1, 3],
    rotate: [30, 50, 60]
  }}
  transition={{ duration: 4 }}
/>
```

⏱️ Optional `times` array:

```tsx
transition={{
  duration: 4,
  times: [0, 0.3, 0.6, 1]
}}
```

Looping:

```tsx
transition={{
  duration: 4,
  repeat: Infinity,
  repeatType: "reverse"
}}
```

---

## 🎭 Variants in Framer Motion

Variants are reusable animation presets.

```tsx
const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export function Home() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Hello Motion!
    </motion.div>
  );
}
```

🧠 Learnings & Tips:
- Scalable and readable animation logic.
- Works with nested flows using `initial`/`animate` on parents and children.

---

## 🖱️ Gesture Animations in Framer Motion

### 1️⃣ whileHover  
Triggered on mouse hover.

### 2️⃣ whileTap  
Triggered during tap/click.

### 3️⃣ drag  
Enables dragging interaction.

```tsx
<motion.div
  whileHover={{ opacity: 1, scale: 1.2 }}
  whileTap={{ rotate: "45deg" }}
  drag
  whileDrag={{ scale: 0.8, backgroundColor: "red" }}
  style={{
    width: 150,
    height: 150,
    backgroundColor: "#60a5fa",
    borderRadius: 20,
    margin: "2rem auto"
  }}
/>
```

More drag customization:

```tsx
<motion.div
  drag
  dragConstraints={{ top: 0, left: 0, right: 100, bottom: 100 }}
  dragElastic={0.5}
/>
```

---

## 🌟 Stagger Animations in Framer Motion

### Animate child elements one-by-one with delays.

```tsx
const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function StaggeredList() {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      style={{ listStyle: "none", padding: 0 }}
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          variants={childVariants}
          style={{
            marginBottom: "1rem",
            background: "#4ade80",
            padding: "1rem",
            borderRadius: "10px",
            textAlign: "center"
          }}
        >
          Item {index + 1}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

🧠 Learnings & Tips:
- `staggerChildren` = delay between each child.
- `delayChildren` = delay before starting.
- Children inherit animation states from parent.
- Combine with `AnimatePresence` for exit animations.
- Use `staggerDirection: -1` to reverse animation order.

---
```

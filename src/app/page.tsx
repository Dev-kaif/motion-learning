
export default function Page() {
  return <div></div>;
}

// If you're using client-side rendering (like in a standard React app):
// import { motion } from "motion/react";

// If you're using server components (like in Next.js App Router with RSC):
//  import * as motion from "motion/react-client";

// --------------------------------------------------------------------------------------------------

/* 
<motion.div
  initial="" 
  animate="" 
  exit="" 
>

🔹 `initial`: Defines the starting state of the animation when the component first mounts.
    - This is how the element looks before the animation begins.

🔹 `animate`: Defines the target state. The component will animate *from* `initial` *to* `animate`.
    - Whenever the component state or props change, it will animate to this state.

🔹 `exit`: Defines the animation for when the component is removed (unmounted) from the DOM.
    - Especially useful with conditional rendering and components like `<AnimatePresence>`.

💡 Learnings & Tips:
- You must wrap exiting animations (using `exit`) with `<AnimatePresence>`.
- These props accept either objects (e.g. `{ opacity: 0 }`) or variant names (if you're using variants).
- `initial`, `animate`, and `exit` help control the lifecycle animation: enter → update → exit.
- You can also define `transition` to control duration, delay, easing, etc.
- Useful for page transitions, modals, dropdowns, etc.

Example:
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  Fades in and out!
</motion.div>

*/
// ----------------------------------------------------------------------------------------------------------------------

/*

🔄 Transform-based animations using Motion

{
   <motion.div
  animate={{
    x: 100,       = Moves element 100px to the right (on x-axis)
    x: -100,      = Moves element 100px to the Left (on x-axis)

    y: -100,      = Moves element 100px up (on y-axis)
    y: 100,       = Moves element 100px down (on y-axis)


    rotate: 45,   = Rotates element 45 degrees clockwise
    rotateX: 45,  = Rotates along the X-axis (3D effect)
    rotateY: 45,  = Rotates along the Y-axis (3D effect)

    scale: 1.5,   = Scales uniformly by 1.5x
    scaleX: 2,    = Scales width (horizontally) by 2x (on x-axis)
    scaleY: 2,    = Scales height (vertically) by 2x (on y-axis)
    
    skew: 20     = Skews element by 20 degrees
    skewX: 20,    = Skews element along the X-axis by 20 degrees
    skewY: 20     = Skews element along the Y-axis by 20 degrees

  }}
>

}

- `x` and `y` are shorthand for `translateX` and `translateY`.
- `rotate`, `scale`, and `skew` help create powerful motion effects.
- `rotateX` and `rotateY` give a 3D look; best used with perspective CSS.

*/

// ----------------------------------------------------------------------------------------------------------------------

/* 

🎬 Transition Properties in Framer Motion:


🔹 duration:
- Defines how long the animation takes to complete (in seconds).
- Example: `duration: 0.5` → animation lasts half a second.

🔹 delay:
- Waits for a specified time before the animation starts.
- Example: `delay: 0.3` → animation starts after 300ms.

🔹 ease (easing):
- Controls the speed curve of the animation (how it accelerates/decelerates).
- Can be a string or custom array.

✅ Common ease values:
- `"linear"` – constant speed (boring, rarely used).
- `"easeIn"` – starts slow, ends fast.
- `"easeOut"` – starts fast, ends slow (great for exit animations).
- `"easeInOut"` – starts and ends slow (feels smooth).
- Custom: `[0.42, 0, 0.58, 1]` (cubic bezier)

🧪 Example:

<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
/>

🧠 Learnings & Tips:
- You can also control `type: "spring"` or `"tween"` inside `transition`.
- For physics-like motion, try `type: "spring"` with `stiffness`, `damping`, etc.
- Transitions apply per property by default, but can be fine-tuned per key:

  transition: {
    x: { duration: 0.3 },
    opacity: { duration: 1 }
  }

- These settings give your animations character, rhythm, and emotion.

*/

// ----------------------------------------------------------------------------------------------------------------------

/* 

🎞️ Keyframes in Framer Motion:

- Instead of animating from one value to another, we can animate through multiple values using arrays 
— this creates **keyframe-based animations**.

🧩 How it works:
- Any animatable property (e.g., `scale`, `rotate`, `x`, `opacity`) can accept an array of values.
- These values are played in sequence over the duration of the animation.
- If no `times` array is provided, Framer Motion divides the total duration equally across all keyframes.

Example:
<motion.div
  animate={{ 
    scale: [1, 2, 1, 3],   // Animates through scale values: 1 → 2 → 1 → 3
    rotate: [30, 50, 60]   // Animates through rotation: 30° → 50° → 60°
  }}
  transition={{ duration: 4 }}
/>

⏱️ Optional: Add `times` array to control *when* each keyframe occurs (values between 0 and 1):

transition={{
  duration: 4,
  times: [0, 0.3, 0.6, 1]  // Fine-grained control over keyframe timing
}}

🧠 Learnings & Tips:
- Great for looping animations, dynamic effects, or mimicking CSS `@keyframes`.
- Combine with `repeat`, `repeatType`, `repeatDelay` for looping behavior.
- Can be used with `initial` and `exit` too.
- Works well with `backgroundColor`, `opacity`, `transform` properties, etc.

transition={{
  duration: 4,
  repeat: Infinity,
  repeatType: "reverse"
}}
- This setup will loop the keyframe animation back and forth forever.

*/

// ----------------------------------------------------------------------------------------------------------------------


/*

🎭 Variants in Framer Motion:

Variants are a powerful way to organize your animation logic by defining **named states** for a component’s animations.

📦 What are Variants?
- Think of them as reusable animation presets (like "hidden", "visible", "hover", etc.).
- Instead of repeating animation values, you define a `variants` object with multiple named states.

🛠️ Defining Variants:
- Each key in the `variants` object represents a different animation state.
- Each state contains the styles/properties you want to animate to.

🧪 Using Variants:
- Pass the `variants` object to the motion component.
- Use `initial`, `animate`, and `exit` props to switch between the defined states by name.

✅ Example:

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export function Home() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"    // How it appears on mount
      animate="visible"   // Animate to this state
      exit="exit"         // Animate on unmount (used with AnimatePresence)
    >
      Hello Motion!
    </motion.div>
  );
}

🧠 Learnings & Tips:

- Variants make animations **scalable**, **readable**, and **maintainable**.
- Combine them with **conditional rendering** for smooth exit animations.
- You can even nest variants and control **parent-child animation flows** using `variants` + `initial`/`animate` on groups.

*/

// ----------------------------------------------------------------------------------------------------------------------


/*

/*

🖱️ Gesture Animations in Framer Motion

Framer Motion lets you add interactivity through gestures like hover, tap, and drag 
— perfect for buttons, cards, modals, and draggable UIs.

1️⃣ whileHover:
- Triggered when the user hovers over the element.
- Great for hover effects like scale-up, highlight, or shadows.

2️⃣ whileTap:
- Triggered while pressing (click or touch).
- Useful for button click feedback (e.g. scaling down, rotating, changing color).

3️⃣ drag:
- Enables dragging behavior on the component.
- Set `drag` to `true` to make the element draggable.
- Combine with `whileDrag` to animate during dragging.

✅ Example:

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

⚙️ More Drag Customization:
- `drag="x"` or `drag="y"` to restrict direction.
- `dragConstraints` to limit how far it can be dragged.
- `dragElastic`, `dragSnapToOrigin` for fine-tuning behavior.

<motion.div
  drag
  dragConstraints={{ top: 0, left: 0, right: 100, bottom: 100 }}
  dragElastic={0.5}
/>

🧠 Learnings & Tips:
- You can **combine gestures** (e.g. `whileHover` + `whileTap`) for a fluid UX.
- Framer handles **spring physics** out-of-the-box while dragging.
- Use `style={{ cursor: "grab" }}` and change it to `"grabbing"` for better UX.

*/


// ----------------------------------------------------------------------------------------------------------------------



/**
🌟 Stagger Animations in Framer Motion

Staggering lets child components animate one-by-one with a delay — great for **entrance animations** and keeping things ✨polished✨.

🧱 Basic Concept:
- Use a **parent variant** with `staggerChildren` in the `transition` property.
- Apply `variants` to both the parent and each child.
- Each child will animate with a slight delay between them.
- Inheritance: Child components automatically inherit the initial and animate states from the parent if they are not explicitly defined.

✅ Example:


// Parent variants define the overall animation and how children behave

const parentVariants = {
  hidden: { opacity: 0 }, // initial state of the parent
  visible: {
    opacity: 1, // visible state
    transition: {
      staggerChildren: 0.2, // 🔁 Delay between children animations
      delayChildren: 0.5    // ⏱️ Wait before starting first child
    }
  }
};

// Each child defines how it appears in 'hidden' and 'visible' states

const childVariants = {
  hidden: { opacity: 0, y: 20 }, // starts transparent and moved down
  visible: { opacity: 1, y: 0 }  // animates to fully visible and in place
};

export function StaggeredList() {
  return (
    <motion.div
      variants={parentVariants}   // 👪 Parent controls children's animation timing
      initial="hidden"            // 📦 Initial state for parent and children
      animate="visible"           // 🚀 Final state to animate to
      style={{ listStyle: "none", padding: 0 }}
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          variants={childVariants} // 🧒 Child uses variant to respond to parent's animation flow
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

🧠 Learnings & Tips:
- `staggerChildren`: sets delay **between** each child’s animation.
- `delayChildren`: adds a **delay before the first child** animates.
- Even though children don't have `initial` or `animate`, they **inherit** it from the parent.
- Without `variants` on the child, it won’t animate even if parent sends states.
- Combine with `AnimatePresence` for dynamic enter/exit animations.
- Use `staggerDirection: -1` to reverse the animation order.
*/




// ----------------------------------------------------------------------------------------------------------------------





export default function Page() {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto bg-gray-900 text-gray-100 font-mono">
      {/* Import Section */}
      <div className="mb-16 p-6 bg-gray-800 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Import Instructions</h2>
        <pre className="text-gray-300 whitespace-pre-wrap bg-gray-700 p-4 rounded-lg">
          {`// If you're using client-side rendering (like in a standard React app):
// import { motion } from "motion/react";

// If you're using server components (like in Next.js App Router with RSC):
// import * as motion from "motion/react-client";`}
        </pre>
      </div>

      {/* Core Animation Props */}
      <section className="mb-16 p-6 bg-gray-800 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Core Animation Props</h2>
        <pre className="mb-6 p-4 bg-gray-700 rounded-lg text-cyan-300 border border-gray-600">
          {`<motion.div
  initial="" 
  animate="" 
  exit="" 
>`}
        </pre>
        
        <div className="space-y-4 text-gray-300">
          <div className="flex items-start gap-3 bg-gray-700 p-4 rounded-lg">
            <span className="text-xl text-blue-400">🔹</span>
            <div>
              <p className="font-semibold text-blue-400">initial:</p>
              <p>Defines the starting state of the animation when the component first mounts.</p>
              <p className="text-sm text-gray-400 mt-1">- This is how the element looks before the animation begins.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-700 p-4 rounded-lg">
            <span className="text-xl text-blue-400">🔹</span>
            <div>
              <p className="font-semibold text-blue-400">animate:</p>
              <p>Defines the target state. The component will animate *from* `initial` *to* `animate`.</p>
              <p className="text-sm text-gray-400 mt-1">- Whenever the component state or props change, it will animate to this state.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-gray-700 p-4 rounded-lg">
            <span className="text-xl text-blue-400">🔹</span>
            <div>
              <p className="font-semibold text-blue-400">exit:</p>
              <p>Defines the animation for when the component is removed (unmounted) from the DOM.</p>
              <p className="text-sm text-gray-400 mt-1">- Especially useful with conditional rendering and components like `AnimatePresence`.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-lg font-semibold text-green-400 mb-3">💡 Learnings & Tips:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>You must wrap exiting animations (using `exit`) with `&quot;AnimatePresence&quot;`</li>
            <li>These props accept either objects (e.g. &quot; opacity: 0&quot; ) or variant names (if you&apos;re using variants)</li>
            <li>`initial`, `animate`, and `exit` help control the lifecycle animation: enter → update → exit</li>
            <li>You can also define `transition` to control duration, delay, easing, etc.</li>
            <li>Useful for page transitions, modals, dropdowns, etc.</li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Example:</h3>
          <pre className="text-cyan-300">
            {`<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  Fades in and out!
</motion.div>`}
          </pre>
        </div>
      </section>

      {/* Transform Animations */}
      <section className="mb-16 p-6 bg-gray-800 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">🔄 Transform-based Animations</h2>
        <pre className="mb-6 p-4 bg-gray-700 rounded-lg text-cyan-300 border border-gray-600">
          {`<motion.div
  animate={{
    x: 100,       // Right 100px
    x: -100,      // Left 100px
    y: -100,      // Up 100px
    y: 100,       // Down 100px
    rotate: 45,   // Rotate 45°
    rotateX: 45,  // 3D X-axis
    rotateY: 45,  // 3D Y-axis
    scale: 1.5,   // Uniform scale
    scaleX: 2,    // X-axis scale
    scaleY: 2,    // Y-axis scale
    skew: 20,     // Skew 
    skewX: 20,    // X-skew
    skewY: 20     // Y-skew
  }}
>`}
        </pre>

        <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Key Points</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>`x` and `y` are shorthand for `translateX` and `translateY`</li>
            <li>`rotate`, `scale`, and `skew` create powerful motion effects</li>
            <li>`rotateX` and `rotateY` give 3D look (use with perspective CSS)</li>
          </ul>
        </div>
      </section>

      {/* Transition Properties */}
      <section className="mb-16 p-6 bg-gray-800 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">🎬 Transition Properties</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
            <h3 className="text-lg font-semibold text-green-400 mb-3">Core Properties</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-blue-400">duration:</span>
                <span className="ml-2">Animation time in seconds (e.g., 0.5)</span>
              </li>
              <li>
                <span className="font-semibold text-blue-400">delay:</span>
                <span className="ml-2">Delay before animation starts (e.g., 0.3)</span>
              </li>
              <li>
                <span className="font-semibold text-blue-400">ease:</span>
                <span className="ml-2">Speed curve control</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">✅ Ease Values</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>`&quot;linear&quot;` - Constant speed</li>
              <li>`&quot;easeIn&quot;` - Slow start</li>
              <li>`&quot;easeOut&quot;` - Fast start</li>
              <li>`&quot;easeInOut&quot;` - Smooth curve</li>
              <li>Custom cubic bezier arrays</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-lg font-semibold text-green-400 mb-3">🧠 Learnings & Tips</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Use `type: &quot;spring&quot;` for physics-based motion</li>
            <li>Per-property transitions:
              <pre className="mt-2 text-cyan-300">
                {`transition: {
  x: { duration: 0.3 },
  opacity: { duration: 1 }
}`}
              </pre>
            </li>
            <li>Spring options: stiffness, damping, mass</li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Example</h3>
          <pre className="text-cyan-300">
            {`<motion.div
  animate={{ x: 100 }}
  transition={{ 
    duration: 0.5, 
    delay: 0.2, 
    ease: "easeInOut" 
  }}
/>`}
          </pre>
        </div>
      </section>

      {/* Keyframes Section */}
      <section className="mb-16 p-6 bg-gray-800 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">🎞️ Keyframes</h2>
        <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
          <pre className="text-cyan-300">
            {`<motion.div
  animate={{ 
    scale: [1, 2, 1, 3],
    rotate: [30, 50, 60]
  }}
  transition={{ 
    duration: 4,
    times: [0, 0.3, 0.6, 1],
    repeat: Infinity,
    repeatType: "reverse"
  }}
/>`}
          </pre>
        </div>

        <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Animate through multiple values using arrays</li>
            <li>Times array controls keyframe timing (0-1)</li>
            <li>Combine with repeat for looping</li>
            <li>Works with any animatable property</li>
          </ul>
        </div>
      </section>

      {/* Variants Section */}
      <section className="mb-16 p-6 bg-gray-800 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">🎭 Variants</h2>
        <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
          <pre className="text-cyan-300">
            {`const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  exit="exit"
>`}
          </pre>
        </div>

        <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-lg font-semibold text-green-400 mb-3">🌟 Benefits</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Reusable animation states</li>
            <li>Cleaner component code</li>
            <li>Parent-child coordination</li>
            <li>Better state management</li>
          </ul>
        </div>
      </section>

      {/* Gestures Section */}
      <section className="mb-16 p-6 bg-gray-800 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">🖱️ Gestures</h2>
        <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
          <pre className="text-cyan-300">
            {`<motion.div
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  drag
  dragConstraints={{ left: 0, right: 0 }}
  style={{ cursor: 'grab' }}
/>`}
          </pre>
        </div>

        <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Gesture Types</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>`whileHover`: Mouse-over effects</li>
            <li>`whileTap`: Click feedback</li>
            <li>`drag`: Draggable elements</li>
            <li>`whileDrag`: During drag state</li>
          </ul>
        </div>
      </section>

      {/* Stagger Section */}
      <section className="mb-16 p-6 bg-gray-800 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">🌟 Stagger Effects</h2>
        <div className="p-4 bg-gray-700 rounded-lg border border-gray-600">
          <pre className="text-cyan-300">
            {`const parentVariants = {
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
};`}
          </pre>
        </div>

        <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">✨ Features</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>`staggerChildren`: Delay between children</li>
            <li>`delayChildren`: Initial delay</li>
            <li>State inheritance from parent</li>
            <li>Use `staggerDirection: -1` for reverse order</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
import * as motion from 'motion/react-client';
export default function Page() {
    return (
        <div className="h-screen flex items-center justify-center">
            <motion.div
                className='box'
                drag
                dragConstraints={{ top: 0, left: 0, right: 100, bottom: 100 }}
                whileDrag={{scale:1.5, backgroundColor:'red'}}
                whileHover={{scale:0.9,rotate:3}}
                whileTap={{backgroundColor:'green'}}
                transition={{type:'spring',stiffness:300}}
            />
        </div>
    );
}
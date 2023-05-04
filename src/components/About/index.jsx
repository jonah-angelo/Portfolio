import { textVariant, fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";

export default function About() {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionSubText}>Overview</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-white"
                >
                    I'm a Full stack developer with experience in Javascript and Python, 
                    I also have experience with React, Node, Express, Django, and MongoDB. 
                    I'm ambitious and always looking to learn new things and improve my skills.
                    Let's work together!
                </motion.p>
        </>
        
    )
}
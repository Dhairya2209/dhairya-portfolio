// import React from 'react'
// import { PROJECTS } from "../constants";
// import Card from "./Card";
// import { motion } from 'framer-motion';

// const containerVariants= {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0 },
//   transition:{
//     duration:0.5,
//     staggerChildren: 0.4,
//   },
// }

// const itemVariants ={
//   hidden: { opacity: 0, y: 0.8 },
//   visible: { opacity: 1, scale:1, transition:{duration: 0.5}},
// }

// const Projects = () => {
//   return (
//     <div id='projects'>
//       <motion.h2 initial="hidden" whileInView="visible" variants={containerVariants} viewport={{once: true}} className='mt-20 text-center text-4xl font-semibold'>Projects</motion.h2>
//       <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{once: true}} className='flex flex-wrap justify-center py-8'>
//         {PROJECTS.map((project, index) => (
//           <motion.div 
//             variants={itemVariants}
//             key={index}>
//             <Card
//               image={project.image}
//               title={project.title}
//               subtitle={project.subtitle}
//               link="#"
//             />
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }

// export default Projects

import React from 'react';
import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Projects = () => {
  // Log the PROJECTS data to check if it's being imported correctly
  console.log('PROJECTS:', PROJECTS);

  return (
    <div id='projects' className="container mx-auto px-4">
      <h2 className='mt-20 text-center text-4xl font-semibold'>Projects</h2>
      
      {PROJECTS && PROJECTS.length > 0 ? (
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants} 
          className='flex flex-wrap justify-center gap-6 py-8'
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                link={project.link || "#"}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center mt-8">No projects available to display.</p>
      )}
    </div>
  );
};

export default Projects;
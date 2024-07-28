// import React from 'react'

// const Card = ({image,title,subtitle,link}) => {
//   return (
//     <a href={link} className='m-4 block max-w-sm overflow-hidden rounded-lg'>
//         <div className='relative'>
//             <img className='w-full' src={image} alt={title} />
//             <div className='flex flex-col justify-between p-4 text-white'>
//                 <h2 className='mb-2 text-2xl font-bold'>{title}</h2>
//                 <p className='mb-4 text-sm font-medium'>{subtitle}</p>
//             </div>
//         </div>
//     </a>
//   )
// }

// export default Card

import React from 'react';

const Card = ({ image, title, subtitle, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{subtitle}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={link} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View Project</a>
      </div>
    </div>
  );
};

export default Card;
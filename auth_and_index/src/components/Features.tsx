// import React from 'react'


// const SecondSection = () => {
//   return (
//     <div>
//       <section className="bg-white py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => {
//             const IconComponent = feature.icon;
//             return (
//               <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg">
//                   <IconComponent className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//     </div>
      
      
//     </div>
//   )
// }

// export default SecondSection


import React from 'react';
import { Shield, Folder, Star, Award, Bookmark, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Robust Workflow",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      icon: Folder,
      title: "Robust Workflow", 
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      icon: Star,
      title: "Robust Workflow",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      icon: Award,
      title: "Robust Workflow",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      icon: Bookmark,
      title: "Robust Workflow",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      icon: Heart,
      title: "Robust Workflow",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
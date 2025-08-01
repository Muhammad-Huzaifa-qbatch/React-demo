
// import { Play } from 'lucide-react'
// import heroVideo from '../assets/Qbatch.mp4';
// import { useEffect, useRef, useState } from 'react';

// // const HeroSection = () => {


// const TopSection = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
// 	const [isPlaying, setIsPlaying] = useState(false);

//   const handleTogglePlay = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (video.paused || video.ended) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handlePlay = () => setIsPlaying(true);
//     const handlePause = () => setIsPlaying(false);

//     video.addEventListener('play', handlePlay);
//     video.addEventListener('pause', handlePause);

//     return () => {
//       video.removeEventListener('play', handlePlay);
//       video.removeEventListener('pause', handlePause);
//     };
//     }, []);


//     return (
//       <section className="bg-[#121d2d] text-white py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <h1 className="text-5xl lg:text-6xl font-bold leading-tight font-serif">
//                 Create stunning
//                 <br />
//                 web experiences
//               </h1>
//               <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
//                 Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
//                   Request Demo →
//                 </button>
//                 <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 font-semibold transition-colors duration-200">
//                   Explore Product
//                 </button>
//               </div>
//             </div>



//             <div className="relative w-full max-w-[464px] aspect-video mx-auto">
//      					<div className="absolute top-4 left-4 w-full h-full border border-gray-400 opacity-30 z-0"></div>

//                 <video
//                     ref={videoRef}
//                     onClick={handleTogglePlay}
//                     className="relative z-10 w-full h-full object-cover cursor-pointer"
//                     muted
//                     loop
//                     playsInline
//                     controls={false}
//                   >

//                   <source src={heroVideo} type="video/mp4" />
//       					  Your browser does not support the video tag.
//                   </video>

//        					{!isPlaying && (
//                   <div className="absolute inset-0 flex items-center justify-center z-20">
//                     <button
//                       onClick={handleTogglePlay}
//                       className="w-20 h-20 rounded-full bg-white bg-opacity-80 flex items-center justify-center shadow-md transition-opacity duration-700"
//                     >
//                       <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M6 4l10 6-10 6V4z" />
//                       </svg>
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <svg
//               className="absolute bottom-0 left-0 w-full h-16"
//               viewBox="0 0 1440 100"
//               preserveAspectRatio="none"
//             >
//               <path d="M1440,0 L0,100 L0,100 L1440,100 Z" fill="white" />
//             </svg>

//             </div>
//         </section>

//     )
// }

// export default TopSection





import { Play } from 'lucide-react'
import heroVideo from '../assets/Qbatch.mp4';
import { useEffect, useRef, useState } from 'react';

const TopSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <section className="bg-[#121d2d] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight font-serif">
              Create stunning
              <br />
              web experiences
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
              Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Request Demo →
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 font-semibold transition-colors duration-200">
                Explore Product
              </button>
            </div>
          </div>

          {/* ✅ Clean white video box */}
          <div className="relative w-full max-w-[800px] aspect-video mx-auto bg-white rounded-md overflow-hidden">
            <video
              ref={videoRef}
              onClick={handleTogglePlay}
              className="w-full h-full object-cover cursor-pointer"
              muted
              loop
              playsInline
              controls={false}
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handleTogglePlay}
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition"
                >
                  <Play className="w-6 h-6 text-blue-600" />
                </button>
              </div>
            )}
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full h-16"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M1440,0 L0,100 L0,100 L1440,100 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default TopSection;



















          









// import { useEffect, useRef, useState } from 'react';
// import heroVideo from '../assets/video.mp4';

// const HeroSection = () => {
// 	const videoRef = useRef<HTMLVideoElement>(null);
// 	const [isPlaying, setIsPlaying] = useState(false);

// 	const handleTogglePlay = () => {
// 		const video = videoRef.current;
// 		if (!video) return;

// 		if (video.paused || video.ended) {
// 			video.play();
// 		} else {
// 			video.pause();
// 		}
// 	};

// 	useEffect(() => {
// 		const video = videoRef.current;
// 		if (!video) return;

// 		const handlePlay = () => setIsPlaying(true);
// 		const handlePause = () => setIsPlaying(false);

// 		video.addEventListener('play', handlePlay);
// 		video.addEventListener('pause', handlePause);

// 		return () => {
// 			video.removeEventListener('play', handlePlay);
// 			video.removeEventListener('pause', handlePause);
// 		};
// 	}, []);

// 	return (
// 		<section className="relative bg-[#121d2d] text-white overflow-hidden">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
// 				<div>
// 					<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-['Playfair_Display']">
// 						Create stunning <br /> web experiences
// 					</h1>
// 					<p className="text-gray-300 mb-8 max-w-md">
// 						Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
// 					</p>
// 					<div className="flex flex-col sm:flex-row gap-4">
// 						<a href="#" className="bg-[#2173ea] hover:bg-blue-700 text-white text-sm font-medium py-3 px-6 inline-flex items-center justify-center">
// 							Request Demo <span className="ml-2">→</span>
// 						</a>
// 						<a href="#" className="bg-[#334155] bg-opacity-10 hover:bg-opacity-20 text-white text-sm font-medium py-3 px-6 text-center">
// 							Explore Product
// 						</a>
// 					</div>
// 				</div>

// 				<div className="relative w-full max-w-[464px] aspect-video mx-auto">
// 					<div className="absolute top-4 left-4 w-full h-full border border-gray-400 opacity-30 z-0"></div>

// 					<video
// 						ref={videoRef}
// 						onClick={handleTogglePlay}
// 						className="relative z-10 w-full h-full object-cover cursor-pointer"
// 						muted
// 						loop
// 						playsInline
// 						controls={false}
// 					>
// 						<source src={heroVideo} type="video/mp4" />
// 						Your browser does not support the video tag.
// 					</video>

// 					{!isPlaying && (
// 						<div className="absolute inset-0 flex items-center justify-center z-20">
// 							<button
// 								onClick={handleTogglePlay}
// 								className="w-20 h-20 rounded-full bg-white bg-opacity-80 flex items-center justify-center shadow-md transition-opacity duration-700"
// 							>
// 								<svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
// 									<path d="M6 4l10 6-10 6V4z" />
// 								</svg>
// 							</button>
// 						</div>
// 					)}
// 				</div>
// 			</div>

// 			<svg
// 				className="absolute bottom-0 left-0 w-full h-16"
// 				viewBox="0 0 1440 100"
// 				preserveAspectRatio="none"
// 			>
// 				<path d="M1440,0 L0,100 L0,100 L1440,100 Z" fill="white" />
// 			</svg>
// 		</section>
// 	);
// };

// export default HeroSection;

















































// import { useRef, useState, useEffect } from 'react';
// import { Play } from 'lucide-react';
// import heroVideo from '../assets/Qbatch.mp4';


// const TopSection = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handleTogglePlay = () => {
//     const video = videoRef.current;
//     if (!video) return;
//     video.paused || video.ended ? video.play() : video.pause();
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handlePlay = () => setIsPlaying(true);
//     const handlePause = () => setIsPlaying(false);

//     video.addEventListener('play', handlePlay);
//     video.addEventListener('pause', handlePause);

//     return () => {
//       video.removeEventListener('play', handlePlay);
//       video.removeEventListener('pause', handlePause);
//     };
//   }, []);

//   return (
//     <section className="bg-[#121d2d] text-white py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <h1 className="text-5xl lg:text-6xl font-bold leading-tight font-serif">
//               Create stunning
//               <br />
//               web experiences
//             </h1>
//             <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
//               Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
//                 Request Demo →
//               </button>
//               <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 font-semibold transition-colors duration-200">
//                 Explore Product
//               </button>
//             </div>
//           </div>

//           <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
//             <video
//               ref={videoRef}
//               onClick={handleTogglePlay}
//               className="w-full h-full object-cover cursor-pointer"
//               muted
//               loop
//               playsInline
//               controls={false}
//             >
//               <source src={heroVideo} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             {!isPlaying && (
//               <div className="absolute inset-0 flex items-center justify-center z-10">
//                 <button
//                   onClick={handleTogglePlay}
//                   className="bg-white bg-opacity-90 hover:bg-opacity-100 text-blue-600 rounded-full p-6 shadow-lg transition-all duration-200 transform hover:scale-110"
//                 >
//                   <Play className="w-8 h-8 ml-1" fill="currentColor" />
//                 </button>
//               </div>
//             )}
//             <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopSection;

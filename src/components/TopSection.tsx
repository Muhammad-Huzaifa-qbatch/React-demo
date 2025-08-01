
import { Play } from 'lucide-react'

const TopSection = () => {
  return (
    //     // <div>
    //     //   <h2>Create Stunning web experiences</h2>
    //     //   <p>Our landing page template works on all devices,so you have to set it up once, and get beautiful results forever</p>
    //     // </div>

    // <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
    // <div className="max-w-7xl w-full">
    //   <div className="grid lg:grid-cols-2 gap-12 items-center">
    //     {/* Left Content */}
    //     <div className="text-white space-y-8">
    //       <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
    //         Create stunning
    //         <br />
    //         web experiences
    //       </h1>
          
    //       <p className="text-slate-300 text-lg lg:text-xl max-w-lg leading-relaxed">
    //         Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
    //       </p>
          
    //       <div className="flex flex-col sm:flex-row gap-4">
    //         <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
    //           Request Demo
    //           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    //           </svg>
    //         </button>
            
    //         <button className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
    //           Explore Product
    //         </button>
    //       </div>
    //     </div>
        
    //     {/* Right Content - Image with Play Button */}
    //     <div className="relative">
    //       <div className="relative rounded-2xl overflow-hidden shadow-2xl">
    //         <img 
    //           src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    //           alt="Business meeting"
    //           className="w-full h-96 lg:h-[500px] object-cover"
    //         />
            
    //         {/* Play Button Overlay */}
    //         <div className="absolute inset-0 flex items-center justify-center">
    //           <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 shadow-lg transition-all duration-200 transform hover:scale-110">
    //             <Play className="w-8 h-8 text-slate-800 ml-1" fill="currentColor" />
    //           </button>
    //         </div>
            
    //         {/* Gradient Overlay */}
    //         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    //       </div>
    //     </div>
    //   </div>

    // </div>
    // </div>
    <section className="bg-[#121d2d] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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

          {/* Right Content - Video Thumbnail */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional meeting"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-blue-600 rounded-full p-6 shadow-lg transition-all duration-200 transform hover:scale-110">
                  <Play className="w-8 h-8 ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopSection
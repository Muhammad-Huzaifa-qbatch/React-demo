
const Footer = () => {
  return (
    <div className="mt-15">
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between md:items-start">
            <div className="mb-6 md:mb-0 md:w-1/3">
              {/* <a href="https://flowbite.com/" className="flex items-center mb-4">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a> */}
              <p className="text-gray-600 font-bold dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                The smarter way to start your next idea.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 md:w-2/3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">How it works</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Overview</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Pricing</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Service Areas</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Customer Stories</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Knowledge Base</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Products</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Corporate Partners</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Secure Identity</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Legal Help</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">First Capital</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">About Us</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Careers</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Cruip uses cookies to ensure you get the best experience on our website.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                I agree
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

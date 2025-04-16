import './App.css'


import { ArrowRight } from "lucide-react"

import { Button } from "./components/ui/button"

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF6CD] flex flex-col text-brown-800">

      <div className="w-full flex items-center justify-center">
        <img src="https://i.ibb.co/sJMTVNxq/my-ajo-logo.png" alt="logo" className="" />
      </div>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-10 md:py-10 flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-6xl font-bold mb-6 max-w-4xl">
            Secure, Rotational Group Savings. Reinvented!
          </h1>
          <p className="md:text-xl text-brown-500 text-sm mb-10 max-w-2xl px-5 md:px-0">
            We bring a traditional way of saving to the digital era. MyAjo fully runs on the blockchain so all your transactions are safe, transparent and automatic
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Button size="lg" className="bg-white text-brown-500 hover:bg-brown-500 px-8 font-semibold cursor-pointer">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
            <Button size="lg" variant="outline" className="text-white border-white bg-amber-950 font-semibold hover:bg-amber-700 px-8 cursor-pointer">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="features" className="container mx-auto px-4 pt-20 ">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb:6 md:mb-16 px-5 md:px-0">
          Everything you need, Nothing you don't
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 px-6 py-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://i.ibb.co/7x6bY7HK/african-woman.jpg"
                alt="african woman"
                className="w-full h-auto max-w-md rounded-xl object-cover shadow-md"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold leading-snug">
                How MyAjo Works
              </h1>
              <p className="text-sm md:text-base md:max-w-md mx-auto md:mx-0 text-brown-500">
              With MyAjo, you can start a digital savings group with people you trust, 
              just like traditional Ajo. You set the rules, everyone contributes using simple bank transfers, 
              and smart contracts handle the payouts automatically. Each person receives 
              the lump sum during their turn, and the cycle continues until everyone&apos;s been paid. 
              It&apos;s the same trusted system, now faster, safer, and powered by technology.

               
              </p>
            </div>
          </div>
        </section>

        <section id="templates" className="w-full my-5 px-4 py-20 bg-amber-950 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Help us improve the culture</h2>
          <div className="text-center mt-12">
            <Button variant="outline" className="text-white hover:text-white border-white bg-amber-950 py-0.5 font-semibold hover:bg-amber-700 px-8 cursor-pointer">
              Fill the form
            </Button>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-12">

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} <span className='font-bold'>MyAjo</span>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// function FeatureCard({ icon, title, description }) {
//   return (
//     <div className="bg-white/10 rounded-lg p-6 hover:bg-gray-500 transition-colors">
//       <div className=" mb-4 w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg">{icon}</div>
//       <h3 className="text-xl font-medium  mb-2">{title}</h3>
//       <p className="">{description}</p>
//     </div>
//   )
// }

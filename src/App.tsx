import './App.css'


import { ArrowRight } from "lucide-react"

import { Button } from "./components/ui/button"
import { Twitter } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF6CD] flex flex-col text-brown-800">

      <div className="w-full flex items-center justify-center">
        <img src="https://i.ibb.co/sJMTVNxq/my-ajo-logo.png" alt="logo" className="" />
      </div>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-10 md:py-10 flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-6xl font-bold mb-6 max-w-4xl">
            A simple, secure way to run your Ajo group digitally
          </h1>
          <p className="md:text-xl text-brown-500 text-sm mb-10 max-w-2xl px-5 md:px-0">
            No more record books. <span>MyAjo</span> helps you save, rotate funds, and stay connected automatically!.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Button size="lg" className="bg-white text-brown-500 hover:bg-brown-500 px-8 font-semibold cursor-pointer">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
            <a href="#about">
              <Button size="lg" variant="outline" className="text-white border-white bg-amber-950 font-semibold hover:bg-amber-700 px-8 cursor-pointer">
                Learn More
              </Button>
            </a>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 pt-20 ">
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
              <div className="flex flex-col gap-5 text-start">
                <p className="text-sm md:text-base md:max-w-md mx-auto md:mx-0 text-brown-500 text-center md:text-start">
                  MyAjo brings the traditional Ajo savings system into the digital world while keeping it simple and familiar.
                </p>
                <p>
                  <span className='font-bold'>Create a Group:</span>{" "}
                  An Ajo agent or group organizer creates a savings group. They set the number of members, contribution amount, and how often payouts should happen (e.g., weekly or monthly).
                </p>
                <p>
                  <span className='font-bold'>Invite Members:</span>{" "}
                  Members are invited using their phone numbers or emails. Once added, everyone joins a private group chat to stay updated and engaged.
                </p>
                <p>
                  <span className='font-bold'>Contribute via Bank Transfer:</span>{" "}
                  Each person sends their contribution through a bank transfer. MyAjo integrates an on/off ramp technology to receive and confirm the payment securely.
                </p>
                <p>
                  <span className='font-bold'>Automatic Payouts:</span>{" "}
                  When everyone has contributed for the cycle, the full amount is automatically sent to the next person in line. No manual work, no delay! it's all handled by smart contracts.
                </p>
                <p>
                  <span className='font-bold'>Transparent and Secure:</span>{" "}
                  Every contribution and payout is recorded on the Stellar blockchain. This ensures fairness, security, and trust for everyone in the group.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="templates" className="w-full my-5 px-4 py-20 bg-amber-950 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Fill our 2-minute survey form</h2>
          <p>We're building MyAjo to make traditional savings easier and more secure.
          If you've ever joined an Ajo. stopped for any reason  or never tried it — we want to hear from you.</p>
          <div className="flex flex-col justify-center md:flex-row gap-4 text-center mt-12 items-center">
            
            <a href="https://forms.gle/RuJ52R29seepXJW7A" target="_blank">
              <Button variant="outline" className="text-white hover:text-white border-white bg-amber-950 font-semibold hover:bg-amber-700 px-8 cursor-pointer">
                Fill the form <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="https://x.com/MyAjo_Official" target='_blank'>
              <Button size="lg" variant="outline" className="border-white text-black font-semibold hover:bg-amber-700 px-8 cursor-pointer">
                Follow us on <Twitter className="h-3 w-4" />
              </Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-12">

        <div className="border-t border-white/10 mt-12 pt-8 text-center flex flex-col gap-5">
          <span>Built with love for Ajo communities in Nigeria. <br />Email:{" "}
            <a href="mailto:myajo.thrift@gmail.com" className='underline'>myajo.thrift@gmail.com</a>
          </span>
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

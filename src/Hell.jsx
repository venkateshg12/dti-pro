// "use client"

import { useState, useEffect } from "react"
import img1 from "./assets/img1.jpeg"


const App = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Fixed Top Banner */}
      <header className="sticky top-0 w-full bg-gray-800 backdrop-blur-md z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center relative">
          <div className="absolute left-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Vignan_logo.png/1200px-Vignan_logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">Share Info Online</h1>
        </div>
      </header>

      {/* Introduction Section - Grid Layout */}
      <section
        className="min-h-screen w-full flex items-center justify-center bg-cover bg-center py-16 px-4"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1355902675/photo/happy-group-of-young-friends-using-smartphone-in-the-street.jpg?s=612x612&w=0&k=20&c=xWHHT0Bwd_0GzXh_6jB7q0NyCGhcz38wONynPIpp8NM=')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/60 p-6 md:p-12 rounded-xl max-w-6xl w-full backdrop-blur-sm">
          <div className={`${isMobile ? "flex flex-col gap-8" : "grid grid-cols-2 gap-10"} items-center`}>
            {/* Left Side: Text Content */}
            <div className={`${isMobile ? "text-center" : "text-left"}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Stay Informed, Stay Ahead
              </h2>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                Welcome to <span className="font-bold">Global News Hub</span> – your gateway to real-time news from
                around the world. Discover, share, and explore trending stories with freedom and ease.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Get reliable updates on politics, business, technology, sports, and more. Whether you're a reader or a
                contributor, this is the place where news meets people.
              </p>
            </div>

            {/* Right Side: Image */}
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-500 hover:scale-105">
                <img
                  src="https://media.istockphoto.com/id/1355902675/photo/happy-group-of-young-friends-using-smartphone-in-the-street.jpg?s=612x612&w=0&k=20&c=xWHHT0Bwd_0GzXh_6jB7q0NyCGhcz38wONynPIpp8NM="
                  alt="Global News"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="min-h-screen w-full flex items-center justify-center py-16 px-4 bg-gradient-to-br from-blue-500 via-pink-500 to-blue-500">
        <div className="bg-black/60 p-6 md:p-12 rounded-xl max-w-4xl backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Join the News Revolution</h2>

          <div className="space-y-4 text-base md:text-lg">
            <p className="leading-relaxed">
              In today's fast-paced world, staying updated with the latest news is more important than ever. At{" "}
              <span className="font-bold">Share Info Online</span>, we empower individuals to explore, share, and engage
              with real-time global news effortlessly. Whether you're interested in politics, technology, entertainment,
              or global affairs, our platform provides a seamless and open space for discussions and information
              exchange.
            </p>

            <p className="leading-relaxed">
              By joining our community, you get access to reliable news sources, and the ability to contribute by
              sharing insights with the world. Whether you are a journalist, a content creator, or just a curious
              reader, <span className="font-bold">Share Info Online</span> is the perfect place for you.
            </p>

            <p className="leading-relaxed">
              Step into a world where information flows freely, where you can stay ahead of breaking stories, and where
              you can connect with like-minded individuals who value knowledge and truth. Your journey to unlimited
              information starts here.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={onNavigate}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
export default App;
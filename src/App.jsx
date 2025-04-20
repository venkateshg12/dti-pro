import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.css";
import img1 from "./assets/img1.jpeg";
import img from "./assets/image.png"
import MixedImageAnimation from "./MixedImageAnimation";

const App = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(false);

  const headingRef = useRef(null);

  useEffect(() => {
    function breakText() {
      const h1 = headingRef.current;

      const h1Text = h1.textContent;

      const splittedText = h1Text.split("");

      var halfValue = splittedText.length / 2;
      console.log(halfValue);

      var clutter = "";


      splittedText.forEach(function (e, idx) {
        if (idx < halfValue) {
          clutter += `<span class="a">${e}</span>`
        } else {
          clutter += `<span class="b">${e}</span>`
        }

      })

      h1.innerHTML = clutter;
    }

    breakText();

    gsap.from("h2 .a", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.16,
    })

    gsap.from("h2 .b", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      stagger: -0.16,
    })
  }, []);



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="sticky h-[5rem] top-0 w-full bg-gray-800 backdrop-blur-md z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center relative">
          <div className="absolute -left-[5rem]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Vignan_logo.png/1200px-Vignan_logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </div >
          <figure className="absolute -right-20">
            <img src={img} alt="" width={220} height={25} />
          </figure>
          <h1 className="text-2xl md:text-4xl font-bold font-ubuntu">Share Info Online</h1>
        </div>
      </header>
      {/* Intro Section */}
      <section
        className="back min-h-screen relative w-full flex items-center justify-center"
      >
        <figure className="absolute -z-0 h-screen w-screen">
          {/* <img src={img1} alt="Alt Image" className="w-screen h-screen" /> */}
          <MixedImageAnimation className="w-full h-full" />
        </figure>
        <div className="bg-black/30 p-6 md:p-12 rounded-xl max-w-6xl w-full backdrop-blur-sm">
          <div
            className={`${isMobile ? "flex flex-col gap-8" : "grid grid-cols-2 gap-10"
              } items-center`}
          >
            <div className={`${isMobile ? "text-center" : "text-left"}`}>
              <h2 ref={headingRef} className="text-3xl text-white  md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text ">
                Stay Informed, Stay Ahead
              </h2>
              <p className="text-base text-white md:text-lg mb-4 leading-relaxed">
                Welcome to <span className="font-bold">Global News Hub</span> –
                your gateway to real-time news from around the world. Discover,
                share, and explore trending stories with freedom and ease.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Get reliable updates on politics, business, technology, sports,
                and more. Whether you're a reader or a contributor, this is the
                place where news meets people.
              </p>
            </div>

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

      <section className="w-full min-h-screen bg-[#defffc]/90">
        <div className="text-black font-black text-center bg-gradient-to-r from-purple-800 to-purple-300 text-shadow">
          <h1 className="text-5xl py-3">TECHNOLOGIES IN COMPUTER SCIENCE</h1>
        </div>
        <div className="grid grid-cols-3 gap-y-5 p-5 place-items-center">
          <div className="w-[22rem] rounded-2xl  bg-white shadow-md hover:shadow-2xl hover:bg-[#e0aaff] cursor-pointer hover:scale-[1.02] hover:bg-opacity-50 ring-1 ring-gray-200 transition-shadow duration-300 overflow-hidden">
            <figure className="w-full h-[12rem] overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_1280.jpg"
                alt="Full Stack"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <div className="p-5 flex flex-col items-center gap-4">
              <h1 className="text-3xl font-bebas text-black font-bold tracking-wide">FULL STACK</h1>
              <a
                href="https://roadmap.sh/full-stack" target="_blank"
                className="px-9 py-2 rounded-lg text-white text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-colors duration-300 shadow-md active:scale-[0.90] cursor-pointer font-bold font-lob hover:text-shadow">
                More info
              </a>
            </div>
          </div>
          <div className="w-[22rem] rounded-2xl  bg-white shadow-md hover:shadow-2xl hover:bg-[#e0aaff] cursor-pointer hover:scale-[1.02] hover:bg-opacity-50 ring-1 ring-gray-200 transition-shadow duration-300 overflow-hidden">
            <figure className="w-full h-[12rem] overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5uDOjVYtXiNB-FHfB9nNVprpDougxiQZHQ&s"
                alt="Full Stack"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <div className="p-5 flex flex-col items-center gap-4">
              <h1 className="text-3xl font-bebas text-black font-bold tracking-wide">AWS</h1>
              <a
                href="https://roadmap.sh/best-practices/aws" target="_blank"
                className="px-9 py-2 rounded-lg text-white text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-colors duration-300 shadow-md active:scale-[0.90] cursor-pointer font-bold font-lob hover:text-shadow">
                More info
              </a>
            </div>
          </div>
          <div className="w-[22rem] rounded-2xl  bg-white shadow-md hover:shadow-2xl hover:bg-[#e0aaff] cursor-pointer hover:scale-[1.02] hover:bg-opacity-50 ring-1 ring-gray-200 transition-shadow duration-300 overflow-hidden">
            <figure className="w-full h-[12rem] overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2018/02/05/17/25/bitcoin-3132717_1280.jpg"
                alt="Full Stack"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <div className="p-5 flex flex-col items-center gap-4">
              <h1 className="text-3xl font-bebas text-black font-bold tracking-wide">BLOCKCHAIN</h1>
              <a
                href="https://roadmap.sh/blockchain" target="_blank"
                className="px-9 py-2 rounded-lg text-white text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-colors duration-300 shadow-md active:scale-[0.90] cursor-pointer font-bold font-lob hover:text-shadow">
                More info
              </a>
            </div>
          </div>
          <div className="w-[22rem] rounded-2xl  bg-white shadow-md hover:shadow-2xl hover:bg-[#e0aaff] cursor-pointer hover:scale-[1.02] hover:bg-opacity-50 ring-1 ring-gray-200 transition-shadow duration-300 overflow-hidden">
            <figure className="w-full h-[12rem] overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=2048x2048&w=is&k=20&c=-dkoxqirWcLDhkIjVgkLfRXdNHqCJdPKswM7tkjTcN0="
                alt="Full Stack"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <div className="p-5 flex flex-col items-center gap-4">
              <h1 className="text-3xl font-bebas text-black font-bold tracking-wide">AI/ML</h1>
              <a
                href="https://roadmap.sh/ai-engineer" target="_blank"
                className="px-9 py-2 rounded-lg text-white text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-colors duration-300 shadow-md active:scale-[0.90] cursor-pointer font-bold font-lob hover:text-shadow">
                More info
              </a>
            </div>
          </div>

          <div className="w-[22rem] rounded-2xl  bg-white shadow-md hover:shadow-2xl hover:bg-[#e0aaff] cursor-pointer hover:scale-[1.02] hover:bg-opacity-50 ring-1 ring-gray-200 transition-shadow duration-300 overflow-hidden">
            <figure className="w-full h-[12rem] overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/08/10/34/cyber-4610993_1280.jpg"
                alt="Full Stack"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <div className="p-5 flex flex-col items-center gap-4">
              <h1 className="text-3xl font-bebas text-black font-bold tracking-wide">CYBER SECURITY</h1>
              <a
                href="https://roadmap.sh/cyber-security" target="_blank"
                className="px-9 py-2 rounded-lg text-white text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-colors duration-300 shadow-md active:scale-[0.90] cursor-pointer font-bold font-lob hover:text-shadow">
                More info
              </a>
            </div>
          </div>
          <div className="w-[22rem] rounded-2xl  bg-white shadow-md hover:shadow-2xl hover:bg-[#e0aaff] cursor-pointer hover:scale-[1.02] hover:bg-opacity-50 ring-1 ring-gray-200 transition-shadow duration-300 overflow-hidden">
            <figure className="w-full h-[12rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Full Stack"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <div className="p-5 flex flex-col items-center gap-4">
              <h1 className="text-3xl font-bebas text-black font-bold tracking-wide">DATA ANALYST</h1>
              <a
                href="https://roadmap.sh/data-analyst" target="_blank"
                className="px-9 py-2 rounded-lg text-white text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-colors duration-300 shadow-md active:scale-[0.90] cursor-pointer font-bold font-lob hover:text-shadow">
                More info
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Get Started Section with IMG instead of background */}
      <section className="background min-h-screen w-full flex items-center justify-center py-16 px-4">
        <div className="relative w-full max-w-5xl">
          <div
            className="w-full rounded-xl overflow-hidden shadow-xl transition-all duration-500"
          >
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 p-6 md:p-12 rounded-xl max-w-3xl backdrop-blur-sm text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Join the News Revolution
              </h2>

              <div className="space-y-4 text-base md:text-lg">
                <p className="leading-relaxed">
                  In today's fast-paced world, staying updated with the latest
                  news is more important than ever. At{" "}
                  <span className="font-bold">Share Info Online</span>, we
                  empower individuals to explore, share, and engage with
                  real-time global news effortlessly.
                </p>
                <p className="leading-relaxed">
                  Whether you are a journalist, content creator, or curious
                  reader, our platform gives you the power to connect, discuss,
                  and grow with reliable information.
                </p>
                <p className="leading-relaxed">
                  Step into a world where information flows freely. Stay ahead
                  of breaking stories and connect with like-minded individuals.
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  className="bg-orange-600 cursor-pointer active:scale-[0.90] hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                ><a href="https://tourmaline-froyo-921d48.netlify.app">
                    GET STARTED
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default App;
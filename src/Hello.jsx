import React from "react";
import MixedImageAnimation from "./MixedImageAnimation";

const App = ({ onNavigate }) => {
    return (
        <div className="w-full overflow-hidden bg-black text-white font-sans">
            {/* Fixed Top Banner */}
            <header className="flex items-center justify-center w-full bg-gray-800 text-white py-1 z-50 sticky top-0">
                <div className="w-full flex items-center justify-center relative px-5">
                    <div className="absolute left-5">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Vignan_logo.png/1200px-Vignan_logo.png"
                                alt="Logo" className="object-cover" />
                        </div>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold">Share Info Online</h1>
                </div>
            </header>

            {/* Introduction Section - Grid Layout */}
            <section className="min-h-screen  flex items-center justify-center w-full relative py-16 bg-gradient-to-r from-blue-900 to-gray-900">
                <div className="bg-opacity-60 p-10 md:p-12 w-full max-w-6xl rounded-lg">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Left Side: Text Content */}
                        <div className="text-left z-10">
                            {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed, Stay Ahead</h2> */}
                            <p className="text-lg mb-4">
                                Welcome to <strong>Global News Hub</strong> – your gateway to
                                real-time news from around the world. Discover, share, and
                                explore trending stories with freedom and ease.
                            </p>
                            <p className="text-lg">
                                Get reliable updates on politics, business, technology, sports,
                                and more. Whether you're a reader or a contributor, this is the
                                place where news meets people.
                            </p>
                        </div>
                        <div className="max-w-[25rem] bg-gray-800/70 backdrop-blur-2xl">
                            <h2 className="text-3xl md:text-[3rem] font-bold font-code mb-4">Stay</h2>
                            <h2 className="text-3xl md:text-4xl font-code text-right font-bold mb-4">Informed</h2>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay</h2>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ahead</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Started Section */}
            <section className="min-h-screen flex items-center justify-center w-full py-16 bg-gradient-to-br from-blue-500 via-red-500 to-blue-500">
                <div className="bg-black bg-opacity-60 p-10 md:p-12 w-full max-w-6xl rounded-lg text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the News Revolution</h2>
                    <p className="text-lg mb-4">
                        In today's fast-paced world, staying updated with the latest news is
                        more important than ever. At <strong>Share Info Online</strong>, we
                        empower individuals to explore, share, and engage with real-time
                        global news effortlessly. Whether you're interested in politics,
                        technology, entertainment, or global affairs, our platform provides
                        a seamless and open space for discussions and information exchange.
                    </p>
                    <p className="text-lg mb-4">
                        By joining our community, you get access to reliable news sources,
                        and the ability to contribute by sharing insights with the world.
                        Whether you are a journalist, a content creator, or just a curious
                        reader, <strong>Share Info Online</strong> is the perfect place for you.
                    </p>
                    <p className="text-lg mb-6">
                        Step into a world where information flows freely, where you can stay
                        ahead of breaking stories, and where you can connect with
                        like-minded individuals who value knowledge and truth. Your journey
                        to unlimited information starts here.
                    </p>
                    <button
                        className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 text-xl font-bold rounded-lg transition-colors duration-300"
                        onClick={onNavigate}
                    >
                        GET STARTED
                    </button>
                </div>
            </section>
        </div>
    );
};

export default App;
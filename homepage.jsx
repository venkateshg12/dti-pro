import React from "react";
const HomePage = ({ onNavigate }) => {
  return (
    <div className="homepage">
      {/* Fixed Top Banner */}
      <header className="top-banner">
        <div className="banner-content">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Vignan_logo.png/1200px-Vignan_logo.png"
            alt="Logo"
            className="logo"
          />
          <h1>Share Info Online</h1>
        </div>
      </header>

      {/* Introduction Section - Grid Layout */}
      <section className="intro-section">
        <figure><img src="" alt="" /></figure>
        <div className="overlay">
          <div className="intro-content">
            {/* Left Side: Text Content */}
            <div className="intro-text">
              <h2>Stay Informed, Stay Ahead</h2>
              <p>
                Welcome to <strong>Global News Hub</strong> – your gateway to
                real-time news from around the world. Discover, share, and
                explore trending stories with freedom and ease.
              </p>
              <p>
                Get reliable updates on politics, business, technology, sports,
                and more. Whether you’re a reader or a contributor, this is the
                place where news meets people.
              </p>
            </div>
            {/* Right Side: Image */}
            <div className="intro-image">
              <img
                src="https://media.istockphoto.com/id/1355902675/photo/happy-group-of-young-friends-using-smartphone-in-the-street.jpg?s=612x612&w=0&k=20&c=xWHHT0Bwd_0GzXh_6jB7q0NyCGhcz38wONynPIpp8NM="
                alt="Global News"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="get-started-section">
        <div className="overlay">
          <h2>Join the News Revolution</h2>
          <p>
            In today's fast-paced world, staying updated with the latest news is
            more important than ever. At <strong>Share Info Online</strong>, we
            empower individuals to explore, share, and engage with real-time
            global news effortlessly. Whether you're interested in politics,
            technology, entertainment, or global affairs, our platform provides
            a seamless and open space for discussions and information exchange.
          </p>
          <p>
            By joining our community, you get access to reliable news sources,
            and the ability to contribute by sharing insights with the world.
            Whether you are a journalist, a content creator, or just a curious
            reader,
            <strong>Share Info Online</strong> is the perfect place for you.
          </p>
          <p>
            Step into a world where information flows freely, where you can stay
            ahead of breaking stories, and where you can connect with
            like-minded individuals who value knowledge and truth. Your journey
            to unlimited information starts here.
          </p>
          <button className="get-started-btn" onClick={onNavigate}>
            GET STRATED
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

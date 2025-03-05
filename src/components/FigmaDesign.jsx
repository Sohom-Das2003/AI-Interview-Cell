import React from 'react';
import '../Css/FigmaDesign.css';


const FigmaDesign = () => {
  const handleButtonClick = (buttonLabel) => {
    alert(`${buttonLabel} clicked!`);
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background.png'})`,
      }}
    >

      {/* Main content */}
      <div className="content-wrapper">
        <h1 className="main-heading">
          Ace Your Next Interview with AI-Powered Mock Sessions
        </h1>
        <p className="sub-heading">Practice, Improve, Succeed.....</p>

        <div className="button-group">
          <button onClick={() => handleButtonClick('Explore More 1')}>
            Dashboard
          </button>
          <button onClick={() => handleButtonClick('Explore More 2')}>
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FigmaDesign;
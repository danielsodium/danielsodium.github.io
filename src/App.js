import { useState, useEffect }from 'react';
import './css/page.css'; // Import your CSS file for styling
import RightColumn from './components/right.js'
import LeftColumn from './components/left.js';
const App = () => {
  const [isLeftColumnLoaded, setIsLeftColumnLoaded] = useState(false);
  const [isRightColumnLoaded, setIsRightColumnLoaded] = useState(false);

  useEffect(() => {
    // Set delays to control the timing of the animations
    const leftColumnDelay = setTimeout(() => {
      setIsLeftColumnLoaded(true);
    }, 100);

    const rightColumnDelay = setTimeout(() => {
      setIsRightColumnLoaded(true);
    }, 400); // Delay the right column animation to start after the left column finishes

    return () => {
      clearTimeout(leftColumnDelay);
      clearTimeout(rightColumnDelay);
    };
  }, []);

  return (
    <div className={`container ${isLeftColumnLoaded ? 'left-loaded' : ''}`}>
      <div className="left-column">
        <LeftColumn />
      </div>
      <div className={`right-column ${isRightColumnLoaded ? 'right-loaded' : ''}`}>
        <div className="scrollable-content">
          <RightColumn />
        </div>
      </div>
    </div>
  );
};
export default App;

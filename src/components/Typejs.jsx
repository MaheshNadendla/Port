import React from 'react';
import Typed from 'typed.js';
import './Typejs.css';
function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Mahesh Nadendla', 'Full Stack Developer'],
      typeSpeed: 150,
      loop : true,
      color : 'red',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="Texts">
      <span>I am </span> <span className="TheName" ref={el} />
    </div>
  );
}

export default MyComponent;
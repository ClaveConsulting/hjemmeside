import React, { createContext, useContext, useState, useEffect } from 'react';

const WindowDimensionsCtx = createContext(null);

const dummyWindow = {
  addEventListener(type, listener, options) {},
  removeEventListener(type, listener, options) {},
};

const getWindow = () => typeof window !== 'undefined' ? window : dummyWindow;

// bruker en provider så vi kun får 1 listener på resize eventen
const WindowDimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: getWindow().innerWidth,
    height: getWindow().innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: getWindow().innerWidth,
        height: getWindow().innerHeight,
      });
    };

    getWindow().addEventListener('resize', handleResize);

    return () => {
      getWindow().removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionsCtx.Provider>
  );
};

export const useWindowDimensions = () => useContext(WindowDimensionsCtx);
export const useMediatype = () => ({ isDesktop: useWindowDimensions().width > 1200 });
export default WindowDimensionsProvider;

/* eslint-disable */

import React, { useState, useContext, useCallback } from 'react';

const AlertContext = React.createContext();
// const AlertToggleContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

// export const useAlertToggle = () => {
//   return useContext(AlertToggleContext);
// };

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);

  const toggle = useCallback(() => {
    return setAlert((prev) => !prev);
  }, [alert]);

  //   return (
  //     <AlertContext.Provider value={alert}>
  //       <AlertToggleContext.Provider value={toggle}>{children}</AlertToggleContext.Provider>
  //     </AlertContext.Provider>
  //   );

  return (
    <AlertContext.Provider
      value={{
        visible: alert,
        toggle,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;

import Navbar from "../navbar";

// eslint-disable-next-line react/prop-types
export const HeaderFooterLayout = ({ children }) => (
    <>
      <Navbar/>
      {children}
    </>
  );

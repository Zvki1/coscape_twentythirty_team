import SideBar from "../SideBar";

// eslint-disable-next-line react/prop-types
export const SidebarLayout = ({ children }) => (
    <div className="flex flex-row">
      <SideBar/>
      {children}
    </div>
  );

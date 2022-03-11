import { Navbar } from "@components/Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

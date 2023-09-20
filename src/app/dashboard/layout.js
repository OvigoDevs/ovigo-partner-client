"use client"

const DashboardLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="w-full px-[1rem] min-h-screen">{children}</div>
    </div>
  );
};

export default DashboardLayout;

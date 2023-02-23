const NavBar = () => {
  return (
    <nav className="p-[20px] flex  items-center max-w-[600px] m-auto border-b-2 border-white o">
      <h1 className="text-red-600 font-bold text-2xl">Lord Zeus</h1>
      <div className="  ml-auto z-10">
        <div className="ml-16 no-underline space-x-3 text-white">
          <a href="https://www.linkedin.com/in/arnavshukla/recent-activity/shares/" target="_blank">Blog</a>
          <a href="https://youtu.be/xjrU3N8M4eo?t=12">uwu</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

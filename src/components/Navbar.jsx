function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        AirAware <span>AI</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#health">Health Tips</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
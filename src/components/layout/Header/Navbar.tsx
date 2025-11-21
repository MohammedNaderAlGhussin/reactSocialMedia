
const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-3">
        <li>
          <a href="" className="nav-link active">
            Home
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Profile
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar

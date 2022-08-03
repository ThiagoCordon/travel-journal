import World from "/world.png";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <img src={World} alt="" />
      <h1>my travel journal.</h1>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="flex justify-between m-5">
      <div>Simple Shopping Website</div>
      <nav>
        <menu className="flex gap-4">
          <li>
            <a
              href="#"
              className="hover:text-yellow-600 hover:underline hover:decoration-1"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-yellow-600 hover:underline hover:decoration-1"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-yellow-600 hover:underline hover:decoration-1"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-yellow-600 hover:underline hover:decoration-1"
            >
              Cart
            </a>
          </li>
        </menu>
      </nav>
    </header>
  );
}

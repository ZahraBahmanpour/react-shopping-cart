import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="flex justify-between m-5">
      <div>Simple Shopping Website</div>
      <nav>
        <menu className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 underline decoration-1"
                  : "hover:text-yellow-600 hover:underline hover:decoration-1"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 underline decoration-1"
                  : "hover:text-yellow-600 hover:underline hover:decoration-1"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 underline decoration-1"
                  : "hover:text-yellow-600 hover:underline hover:decoration-1"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 underline decoration-1"
                  : "hover:text-yellow-600 hover:underline hover:decoration-1"
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 underline decoration-1"
                  : "hover:text-yellow-600 hover:underline hover:decoration-1"
              }
            >
              Login
            </NavLink>
          </li>
        </menu>
      </nav>
    </header>
  );
}

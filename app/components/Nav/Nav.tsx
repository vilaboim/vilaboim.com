import { NavLink } from "@remix-run/react";

interface NavLinkProps {
  label: string;
  to: string;
}

export default function Nav({ items }: { items: NavLinkProps[] }) {
  const activeClassName = "underline";

  return (
    <nav>
      <ul>
        {items.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? activeClassName : undefined}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

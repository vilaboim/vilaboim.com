import { NavLink } from "@remix-run/react";

interface NavigationProps {
  items: {
    label: string;
    to: string;
  }[]
}

export default function Navigation({ items }: NavigationProps) {
  return (
    <nav>
      <ul>
        {items.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

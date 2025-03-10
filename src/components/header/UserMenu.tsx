import { Link } from "react-router";

function UserMenu() {
  return (
    <nav>
      <ul>
        <li><Link to="/settings">Settings</Link></li>
        <li><button>Logout</button></li>
      </ul>
    </nav>
  )
}

export default UserMenu;
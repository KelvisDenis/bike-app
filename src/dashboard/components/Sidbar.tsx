import { useState } from "react";
import "../styles/components/SidBar.css";

function SidBar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h2>{collapsed ? "" : "Admin Panel"}</h2>

        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
        >
          {collapsed ? "=" : "="}
        </button>
      </div>

      <nav className="sidebar-menu">
        <ul>
          <li>
            <a href="/admin">
              <span className="icon"></span>
              {!collapsed && <span>Dashboard</span>}
            </a>
          </li>

          <li>
            <a href="/admin/pecas">
              <span className="icon"></span>
              {!collapsed && <span>Peças</span>}
            </a>
          </li>

          <li>
            <a href="/admin/servicos">
              <span className="icon"></span>
              {!collapsed && <span>Serviços</span>}
            </a>
          </li>

        </ul>
      </nav>

      <div className="sidebar-footer">
        {!collapsed && <span>© Admin</span>}
      </div>
    </aside>
  );
}

export default SidBar;

import { useState } from "react";
import "../styles/components/SidBar.css";

function SidBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`sidebar ${collapsed ? "collapsed" : ""} ${
          mobileOpen ? "mobile-open" : ""
        }`}
      >
        <div className="sidebar-header">
          {!collapsed && <h2>Admin</h2>}

          {/* Botão desktop */}
          <button
            className="collapse-btn desktop-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            ☰
          </button>
        </div>

        <nav className="sidebar-menu">
          <ul>
            <li>
              <a href="/admin">
                {!collapsed && <span>Dashboard</span>}
              </a>
            </li>
            <li>
              <a href="/admin/pecas">
                {!collapsed && <span>Peças</span>}
              </a>
            </li>
            <li>
              <a href="/admin/servicos">
                {!collapsed && <span>Serviços</span>}
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          {!collapsed && <span>© Admin</span>}
        </div>
      </aside>

      {/* Botão mobile fora do aside */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </button>
    </>
  );
}

export default SidBar;

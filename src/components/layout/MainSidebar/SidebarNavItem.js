import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink, Nav } from "shards-react";
import { Link } from "react-router-dom";

const SidebarNavItem = ({ item }) => (
  <NavItem className="sidebar-Nav">
    <Link class="nav-link" tag={RouteNavLink} to={item.to}>
      {item.htmlBefore && (
        <div
          className="d-inline-block item-icon-wrapper"
          dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
        />
      )}
      {item.title && <span>{item.title}</span>}

      {item.htmlAfter && (
        <div
          className="d-inline-block item-icon-wrapper float-right"
          dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
        />
      )}
    </Link>

    {item.content.length ? (
      <Nav className="nav--borders flex-column show collapse dropdown-menu dropdown-menu-small">
        {item.content.map((innerContent, idx) => (
          <NavItem key={innerContent.id}>
            <Link class="nav-link" tag={RouteNavLink} to={innerContent.to}>
              {innerContent.title}
            </Link>
          </NavItem>
        ))}
      </Nav>
    ) : null}
  </NavItem>
);

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;

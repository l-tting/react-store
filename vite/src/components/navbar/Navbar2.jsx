import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaUser } from 'react-icons/fa';
import logo from '../../assets/images/oneshoplogo.jpg';

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility on profile click
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close the dropdown if clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  // Set up event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        {/* Left-aligned link */}
        <li style={styles.navItem}>
            <b>
            <Link to="/" style={styles.navLink}>OneShop</Link>
            </b>
        </li>

        {/* Center-aligned links for Dashboard, Products, Sales, Stock, Support */}
        {auth.isAuthenticated && (
          <div style={styles.centerNav}>
            <li style={styles.navItem}>
              <Link to="/dashboard" style={styles.whiteNavLink}>Dashboard</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/stock" style={styles.whiteNavLink}>Stock</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/products" style={styles.whiteNavLink}>Products</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/sales" style={styles.whiteNavLink}>Sales</Link>
            </li>
           
            <li style={styles.navItem}>
              <Link to="/support" style={styles.whiteNavLink}>Support</Link>
            </li>
          </div>
        )}

        {/* Right-aligned login, register, and profile dropdown links */}
        <div style={styles.authLinks}>
          {!auth.isAuthenticated ? (
            <>
              <li style={styles.navItem}>
                <Link to="/signin" style={styles.navLink}>Sign In</Link>
              </li>
            </>
          ) : (
            // Render profile dropdown and logout link when authenticated
            <>
              <li style={styles.navItem} ref={dropdownRef}>
                <Link to="#" onClick={toggleDropdown} style={styles.navLink}>
                <FaUser style={{ fontSize: '20px', marginRight: '8px' }} /> 
                </Link>
                {dropdownOpen && (
                  <ul style={styles.dropdown}>
                    <li style={styles.dropdownItem}>
                      <Link to="/profile" style={styles.dropdownLink}>My Profile</Link>
                    </li>
                    <li style={styles.dropdownItem}>
                      <Link to="/settings" style={styles.dropdownLink}>Settings</Link>
                    </li>
                    <li style={styles.dropdownItem}>
                      <Link to="/signin" style={styles.dropdownLink}>Log Out</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li style={styles.navItem}>
                <Link to="/signin" onClick={logout} style={styles.navLink}>Logout</Link>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#2A3C4E",
    padding: "15px 0",
  },
  navList: {
    display: "flex",
    justifyContent: "space-between",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    width: "100%",
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "#f5c77e",
    textDecoration: "none",
    fontSize: "16px",
    font:"bold"
  },
  whiteNavLink: {
    color: "#ffffff", // Set to white
    textDecoration: "none",
    fontSize: "16px",
    font:"bold"
  },
  centerNav: {
    display: "flex",
    justifyContent: "center",
    flex: 1, // Ensure the center nav occupies the space between the left and right sections
  },
  authLinks: {
    display: "flex",
    marginLeft: "auto", // This pushes the auth links to the far right
    position: "relative", // Needed for dropdown positioning
  },
  dropdown: {
    position: "absolute",
    top: "30px",
    right: "0",
    backgroundColor: "#f5c77e",
    listStyleType: "none",
    margin: 0,
    width: '110px',
    marginRight:50,
    marginTop:10,
    padding: 0,
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    zIndex: "10",
  },
  dropdownItem: {
    padding: "10px 20px",
  },
  dropdownLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 'bold'
  },
};

export default Navbar;

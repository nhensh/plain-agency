import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";
import { CONTACT_INFO } from "../../constants/contact";

const SideNav = ({ toggleSidenav }) => {
  const closeSideNav = () => {
    const html = document.querySelector("html"),
      sideNav = document.querySelector(".side-nav");

    sideNav.classList.remove("opened");
    html.classList.remove("side-nav-opened");
  };

  useEffect(() => {
    // Close sidenav while navigate to another page
    Router.events.on("routeChangeStart", closeSideNav);
    return () => {
      Router.events.off("routeChangeStart", closeSideNav);
    };
  }, []);

  return (
    <div className="side-nav">
      <div className="side-nav-inner">
        <form action="#" className="side-nav-search-form">
          <div className="form-group search-field">
            <input
              type="text"
              className="search-field"
              name="search-field"
              placeholder="Search..."
            />
            <button className="side-nav-search-btn">
              <i className="fas fa-search" />
            </button>
          </div>
        </form>

        <div className="side-nav-content">
          <div className="row">
            <div className="col-lg-6 col-12">
              <ul className="main-navigation">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-12">
              <div className="axil-contact-info-inner">
                <div className="axil-contact-info">
                  <address className="address">
                    <span className="title">Contact Information</span>
                    <p>{CONTACT_INFO.contactMessage}</p>
                  </address>
                  <address className="address">
                    <span className="title">Contact Us</span>
                    <p>
                      <a className="tel" href={`mailto:${CONTACT_INFO.email}`}>
                        <i className="fas fa-envelope" />
                        {CONTACT_INFO.email}
                      </a>
                    </p>
                    <p>
                      <a className="tel" href={`tel:${CONTACT_INFO.phone}`}>
                        <i className="fas fa-phone" />
                        {CONTACT_INFO.phoneFormatted}
                      </a>
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="close-sidenav" onClick={toggleSidenav}>
          <button className="close-button">
            <i className="fal fa-times" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

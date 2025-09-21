import "./FooterNav.css";

function FooterNav() {
  return (
    <div className="footer-container">
      <div className="footer-nav-container">
        {/* <div className="footer-socials">
          {socialIcons.map((icon) => (
            <a
              className="footer-social-icon"
              href="https://twitter.com/pencil_digitals"
            >
              {icon}
            </a>
          ))}
        </div> */}
      </div>
      <footer className="footer-logo-container">Clevertag</footer>
      Toronto ON, Canada
      <h6>Copyright © {new Date().getFullYear()} Clevertag</h6>
    </div>
  );
}

export default FooterNav;

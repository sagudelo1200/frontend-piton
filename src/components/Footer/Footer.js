import React from "react";

import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.github.com/sagudelo1200" target="_blank">
              GitHub
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://twitter.com/sagudelo1200/" target="_blank">
              Twitter
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/sagudelo1200" target="_blank">
              Linkedin
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://github.com/sagudelo1200"
            target="_blank"
            rel="noreferrer"
          >
            Santiago Agudelo
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

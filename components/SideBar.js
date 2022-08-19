import { Container } from "react-bootstrap";
import SidebarMenu from "react-bootstrap-sidebar-menu";

import styles from "../styles/sideBarMenu.module.css";

import sections from "../public/Handbook/sections";

const SideBar = () => {
  return (
    <SidebarMenu expand="lg" hide="md">
      <div className={styles.sidebar}>
        <Container className="container-fluid">
          <SidebarMenu.Header>
            <SidebarMenu.Toggle aria-controls="basic-navbar-nav" />
          </SidebarMenu.Header>
          <SidebarMenu.Collapse>
            <SidebarMenu.Body>
              {sections.map((section) => {
                return (
                  <SidebarMenu.Sub>
                    <SidebarMenu.Sub.Toggle
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        backgroundColor: "#facaf0",
                        height: "2.7rem",
                      }}
                    >
                      <SidebarMenu.Nav.Title>
                        {section.header}
                      </SidebarMenu.Nav.Title>
                    </SidebarMenu.Sub.Toggle>
                    <SidebarMenu.Sub.Collapse>
                      {section.subsections.map((sub) => {
                        return (
                          <SidebarMenu.Nav
                            style={{
                              height: "2rem",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <SidebarMenu.Nav.Link
                              href={`#${sub.link}`}
                              style={{
                                color: "black",
                                width: "100%",
                                border: "1px solid black",
                                borderRadius: "5px",
                                backgroundColor: "#f7d5f0",
                                textAlign: "center",
                              }}
                            >
                              <SidebarMenu.Nav.Title>
                                {sub.title}
                              </SidebarMenu.Nav.Title>
                            </SidebarMenu.Nav.Link>
                          </SidebarMenu.Nav>
                        );
                      })}
                    </SidebarMenu.Sub.Collapse>
                  </SidebarMenu.Sub>
                );
              })}
            </SidebarMenu.Body>
          </SidebarMenu.Collapse>
        </Container>
      </div>
    </SidebarMenu>
  );
};

export default SideBar;

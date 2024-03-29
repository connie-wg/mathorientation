import { Container } from "react-bootstrap";
import SidebarMenu from "react-bootstrap-sidebar-menu";

import * as styles from "../styles/sideBarMenu.module.css";

import sections from "../public/Handbook/sections";

const SideBar = () => {
  return (
    <div className={styles.nav}>
      <SidebarMenu exclusiveExpand={true}>
        <Container className="container-fluid">
          <SidebarMenu.Header>
            <SidebarMenu.Toggle />
          </SidebarMenu.Header>
          <SidebarMenu.Collapse>
            <SidebarMenu.Body>
              {sections.map((section, key) => {
                return (
                  <SidebarMenu.Sub key={key}>
                    <SidebarMenu.Sub.Toggle
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        border: "2px",
                        backgroundColor: "#F2ACB9",
                        minHeight: "2.7rem",
                      }}
                    >
                      <SidebarMenu.Nav.Title>
                        {section.header}
                      </SidebarMenu.Nav.Title>
                    </SidebarMenu.Sub.Toggle>
                    <SidebarMenu.Sub.Collapse>
                      {section.subsections.map((sub, key) => {
                        return (
                          <SidebarMenu.Nav
                            key={key}
                            exclusiveExpand={true}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              minHeight: "2.7rem",
                              border: ".8px solid gray",
                              borderRadius: "5px",
                            }}
                          >
                            <SidebarMenu.Nav.Link
                              href={`#${sub.link}`}
                              style={{
                                color: "black",
                                width: "100%",
                                borderRadius: "5px",
                                backgroundColor: "pink",
                                textAlign: "center",
                                textDecoration: "none",
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
      </SidebarMenu>
    </div>
  );
};

export default SideBar;

import { Container } from 'react-bootstrap';
import SidebarMenu from 'react-bootstrap-sidebar-menu';

import sections from '../public/Handbook/sections';

const SideBar = () => {
    return (
        <div className='sidebar'>
        <SidebarMenu expand="lg" hide="md">
        <Container className="container-fluid">
            <SidebarMenu.Header>
            <SidebarMenu.Toggle aria-controls="basic-navbar-nav"/>
            </SidebarMenu.Header>
        <SidebarMenu.Collapse>
            <SidebarMenu.Body>
                {sections.map(
                    (section) => {
                        return (
                            <SidebarMenu.Sub>
                                <SidebarMenu.Sub.Toggle>
                                    <SidebarMenu.Nav.Title>
                                    {section.header}
                                    </SidebarMenu.Nav.Title>
                                </SidebarMenu.Sub.Toggle>
                                <SidebarMenu.Sub.Collapse>
                                    {section.subsections.map(
                                        (sub) => {
                                            return (
                                                <SidebarMenu.Nav>
                                                  <SidebarMenu.Nav.Link href={`#${sub.link}`}>
                                                    <SidebarMenu.Nav.Title>
                                                      {sub.title} 
                                                    </SidebarMenu.Nav.Title>
                                                  </SidebarMenu.Nav.Link>
                                                </SidebarMenu.Nav>
                                            )
                                        }
                                    )}
                                </SidebarMenu.Sub.Collapse>
                            </SidebarMenu.Sub>
                        )
                    }
                )}
            </SidebarMenu.Body>
            </SidebarMenu.Collapse>
        </Container>
        </SidebarMenu>
        </div>
    )
}

export default SideBar;
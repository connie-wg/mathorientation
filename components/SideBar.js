import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { SidebarMenuNavLink } from 'react-bootstrap-sidebar-menu';

import sections from '../public/Handbook/sections';

const SideBar = () => {
    return (
        <SidebarMenu className={'sidebarnav-container'}
                     exclusiveExpand={false}
                     collapseOnSelect={false}
                     variant={"light"}
                     bg={"light"}
                     rtl={false}
                     expand="lg"
                     hide="md">
            <SidebarMenu.Collapse>
            <SidebarMenu.Header>
            <SidebarMenu.Toggle />
        </SidebarMenu.Header>
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
        </SidebarMenu>
    )
}

export default SideBar;
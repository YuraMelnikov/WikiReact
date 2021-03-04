import SourceLink from '../../components/SourceLink';
import React from 'react';
import {
  MdHome,
  MdAssignment,
  MdTouchApp,
  MdChromeReaderMode,
  MdSchedule,
  MdPeople,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from '../../utils/bemnames';

const sidebarBackground = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navItems = [
  { to: { pathname: "http://tpserver/PWA/Projects.aspx" }, name: 'Проекты', exact: true, Icon: MdHome, target: "_parent" },
  { to: { pathname: "http://tpserver/PWA/Approvals.aspx" }, name: 'Утверждения', exact: true, Icon: MdTouchApp, target: "_parent" },
  { to: { pathname: "http://tpserver/PWA/Tasks.aspx" }, name: 'Задачи', exact: true, Icon: MdChromeReaderMode, target: "_parent" },
  { to: { pathname: "http://tpserver/PWA/Timesheet.aspx" }, name: 'Расписание', exact: true, Icon: MdSchedule, target: "_parent" },
  { to: { pathname: "http://tpserver/PWA/Resources.aspx" }, name: 'Ресурсы', exact: true, Icon: MdPeople, target: "_parent" },
  { to: { pathname: "http://tpserver/PWA/ProjectBICenter/Pages/%D0%9E%D1%82%D1%87%D0%B5%D1%82%D1%8B.aspx" }, name: 'Отчеты', exact: true, Icon: MdAssignment, target: "_parent" },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];
      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <span className="text-white">
                KATEK Project
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon, target }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                  target={target}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
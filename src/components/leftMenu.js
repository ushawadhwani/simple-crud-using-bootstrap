import { Nav, NavItem } from "reactstrap";
const LeftMenu = (props) => {
  //this methods says how the NavBar should look like in HTML
  return (
    <>
      <Nav id="sidebar" navbar vertical>
        <div class="sidebar-header">
          <h3>
            <a class="navbar-brand" href="/">
              My Logo
            </a>
          </h3>
        </div>
        {/* here I pass the array of LIs into the UL */}
        <ul class="navbar-nav mr-auto">
          {props.items.map((item) => (
            <NavItem>
              <a class="nav-link" href={item.url}>
                {item.label}
              </a>
            </NavItem>
          ))}
        </ul>
      </Nav>
    </>
  );
};

export default LeftMenu;

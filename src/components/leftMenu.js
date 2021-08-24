import { Nav, NavItem } from "reactstrap";
const LeftMenu = (props) => {
  //this methods says how the NavBar should look like in HTML
  return (
    <>
      <Nav id="sidebar" navbar vertical>
        <a class="navbar-brand" href="#">
          {/* here I pass the logo url to the navbar image */}
          <img src={props.logo} />
        </a>
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

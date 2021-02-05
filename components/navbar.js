import NavButton from "./../components/navbutton";
import GCPLogo from "./../public/vectorlogo.svg";
const Navbar = (props) => (
  <>
    <div className="container mx-auto max-w-3xl">
      <nav className="flex justify-between mt-8 z-10 mb-2 md:mb-4 lg:mb-6">
        <div>
          <GCPLogo className="h-16 md:24 lg:h-36" />
        </div>
        <div className="flex flex-row items-left ml-16" id="nav-content">
          {props.navButtons.map((button) => (
            <NavButton
              key={button.path}
              path={button.path}
              label={button.label}
            />
          ))}
        </div>
      </nav>
    </div>
  </>
);

export default Navbar;

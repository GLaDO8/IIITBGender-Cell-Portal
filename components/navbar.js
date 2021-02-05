import NavButton from "./../components/navbutton";
import GCPLogo from "./../public/gender-cell-logo.svg";
const Navbar = (props) => (
  <>
    <div className="container mx-auto max-w-lg md:max-w-3xl lg:max-w-4xl">
      <nav className="flex justify-between mt-8 z-10 mb-2 md:mb-4 lg:mb-6">
        <div>
          <GCPLogo className="h-24 w-24 md:h-24 lg:h-36 lg:w-36" />
        </div>
        <div className="flex flex-row items-center ml-16" id="nav-content">
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

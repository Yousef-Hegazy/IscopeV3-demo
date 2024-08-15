import Icon from "../Icon";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import ModeDropdown from "./ModeDropdown";
import HorizontalNavbar from "./HorizontalNavbar";
import NavbarAvatar from "./NavbarAvatar";
import Sidebar from "./Sidebar";
import ThemeSettings from "./ThemeSettings";

const LayoutComponents = () => {
  return (
    <div className="shadow-lg sticky top-0">
      <div className="flex flex-row items-center justify-between px-4 py-2">
        <Sidebar />

        <div className="flex flex-row items-center justify-start gap-3">
          <ThemeSettings />

          <ModeDropdown />

          <Button variant="outline" size="icon">
            <Icon icon="bell-alert" />
          </Button>

          <NavbarAvatar />
        </div>
      </div>

      <Separator />

      <HorizontalNavbar />
    </div>
  );
};

export default LayoutComponents;

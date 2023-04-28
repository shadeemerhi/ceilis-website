import Button from "../design-system/Button";
import NavLink from "../design-system/NavLink";

interface INavLinksProps {
  closeDrawer?: () => void;
}

const NavLinks = ({ closeDrawer }: INavLinksProps) => {
  const onLinkClick = () => {
    if (closeDrawer) {
      closeDrawer();
    }
  };

  const onContactUsClick = () => {
    onLinkClick();
    window.scrollTo({ behavior: "smooth", top: document.body.scrollHeight });
  };

  return (
    <>
      <NavLink text="Menu" href="/menu/food" onClick={onLinkClick} />
      <NavLink text="Gift Cards" href="/gift-cards" onClick={onLinkClick} />
      <Button
        text="Contact Us"
        onClick={onContactUsClick}
        additionalClasses={closeDrawer ? "h-0" : ""}
      />
    </>
  );
};

export default NavLinks;

import Image from "next/image";
import scss from "./Header.module.scss";
import Link from "next/link";
import header_logo from "@/assets/image/header_logo.webp";
const Header = () => {
  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.Header}>
          <h1>AnimeVerse</h1>
          <div className={scss.Header_nav}>
            <Link href={"/"}>ТИПЫ</Link>
            <Link href={"/"}>ВОДА</Link>
            <Link href={"/"}>МОЛНИЯ</Link>
            <Link href={"/"}>ЗЕМЛЯ</Link>
            <Link href={"/"}>ВЕТЕР</Link>
            <Link href={"/"}>ОГОНЬ</Link>
            <Link href={"/"}>ЧАКРА</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl text-color-primary font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="text-color-primary text-md md:text-xl underline hover:text-color-accent transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;

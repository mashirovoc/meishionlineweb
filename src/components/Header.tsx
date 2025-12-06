import { Link } from "react-router";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-6 px-4 container mx-auto flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="App Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">名刺Online</span>
        </div>
      </Link>
      <nav>
        <Button asChild>
          <Link to="YOUR_APP_STORE_LINK_HERE">アプリをダウンロード</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;

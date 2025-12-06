import { Link } from "react-router";

const Footer = () => (
  <footer className="bg-slate-50 text-slate-500 py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; 2025 名刺Online. All rights reserved.</p>
      <div className="mt-4">
        <Link
          to="/privacypolicy"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          プライバシーポリシー
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;

import { useState } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((value) => !value);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="bg-blue-700 sticky top-0 z-10 text-white">
        <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
          <h1 className="text-3xl font-medium">
            <Link to="/" onClick={closeMenu}>
              Londonsoft
            </Link>
          </h1>
          <div>
            <button
              id="hamburger-button"
              className="relative h-8 w-8 cursor-pointer text-4xl md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? '×' : '☰'}
            </button>
            <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
              <Link to="/" className="hover:opacity-90" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/about" className="hover:opacity-90" onClick={closeMenu}>
                About
              </Link>
              <Link to="/contact" className="hover:opacity-90" onClick={closeMenu}>
                Contact
              </Link>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          className={`top-17 justify-center absolute w-full origin-top animate-open-menu flex-col bg-black text-5xl ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <nav className="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
            <Link to="/" className="w-full py-6 text-center hover:opacity-90" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="w-full py-6 text-center hover:opacity-90" onClick={closeMenu}>
              About
            </Link>
            <Link to="/contact" className="w-full py-6 text-center hover:opacity-90" onClick={closeMenu}>
              Contact
            </Link>
          </nav>
        </section>
      </header>

      <main className="mx-auto max-w-6xl p-6">{children}</main>

      <footer id="footer" className="bg-blue-700 text-xl text-white mt-12">
        <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
          <address>
            <h2>Londonsoft Inc.</h2>
            976 Kimball Cres<br />
            London, Ontario N6G 0A7<br />
          </address>
          <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
            <Link to="/contact" className="hover:opacity-90" onClick={closeMenu}>
              Contact
            </Link>
            <Link to="/terms" className="hover:opacity-90" onClick={closeMenu}>
              Terms & Conditions
            </Link>
          </nav>
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">Copyright &copy; <span id="year">2026</span></p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Layout;

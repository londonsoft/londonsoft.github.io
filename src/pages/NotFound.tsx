import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="mx-auto max-w-4xl p-6 text-center">
      <h1 className="text-6xl font-bold text-slate-900 dark:text-white">404</h1>
      <p className="mt-4 text-xl text-slate-700 dark:text-slate-400">Page not found.</p>
      <p className="mt-6">
        <Link to="/" className="text-blue-700 underline">Return home</Link>
      </p>
    </section>
  );
}

export default NotFound;

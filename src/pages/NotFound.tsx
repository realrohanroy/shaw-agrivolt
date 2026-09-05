import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-brand-navy pt-24 pb-12 px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-8xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green mb-6 animate-pulse">
            404
          </h1>
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-brand-muted text-lg mb-10">
            The page you are looking for doesn't exist or has been moved. 
            Let's get you back to our sustainable energy solutions.
          </p>
          <Link to="/" className="btn-pill-blue mx-auto inline-flex">
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

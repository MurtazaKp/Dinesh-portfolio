import { Link, useLocation } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Create breadcrumb labels mapping
  const breadcrumbNameMap: { [key: string]: string } = {
    services: 'Services',
    about: 'About',
    gallery: 'Gallery',
    testimonials: 'Testimonials',
    reviews: 'Reviews',
    contact: 'Contact',
    'motivational-speaking': 'Motivational Speaking',
    'corporate-training': 'Corporate Training',
    'coaching-counseling': 'Coaching & Counseling',
    'money-manifestation': 'Money Manifestation',
  };

  // Don't show breadcrumb on home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] py-4">
        <ol className="flex items-center space-x-2 text-sm">
          {/* Home */}
          <li>
            <Link
              to="/"
              className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="ml-2 hidden sm:inline">Home</span>
            </Link>
          </li>

          {/* Dynamic breadcrumb items */}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNameMap[name] || name;

            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-600 mx-1" />
                {isLast ? (
                  <span className="text-purple-400 font-semibold">{displayName}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
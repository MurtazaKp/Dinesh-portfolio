import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BusinessOpportunitiesPage } from './pages/BusinessOpportunitiesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ErrorBoundary } from './components/ErrorBoundary';

// Router configuration for Dinesh Shinde website
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { 
        index: true, 
        element: <HomePage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "services", 
        element: <ServicesPage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "services/:slug", 
        element: <ServiceDetailPage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "about", 
        element: <AboutPage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "gallery", 
        element: <GalleryPage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "testimonials", 
        element: <TestimonialsPage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "reviews", 
        element: <ReviewsPage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "business-opportunities", 
        element: <BusinessOpportunitiesPage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "contact", 
        element: <ContactPage />,
        errorElement: <ErrorBoundary />
      },
      { 
        path: "*", 
        element: <NotFoundPage /> 
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
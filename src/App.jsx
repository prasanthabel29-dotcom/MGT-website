import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import PageLoader from "./components/Loaders/PageLoader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import WebsiteLayout from "./layouts/WebsiteLayout/WebsiteLayout";

// LAZY PAGES
const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const AboutPage = React.lazy(() => import("./pages/About/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/Contact/ContactPage"));

const ServicesPage = React.lazy(() =>
  import("./pages/Home/sections/services/ServicesPage")
);
const ServiceDetails = React.lazy(() =>
  import("./pages/Home/sections/services/servicesdetails")
);

const BlogsPage = React.lazy(() => import("./pages/Blogs/BlogsPage"));
const BlogDetails = React.lazy(() => import("./pages/Blogs/BlogDetails"));

const Portfolio = React.lazy(() =>
  import("./pages/Home/sections/Portfolio/Portfolio")
);
const PortfolioDetails = React.lazy(() =>
  import("./pages/Home/sections/Portfolio/PortfolioDetails")
);

const Testimonials = React.lazy(() =>
  import("./pages/Home/sections/Testimonials/Testimonials")
);
const TestimonialsDetails = React.lazy(() =>
  import("./pages/Home/sections/Testimonials/TestimonialsDetails")
);

const CareersPage = React.lazy(() =>
  import("./pages/Home/sections/Careers/Careerspages")
);

const NotFoundPage = React.lazy(() =>
  import("./pages/NotFound/NotFoundPage")
);

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>

            <Route index element={<HomePage />} />

            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />

            {/* ✅ ONLY THIS */}
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:id" element={<ServiceDetails />} />

            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:id" element={<PortfolioDetails />} />

            <Route path="blogs" element={<BlogsPage />} />
            <Route path="blogs/:id" element={<BlogDetails />} />

            <Route path="testimonials" element={<Testimonials />} />
            <Route path="testimonials/:id" element={<TestimonialsDetails />} />

            <Route path="careers" element={<CareersPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
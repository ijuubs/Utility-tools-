import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeProvider';

// Lazy load components
const HomePage = lazy(() => import('./pages/HomePage'));
const ToolTemplate = lazy(() => import('./pages/ToolTemplate'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-16 h-16 border-8 border-black border-t-yellow-400 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<LoadingFallback />}>
                <HomePage />
              </Suspense>
            } />
            <Route path="tools/:slug" element={
              <Suspense fallback={<LoadingFallback />}>
                <ToolTemplate />
              </Suspense>
            } />
            <Route path="about" element={
              <Suspense fallback={<LoadingFallback />}>
                <AboutPage />
              </Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<LoadingFallback />}>
                <ContactPage />
              </Suspense>
            } />
            <Route path="privacy" element={
              <Suspense fallback={<LoadingFallback />}>
                <PrivacyPage />
              </Suspense>
            } />
            <Route path="terms" element={
              <Suspense fallback={<LoadingFallback />}>
                <TermsPage />
              </Suspense>
            } />
            <Route path="disclaimer" element={
              <Suspense fallback={<LoadingFallback />}>
                <DisclaimerPage />
              </Suspense>
            } />
            <Route path="faq" element={
              <Suspense fallback={<LoadingFallback />}>
                <FAQPage />
              </Suspense>
            } />
            <Route path="sitemap" element={
              <Suspense fallback={<LoadingFallback />}>
                <SitemapPage />
              </Suspense>
            } />
            <Route path="blog" element={
              <Suspense fallback={<LoadingFallback />}>
                <BlogPage />
              </Suspense>
            } />
            <Route path="blog/:slug" element={
              <Suspense fallback={<LoadingFallback />}>
                <BlogPost />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<LoadingFallback />}>
                <NotFound />
              </Suspense>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
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
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <HomePage />
              </Suspense>
              </ErrorBoundary>
            } />
            <Route path="tools/:slug" element={
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <ToolTemplate />
              </Suspense>
              </ErrorBoundary>
            } />
            <Route path="about" element={
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <AboutPage />
              </Suspense>
              </ErrorBoundary>
            } />
            <Route path="contact" element={
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <ContactPage />
              </Suspense>
              </ErrorBoundary>
            } />
            <Route path="privacy" element={
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <PrivacyPage />
              </Suspense>
              </ErrorBoundary>
            } />
            <Route path="terms" element={
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <TermsPage />
              </Suspense>
              </ErrorBoundary>
            } />
            <Route path="disclaimer" element={
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <DisclaimerPage />
              </Suspense>
              </ErrorBoundary>
            } />
            <Route path="faq" element={
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <FAQPage />
              </Suspense>
              </ErrorBoundary>
            } />
            <Route path="sitemap" element={
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <SitemapPage />
              </Suspense>
              </ErrorBoundary>
            } />
            <Route path="blog" element={
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <BlogPage />
              </Suspense>
              </ErrorBoundary>
            } />
            <Route path="blog/:slug" element={
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <BlogPost />
              </Suspense>
              </ErrorBoundary>
            } />
            <Route path="*" element={
              <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <NotFound />
              </Suspense>
              </ErrorBoundary>
            } />
          </Route>
        </Routes>
        <SpeedInsights />
      </BrowserRouter>
    </ThemeProvider>
  );
}

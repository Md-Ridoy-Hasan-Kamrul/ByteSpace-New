import { Suspense, lazy } from 'react';
import {
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from './components/ErrorBoundary';
import { ROUTES, TOAST_CONFIG } from './config';
import { useSmoothScroll } from './hooks/useSmoothScroll';

const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const CourseDetails = lazy(() => import('./pages/CourseDetails'));
const CreatorProfile = lazy(() => import('./pages/CreatorProfile'));
const SignIn = lazy(() => import('./pages/SignIn'));
const Register = lazy(() => import('./pages/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center" role="status" aria-label="Loading">
    <span className="h-8 w-8 animate-spin rounded-[999px] border-4 border-solid border-brand-blue border-t-transparent" />
  </div>
);

// Every new page opens at the top, back/forward restores the previous position, and Lenis smooths
// wheel scrolling site-wide.
const RootLayout = () => {
  useSmoothScroll();

  return (
    <>
      <ScrollRestoration />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SEARCH} element={<Search />} />
      <Route path={ROUTES.COURSE_DETAILS} element={<CourseDetails />} />
      <Route path={ROUTES.CREATOR_PROFILE} element={<CreatorProfile />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
      <Toaster
        position={TOAST_CONFIG.POSITION}
        toastOptions={{ duration: TOAST_CONFIG.DURATION }}
      />
    </ErrorBoundary>
  );
}

export default App;

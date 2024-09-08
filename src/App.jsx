
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

import { Button } from './components/ui/button';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import OnBoarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import PostJob from './pages/post-job';
import SavedJobs from './pages/saved-job';
import MyJobs from './pages/my-jobs';
import JobPage from './pages/job';
import { ThemeProvider } from './components/ui/theme-provider';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/onboarding",
        element: <OnBoarding />
      },
      {
        path: "/jobs",
        element: <JobListing />
      },
      {
        path: "/job/:id",
        element: <JobPage />
      },
      {
        path: "/post-job",
        element: <PostJob />
      },
      {
        path: "/saved-job",
        element: <SavedJobs />
      },
      {
        path: "/my-jobs",
        element: <MyJobs />
      },

    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    );
}

export default App

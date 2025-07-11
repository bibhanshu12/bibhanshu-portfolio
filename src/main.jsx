import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Components/Home/Home.jsx';
import Resume from './Components/Resume/Resume.jsx';
import Aboutus from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Projects from './Components/Projects';
import Education from './Components/Education.jsx';
import './index.css';
import PageWrapper from './Components/PageWrapper.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <><PageWrapper>
            <Home />
            <Aboutus />
            <Education />
            <Projects />
            </PageWrapper>
            
          </>
        )
      },
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/about',
        element: <Aboutus />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/projects',
  element: <Projects />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
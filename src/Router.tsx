import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Projects } from './pages/Projects.page';
import { Contact} from './pages/Contact.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
   {
    path: '/contact',
    element: <Contact />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}

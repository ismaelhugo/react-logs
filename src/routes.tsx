import Home from './routes/Home/Home.tsx'
import Contact from './routes/Contact/Contact.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { withFaroRouterInstrumentation } from '@grafana/faro-react';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/contact',
      element: <Contact />,
    }
])
const browserRouter = withFaroRouterInstrumentation(router);

export default browserRouter;
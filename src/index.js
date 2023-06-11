import React from 'react';
import NewPost, { action as FormDataSubmitHandler } from './components/NewPost';
import ReactDOM from 'react-dom';
import RouterLayout from './router/RouterLayout';
import './index.css';
import App, { Postloader as InsertedData } from './router/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterLayout />,
    children: [
      {
        path: '/',
        loader: InsertedData,
        element: <App />,
        children: [
          {
            path: '/NewPost',
            element: <NewPost />,
            action: FormDataSubmitHandler,
          },
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import PageToRead from './components/PageToRead/PageToRead.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import Blog from './components/Blog/Blog.jsx';
import About from './components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch('/book-data.json'),
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/book-data.json'),
      },
      {
        path: '/pagesToRead',
        element: <PageToRead></PageToRead>,
        loader: () => fetch('/book-data.json'),
      },
      {
        path: '/bookDetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/book-data.json'),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

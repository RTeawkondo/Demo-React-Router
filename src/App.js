import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product", element: <Product /> },
    ],
  },
]);

// const routerOlday = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>} />
//     <Route path="/product" element={<Product/>} />
//   </Route>
// )

// const routerOlderDay = createBrowserRouter(routerOlday)

function App() {
  return <RouterProvider router={router} />;
}

export default App;

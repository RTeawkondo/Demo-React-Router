import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Product from "./pages/Product";

const router = createBrowserRouter([
  { path: "/", element: <HomePage/>},
  { path: "/product", element: <Product/>}
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

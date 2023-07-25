import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Product from "./pages/Product";

const router = createBrowserRouter([
  { path: "/", element: <HomePage/>},
  { path: "/product", element: <Product/>}
])

const routerOlday = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage/>} />
    <Route path="/product" element={<Product/>} />
  </Route>
)

const routerOlderDay = createBrowserRouter(routerOlday)

function App() {
  return <RouterProvider router={routerOlderDay}/>;
}

export default App;

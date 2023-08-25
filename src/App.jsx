import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Explore from "./components/pages/Explore";
import Search from "./components/pages/Search";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<Search />} />
        </Route>
        {/* <Route path="/auth" element={<Login />} /> */}
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

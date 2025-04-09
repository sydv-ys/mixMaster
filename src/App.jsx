import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  HomeLayout,
  Cocktail,
  Error,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsAction } from "./pages/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      { path: "newsletter", element: <Newsletter />, action: newsAction },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};
export default App;

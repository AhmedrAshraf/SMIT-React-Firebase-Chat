<!--

For routing
    we installed react-router-dom by this command "npm install react-router-dom"

we imported
    import { createBrowserRouter, RouterProvider } from "react-router-dom";

in renter we used createBrowserRouter function to define path and element like this
    const router = createBrowserRouter([
      { path: "/", element: <Home /> },
    ]);

in return of function we used RouterProvider like this
    return <RouterProvider router={router} />

-->


<!-- 
    useEffect only call when page reload
    useState is used to store value in variable
 -->

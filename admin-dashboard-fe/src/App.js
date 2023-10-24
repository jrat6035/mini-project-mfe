import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import MainLayout from "./screens/MainLayout";
import AddProduct from "./screens/products/AddProduct";
import ViewProducts from "./screens/products/ViewProducts";
import { ROUTE_PATHS } from "./constants/routes";
import SignUp from "./screens/users/SignUp";
import SignUpComfirmation from "./screens/users/SignUpComfirmation";
import Login from "./screens/users/Login";
import UserProfile from "./screens/users/UserProfile";
import { AuthProvider } from "./auth/AuthContext";
import RouteGuard from "./auth/RouteGuard";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route
              path={ROUTE_PATHS.DEFAULT}
              exact
              element={<ViewProducts />}
            />
            <Route path={ROUTE_PATHS.ADD_PRODUCT} element={<AddProduct />} />
            <Route
              path={ROUTE_PATHS.VIEW_PRODUCTS}
              element={<ViewProducts />}
            />
            <Route path={ROUTE_PATHS.USER_SIGNUP} element={<SignUp />} />
            <Route path="/confirm-sign-up" element={<SignUpComfirmation />} />
            <Route path={ROUTE_PATHS.USER_LOGIN} element={<Login />} />
            <Route
              path={ROUTE_PATHS.USER_PROFILE}
              element={
                <RouteGuard>
                  <UserProfile />
                </RouteGuard>
              }
            />
          </Routes>
        </MainLayout>
      </Router>
    </AuthProvider>
  );
};

export default App;

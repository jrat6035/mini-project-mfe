import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import MainLayout from "./screens/MainLayout";
import AddProduct from "./screens/products/AddProduct";
import ViewProducts from "./screens/products/ViewProducts";
import SignUp from "./screens/users/SignUp";
import SignUpComfirmation from "./screens/users/SignUpComfirmation";
import Login from "./screens/users/Login";
import UserProfile from "./screens/users/UserProfile";
import { AuthProvider } from "./auth/AuthContext";
import RouteGuard from "./auth/RouteGuard";
import Product from "./screens/products/Product";
import { ROUTE_PATHS } from "./routes/routes";
import DisplayProducts from "./screens/products/DisplayProducts";
import BuyProduct from "./screens/products/BuyProduct";
import Orders from "./screens/Orders";
import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path={ROUTE_PATHS.USER_SIGNUP} element={<SignUp />} />
              <Route path={ROUTE_PATHS.USER_LOGIN} element={<Login />} />
              <Route
                path={ROUTE_PATHS.CONFIRM_SIGN_UP}
                element={
                  <RouteGuard>
                    <SignUpComfirmation />
                  </RouteGuard>
                }
              />
              <Route
                path={ROUTE_PATHS.ADD_PRODUCT}
                element={
                  <RouteGuard>
                    <AddProduct />
                  </RouteGuard>
                }
              />
              <Route
                path={ROUTE_PATHS.EDIT_PRODUCTS}
                element={
                  <RouteGuard>
                    <ViewProducts />
                  </RouteGuard>
                }
              />
              <Route
                path={ROUTE_PATHS.DISPLAY_PRODUCTS}
                element={
                  <RouteGuard>
                    <DisplayProducts />
                  </RouteGuard>
                }
              />
              <Route
                path={`${ROUTE_PATHS.PRODUCT}/:productId`}
                element={
                  <RouteGuard>
                    <Product />
                  </RouteGuard>
                }
              />
              <Route
                path={`${ROUTE_PATHS.VIEW_PRODUCT}/:productId`}
                element={
                  <RouteGuard>
                    <BuyProduct />
                  </RouteGuard>
                }
              />
              <Route
                path={ROUTE_PATHS.VIEW_CART}
                element={
                  <RouteGuard>
                    <Orders />
                  </RouteGuard>
                }
              />
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
    </Provider>
  );
};

export default App;

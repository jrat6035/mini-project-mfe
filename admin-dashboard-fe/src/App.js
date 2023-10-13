import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import MainLayout from "./screens/MainLayout";
import AddProduct from "./screens/products/AddProduct";
import ViewProducts from "./screens/products/ViewProducts";
import { ROUTE_PATHS } from "./constants/routes";

const App = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path={ROUTE_PATHS.DEFAULT} exact element={<ViewProducts />} />
                    <Route path={ROUTE_PATHS.ADD_PRODUCT} element={<AddProduct />} />
                    <Route path={ROUTE_PATHS.VIEW_PRODUCTS} element={<ViewProducts />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;

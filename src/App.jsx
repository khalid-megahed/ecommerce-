import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Pages/Sign-in/SignIn";
import Search from "./Components/Search/Search";
import Product from "./Pages/Product/Product";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar logo={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/search" element={<Search />} />
        <Route path="/women" element={<ShopCategory category="women" />} />
        <Route
          path="/women_jacket"
          element={<ShopCategory categoryDetails="women_jacket" />}
        />
        <Route
          path="/women_dress"
          element={<ShopCategory categoryDetails="women_dress" />}
        />
        <Route
          path="/women_jacket"
          element={<ShopCategory categoryDetails="women_jacket" />}
        />
        <Route
          path="/women_pocket"
          element={<ShopCategory categoryDetails="women_pocket" />}
        />
        <Route
          path="/women_veil"
          element={<ShopCategory categoryDetails="women_veil" />}
        />
        <Route
          path="/men_jacket"
          element={<ShopCategory categoryDetails="men_jacket" />}
        />
        <Route
          path="/men_jeans"
          element={<ShopCategory categoryDetails="men_jeans" />}
        />
        <Route
          path="/men_bady"
          element={<ShopCategory  categoryDetails="men_bady" />}
        />
        <Route
          path="/men_hoodies"
          element={<ShopCategory categoryDetails="men_hoodies" />}
        />
        <Route
          path="/kid_jacket"
          element={<ShopCategory categoryDetails="kid_jacket" />}
        />
        <Route
          path="/kid_Hoodie"
          element={<ShopCategory categoryDetails="kid_Hoodie" />}
        />
        <Route
          path="/kid_dress"
          element={<ShopCategory categoryDetails="kid_dress" />}
        />
        <Route
          path="/kid_Sweet_Sheet"
          element={<ShopCategory categoryDetails="kid_Sweet_Sheet" />}
        />
        <Route
          path="/kid_short"
          element={<ShopCategory categoryDetails="kid_short" />}
        />
        <Route
          path="/kid_pullover"
          element={<ShopCategory categoryDetails="kid_pullover" />}
        />
        <Route
          path="/kid_jeans"
          element={<ShopCategory categoryDetails="kid_jeans" />}
        />
        
        

        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/kids" element={<ShopCategory category="kid" />} />
        <Route path="product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      <Footer logo={logo} />
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import Header from "./components/Header";
import { Routes, Route,useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { clickMenuButtonAction } from "./redux/actions/MenuActions";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import NewPDF from "./pages/NewPDF";
import SignPage from "./pages/SignPage";


const App: React.FC<any> = (props) => {
  const { menuState, menuType, getMenu } = props;
  const location = useLocation()
  
  return (
    <>
      <Header open={getMenu} state={menuState} />
      <div className="d-flex midHiegh">
        {menuState && <Menu menutype={location.pathname} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpdf" element={<NewPDF />} />
          <Route path="/signpage" element={<SignPage />} />
        </Routes>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  menuState: state.menuReducer.menuState,
  menuType: state.menuReducer.menuTyupe,
});

export default connect(mapStateToProps, {
  getMenu: clickMenuButtonAction,
})(App);

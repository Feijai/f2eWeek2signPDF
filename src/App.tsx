import React from "react";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { clickMenuButtonAction } from "./redux/actions/MenuActions";
import { pdfUploadAction, pdfChooseAction } from "./redux/actions/PdfActions";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import NewPDF from "./pages/NewPDF";
import SignPage from "./pages/SignPage";

const App: React.FC<any> = (props) => {
  const {
    menuState,
    menuType,
    getMenu,
    uploadPdf,
    pdf,
    editingPdf,
    choosePdf,
  } = props;
  const location = useLocation();

  return (
    <>
      <Header open={getMenu} state={menuState} />
      <div className="d-flex midHiegh">
        {menuState && (
          <Menu
            menutype={location.pathname}
            pdf={pdf}
            choosePdf={choosePdf}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpdf" element={<NewPDF uploadPdf={uploadPdf} />} />
          <Route path="/signpage" element={<SignPage pdf={pdf} />} />
        </Routes>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  menuState: state.menuReducer.menuState,
  menuType: state.menuReducer.menuTyupe,
  pdf: state.pdfReducer.pdf,
  editingPdf: state.pdfReducer.editingPdf,
});

export default connect(mapStateToProps, {
  getMenu: clickMenuButtonAction,
  uploadPdf: pdfUploadAction,
  choosePdf: pdfChooseAction,
})(App);

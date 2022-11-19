import React from "react";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { clickMenuButtonAction } from "./redux/actions/MenuActions";
import { pdfUploadAction, pdfChooseAction, pdfDownloadAction } from "./redux/actions/PdfActions";
import { clickSaveSignAction, chooseSignAction } from "./redux/actions/SignActions";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import NewPDF from "./pages/NewPDF";
import SignPage from "./pages/SignPage";
import SignPDFPage from "./pages/SignPDFPage";

const App: React.FC<any> = (props) => {
  const {
    menuState,
    menuType,
    getMenu,
    uploadPdf,
    pdf,
    editingPdf,
    choosePdf,
    saveSign,
    chooseSign,
    pdfDownload
  } = props;
  const location = useLocation();

  return (
    <>
      <Header open={getMenu} state={menuState} menutype={location.pathname} pdfDownload={pdfDownload} />
      <div className="d-flex midHiegh">
        {menuState && (
          <Menu menutype={location.pathname} pdf={pdf} choosePdf={choosePdf} chooseSign={chooseSign} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpdf" element={<NewPDF uploadPdf={uploadPdf} />} />
          <Route path="/signpdfpage" element={<SignPDFPage pdf={pdf} pdfDownload={pdfDownload} />} />
          <Route path="/signpage" element={<SignPage saveSign={saveSign} />} />
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
  saveSign: clickSaveSignAction,
  chooseSign: chooseSignAction,
  pdfDownload: pdfDownloadAction
})(App);

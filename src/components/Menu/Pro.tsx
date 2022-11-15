import React from "react";
import { ProCss } from "./style";
import logo from '../../assets/logo_dottedsign.png'
import pro from '../../assets/states.png'
import ba from '../../assets/Business-analysis.png'  
import fifty from '../../assets/50.png'
import sale from '../../assets/sale-icon.png'

export default function Pro() {
  return (
    <ProCss className="position-relative d-flex">
        <img src={logo} alt="" className="logo position-absolute" />
        <img src={pro} alt="" className="pro position-absolute"/>
        <img src={ba} alt="" className="ba position-absolute"/>
        <img src={fifty} alt="" className="fifty position-absolute"/>
        <img src={sale} alt="" className="sale position-absolute" />
        <p className="upgrade position-absolute text-white">立即升級</p>
    </ProCss>
  );
}

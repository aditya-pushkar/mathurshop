import { Navigate, useNavigate } from "react-router-dom";

import scrollTo from "./scrollTo";

const ScrollToFaqs = () => {
    const navigate = useNavigate();
    navigate("/");

    scrollTo(6661);
};


export default ScrollToFaqs;
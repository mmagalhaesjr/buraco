import { Link } from "react-router-dom";
import { StyledHeader } from "./styled";

import logo from '../../assets/logo.png'


export default function Header() {
    return (
        <StyledHeader>

            <Link to={'/'}>
                <img src={logo} alt="logo" />
            </Link>

        </StyledHeader>
    )
}
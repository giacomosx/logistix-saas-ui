import { Footer } from "flowbite-react";
import {customTheme} from "./theme";

export function MainFooter() {
    return (
        <Footer container theme={customTheme}>
            <Footer.Copyright href="/" by="Eco Saas™" year={2024} />
            <Footer.LinkGroup>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}

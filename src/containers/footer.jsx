import Footer from "../components/Footer";
import Icons from '../components/icons'

const FooterContainer = () => {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Services</Footer.Title>
                        <Footer.Link href="#">Marketing</Footer.Link>
                        <Footer.Link href="#">Consulting</Footer.Link>
                        <Footer.Link href="#">Development</Footer.Link>
                        <Footer.Link href="#">Design</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="#">Brazil</Footer.Link>
                        <Footer.Link href="#">United Kingdom</Footer.Link>
                        <Footer.Link href="#">Australia</Footer.Link>
                        <Footer.Link href="#">Support</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="#"><Icons className="fab fa-facebook-f" />Facebook</Footer.Link>
                        <Footer.Link href="#"><Icons className="fab fa-instagram" />Instagram</Footer.Link>
                        <Footer.Link href="#"><Icons className="fab fa-youtube" />Youtube</Footer.Link>
                        <Footer.Link href="#"><Icons className="fab fa-twitter" />Twitter</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}

export default FooterContainer;
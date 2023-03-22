import React from 'react';
import twitter from '../assets/image/twitter-icon.svg';
// import linkedin from '../assets/image/linkedin-icon.svg';
import facebook from '../assets/image/facebook-icon.svg';
import github from '../assets/image/github-icon.svg';

const Footer = () => {
    return(
        <footer class="section section-separated py-lg">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <img src={"../assets/image/adg.svg"} alt="footer logo" class="img-fluid mb-4" />
                    <p class="footer__info--text">Rayacanto
                    </p>
                    <ul class="social__links">
                        <li>
                            <a href="#">
                                <img src={facebook} alt="fb" class="img-fluid" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/rayacantoo">
                                <img src={twitter} alt="tw" class="img-fluid" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/rayacantoo">
                                <img src={twitter} alt="in" class="img-fluid" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/rayacantoofb">
                                <img src={github} alt="gh" class="img-fluid" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-4">
                    <p class="footer-col__head">Contact Us</p>

                    <div class="contact__address">

                        <p></p>

                        <p> Email: admin@rayacanto.com</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <p class="footer-col__head">Quick Links</p>
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="footer__links">
                                <li>
                                    <a href="https://rayacanto.com">ABOUT</a>
                                </li>
                                <li>
                                    <a href="#">FEATURES</a>
                                </li>
                                <li>
                                    <a href="https://rayacanto.com/roadmap.html">TOKENS</a>
                                </li>
                                <li>
                                    <a href="https://rayacanto.com/roadmap.html">ROADMAP</a>
                                </li>
                                <li>
                                    <a href="https://rayacanto.gitbook.io/tokenomics/raya-economy/economy-overview-1.0">WHITEPAPER</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="footer__links">
                                <li>
                                    <a href="#">HELP</a>
                                </li>
                                <li>
                                    <a href="#">TERMS OF USE</a>
                                </li>
                                <li>
                                    <a href="#">PRIVACY POLICY</a>
                                </li>
                                <li>
                                    <a href="#">AGREEMENTS</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5">
                <p class="copyright__text mb-0"><small>Copyright ©</small></p>
            </div>
        </div>
    </footer>
    )
}
export default Footer;
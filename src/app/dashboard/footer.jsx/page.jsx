export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-box">
                        <img src="plant1.png" alt="icon" />
                        <h3>Garden Care</h3>
                        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="footer-box">
                        <img src="plant2.png" alt="icon" />
                        <h3>Plant Renovation</h3>
                        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="footer-box">
                        <img src="plant3.png" alt="icon" />
                        <h3>Watering Garden</h3>
                        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                    </div>
                    <div className="newsletter">
                        <h4>Would you like to join newsletters?</h4>
                        <form>
                            <input type="email" placeholder="enter your email address..." />
                            <button type="submit">JOIN</button>
                        </form>
                        <p>We usually post offers and challenges in newsletter. We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!</p>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="logo">
                        <img src="logo.png" alt="GreenShop" />
                        <span>GREENSHOP</span>
                    </div>
                    <div className="contact">
                        <span>📍 70 West Buckingham Ave. Farmingdale, NY 11735</span>
                        <span>✉️ contact@greenshop.com</span>
                        <span>📞 +88 01911 717 490</span>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="links">
                        <div className="column">
                            <h4>My Account</h4>
                            <ul>
                                <li>My Account</li>
                                <li>Address</li>
                                <li>Wishlist</li>
                            </ul>
                        </div>
                        <div className="column">
                            <h4>Categories</h4>
                            <ul>
                                <li>House Plants</li>
                                <li>Potter Plants</li>
                                <li>Seeds</li>
                                <li>Small Plants</li>
                                <li>Accessories</li>
                            </ul>
                        </div>
                        <div className="column">
                            <h4>Social Media</h4>
                            <div className="social-icons">
                                <span>📘</span>
                                <span>📸</span>
                                <span>🐦</span>
                                <span>💼</span>
                                <span>▶️</span>
                            </div>
                            <h4 style={{ marginTop: "20px" }}>We accept</h4>
                        </div>
                    </div>
                    <p className="copyright">© 2023 GreenShop. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}

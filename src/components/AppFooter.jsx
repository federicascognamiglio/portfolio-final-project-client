function AppFooter() {
    return (
        <footer className="footer d-flex align-center">
            <ul className="links d-flex align-center">
                <li className="footer-link p-relative">
                    <div className="hover-link-label text-uppercase">Behance</div>
                    <a href={import.meta.env.VITE_BEHANCE_LINK} target="_blank">
                        <img className="link-icon" src="img/behance-logo.jpg" alt="Behance Logo" />
                    </a>
                </li>
                <li className="footer-link p-relative">
                    <div className="hover-link-label text-uppercase">Linkedin</div>
                    <a href={import.meta.env.VITE_LINKEDIN_LINK} target="_blank">
                        <img className="link-icon" src="img/linkedin-logo.png" alt="Linkedin Logo" style={{ backgroundColor: '#ffffff' }} />
                    </a>
                </li>
                <li className="footer-link p-relative">
                    <div className="hover-link-label text-uppercase">Mail</div>
                    <a href={import.meta.env.VITE_MAIL_LINK} target="_blank">
                        <img className="link-icon" src="img/mail-logo.avif" alt="Mail Logo" />
                    </a>
                </li>
                <li className="footer-link p-relative">
                    <div className="hover-link-label text-uppercase">Phone</div>
                    <a href={import.meta.env.VITE_PHONE_LINK} target="_blank">
                        <img className="link-icon" src="img/phone-logo.png" alt="Phone Logo" />
                    </a>
                </li>
                <li className="footer-link p-relative">
                    <div className="hover-link-label text-uppercase">Github</div>
                    <a href={import.meta.env.VITE_GITHUB_LINK} target="_blank">
                        <img className="link-icon" src="img/github-logo.png" alt="Github Logo" />
                    </a>
                </li>
                <li className="footer-link p-relative">
                    <div className="hover-link-label text-uppercase">Instagram</div>
                    <a href={import.meta.env.VITE_INSTAGRAM_LINK} target="_blank">
                        <img className="link-icon" src="img/instagram-logo.png" alt="Instagram Logo" />
                    </a>
                </li>
                <li className="footer-link p-relative">
                    <div className="hover-link-label text-uppercase">Tiktok</div>
                    <a href={import.meta.env.VITE_TIKTOK_LINK} target="_blank">
                        <img className="link-icon" src="img/tiktok-logo.png" alt="TikTok Logo" />
                    </a>
                </li>
                <li className="footer-link"><img className="link-icon" src="img/bin-logo.png" alt="Trash Icon" /></li>
            </ul>
        </footer>
    )
}

export default AppFooter
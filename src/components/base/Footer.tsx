import logoRu from '../../images/logo_fut_en.webp';
import Styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        {/* Logo and Social Media */}
        <div className={Styles.topSection}>
          <div className={Styles.leftSection}>
            <div className={Styles.infa}>
              <div className={Styles.logoContainer}>
                <img src={logoRu.src} alt="New Technologies" />
              </div>
              {/* Contacts */}
              <div className={Styles.contactInfo}>
                <p>Ufa, Zaki Validi St. 32/2</p>
                <p><a href="tel:+73472939333">+7 (347) 293-93-33</a></p>
                <p><a href="mailto:nt@tech-new.ru">nt@tech-new.ru</a></p>
              </div>
            </div>

            {/* Files Block */}
            <div className={Styles.filesBlock}>
              <ul>
                <li>
                  <a href="/file/personal_data.pdf" target="_blank" rel="noopener noreferrer">
                    Personal Data Processing Agreement
                  </a>
                </li>
                <li>
                  <a href="/file/privacy_policy.pdf" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className={Styles.navSections}>
            <div className={Styles.navColumn}>
              <h3>Catalog</h3>
              <ul>
                <li><a href="/products/">Products</a></li>
                <li><a href="/services/">Services</a></li>
              </ul>
              <h3>Careers</h3>
              <ul>
                <li><a href="/careers/">Open Positions</a></li>
              </ul>
            </div>
            <div className={Styles.navColumn}>
              <h3>Company</h3>
              <ul>
                <li><a href="/about/">About Us</a></li>
                <li><a href="/documents/">Documents</a></li>
                <li><a href="/news/">News</a></li>
                <li><a href="/contact/">Contacts</a></li>
              </ul>
            </div>
          </div>
        </div>        
      </div>

      {/* Bottom Section */}
      <div className={Styles.footerBottom}>
        <p>© {new Date().getFullYear()} New Technologies Engineering and Production Enterprise LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};
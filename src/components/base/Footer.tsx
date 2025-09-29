import logoEn from '../../images/logo_fut_en.webp';
import Styles from './footer.module.scss';

export const Footer = () => {

  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        {/* Контактная информация */}
        <div className={Styles.contactSection}>
          <div className={Styles.logoContainer}>
            <img src={logoEn.src} alt="Новые Технологии" />
          </div>

          <div className={Styles.contactInfo}>
            <p>32/2, Zeki Velidi St., Ufa</p>
            <p>
              <a href="tel:+74951234567">+7(347) 293-93-33</a>
            </p>
            <p>
              <a href="mailto:nt@tech-new.ru">nt@tech-new.ru</a>
            </p>
          </div>
        </div>

        {/* Навигационные ссылки */}
        <div className={Styles.navSections}>
          <div className={Styles.navColumn}>
            <h3>Catalogue</h3>
            <ul>
              <li>
                <a href={`/products`}>Products</a>
              </li>
              <li>
                <a href={`/services`}>Services</a>
              </li>
            </ul>

            <h3>Career</h3>
            <ul>
              <li>
                <a href={`/careers`}>Open Positions</a>
              </li>
            </ul>
          </div>

          <div className={Styles.navColumn}>
            <h3>Company</h3>
            <ul>
              <li>
                <a href={`/about`}>About us</a>
              </li>
              <li>
                <a href={`/documents`}>Documents</a>
              </li>
              <li>
                <a href={`/news`}>News</a>
              </li>
              <li>
                <a href={`/contact`}>Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className={Styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} «New Technologies» Engineering and Production Enterprise  LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
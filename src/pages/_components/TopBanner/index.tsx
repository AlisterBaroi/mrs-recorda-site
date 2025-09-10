import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {/* {'🎉'} */}
        {/* <Link to="/about" className={styles.topBannerTitleText}>
          <Translate id="home.topbanner.title">
            {"Mrs Recorda"}
          </Translate>
        </Link> */}
        <p className={styles.topBannerTitleText}>
          <Translate id="home.topbanner.title">
            {"Mrs Recorda"}
          </Translate>
        </p>
        {/* {'🥳'} */}
      </div>
    </div>
  );
}

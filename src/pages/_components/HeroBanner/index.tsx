import React, { useState, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { translate } from '@docusaurus/Translate';
import Downloads from '@site/src/pages/_components/Downloads';
import IconText from '@site/src/components/laikit/widget/IconText';
import { DOWNLOAD_LIST } from '@site/src/data/download';
import GridLayout, { GridConfigs } from '@site/src/components/laikit/section/GridLayout';
import styles from './styles.module.css';

const TITLE = translate({
  id: 'home.herobanner.title',
  message: "<b>Just</b> record it <b>Dear</b>!",
});

// const BUTTONS = [
//   {
//     href: '/about',
//     label: translate({ id: 'home.herobanner.b1', message: 'Windows' }),
//     icon: 'lucide:user-circle',
//   },
//   {
//     href: '/blog',
//     label: translate({ id: 'home.herobanner.b2', message: 'Linux' }),
//     icon: 'lucide:book-open',
//   },
// ];

export default function HeroBanner() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
          <img
            alt="lailai's Logo"
            className={`${styles.heroLogo} ${hasAnimated ? styles.heroLogoAnimated : ''}`}
            src={useBaseUrl('/img/logo.svg')} width="200" height="200"
          />
          <span
            className={styles.heroTitleTextHtml}
            dangerouslySetInnerHTML={{ __html: TITLE }}
          />
        </Heading>
        {/* <br /> */}
        <p className={styles.subHeadding}>Free & Open-Source screen recorder. Build for simplicty & focus on screen activity.</p>
        {/* <p className={styles.subHeadding}>Build for simplicity, letting you focus on what matters on the screen.</p> */}
        <p className={styles.subHeadding2}>Download now on:</p>
        <Downloads />
        {/* <p className={styles.subHeadding}>Free & Open-Source screen recorder. Build for simplicty & focus on screen activity.</p> */}
        {/* <h2> Downloads for:</h2> */}
        {/* <div className={styles.indexCtas}>
          {BUTTONS.map((button) => (
            <Link
              key={button.label}
              to={button.href}
              className={styles.ctaCard}
            >
              <div className={styles.ctaCardContent}>
                <IconText icon={button.icon}>{button.label}</IconText>
              </div>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
}

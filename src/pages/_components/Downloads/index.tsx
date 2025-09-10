import React from 'react';
import { DOWNLOAD_LIST } from '@site/src/data/download';
import DownloadCard from '@site/src/components/laikit/section/DownloadCard';
import SectionContainer from '@site/src/components/laikit/section/SectionContainer2';
import SectionHeader from '@site/src/components/laikit/section/SectionHeader';
import GridLayout, { GridConfigs, } from '@site/src/components/laikit/section/GridLayout';
import IconWrapper from '@site/src/components/laikit/section/IconWrapper';
import { TEXT_COLORS } from '@site/src/components/laikit/section/constants';
import { translate } from '@docusaurus/Translate';

function DownloadBtns({ title, icon, link }: { title: string; icon: string; link: string }) {
  return (
    <DownloadCard
      isClickable={true}
      // className="--tw-p-5 --tw-items-center --tw-justify-center --tw-w-40"
      className="--tw-p-4 --tw-items-center --tw-justify-center --tw-w-40"
      href={link}
    >
      {/* <div className="--tw-flex --tw-flex-col --tw-items-center --tw-text-center --tw-space-y-1"> */}
      <div className="--tw-flex --tw-flex-col --tw-items-center --tw-text-center --tw-space-y-0">
        <div className="--tw-flex --tw-justify-center --tw-items-center --tw-h-12 --tw-w-12">
          <IconWrapper>
            <img
              src={`https://skillicons.dev/icons?i=${icon}&theme=light#gh-light-mode-only`}
              alt={title}
              className="--tw-w-12 --tw-h-12 --tw-object-contain"
            />
            <img
              src={`https://skillicons.dev/icons?i=${icon}&theme=dark#gh-dark-mode-only`}
              alt={title}
              className="--tw-w-12 --tw-h-12 --tw-object-contain"
            />
          </IconWrapper>
        </div>
        <h3
          className={`--tw-font-semibold --tw-text-lg ${TEXT_COLORS.PRIMARY} --tw-leading-snug`}
        >
          {title}
        </h3>
      </div>
    </DownloadCard>
  );
}

export default function Skills() {
  return (
    <SectionContainer>
      {/* <div className="--tw-max-w-7xl --tw-mx-auto --tw-flex --tw-flex-col --tw-px-5"> */}
      < GridLayout columns={GridConfigs.downloads}
        gap="--tw-gap-4"
      >
        {
          DOWNLOAD_LIST.filter((skill) => skill.show).map((tech, idx) => (
            <div key={idx} className="--tw-h-full">
              <DownloadBtns {...tech} />
            </div>
          ))
        }
      </GridLayout >
      {/* </div> */}
    </SectionContainer>
  );
}



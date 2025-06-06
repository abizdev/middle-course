import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = React.memo(() => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('about')}
    </div>
  );
});

export default AboutPage;

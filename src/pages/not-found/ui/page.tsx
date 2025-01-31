import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './not-found.module.scss';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return <div className={styles.notFoundPage}>{t('NotFoundPage')}</div>
};

export default NotFoundPage;

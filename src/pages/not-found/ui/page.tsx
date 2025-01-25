import React from 'react';
import * as styles from './not-found.module.scss';
import { useTranslation } from 'react-i18next';

const NotFoundPage: React.FC = () => {
  const {t} = useTranslation();

  return <div className={styles.NotFoundPage}>{t('NotFoundPage')}</div>
};

export default NotFoundPage;

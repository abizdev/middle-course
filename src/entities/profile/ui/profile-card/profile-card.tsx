import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectProfileData, selectProfileError, selectProfileIsLoading } from 'entities/profile';
import { classNames } from 'shared/lib';

import styles from './profile-card.module.scss';
import { Button, ButtonTheme, Input, Typography } from 'shared/ui';

interface Props {
  className?: string;
}

const ProfileCard: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation('profile');
  const data = useSelector(selectProfileData);
  // const isLoading = useSelector(selectProfileIsLoading);
  // const error = useSelector(selectProfileError);

  return (
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div className={styles.header}>
        <Typography title={t('Profile')} />
        <Button variant={ButtonTheme.OUTLINE} className={styles.editBtn}>{t('Edit')}</Button>
      </div>

      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t('name')}
          className={styles.input}
        />

        <Input
          value={data?.first}
          placeholder={t('name')}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default ProfileCard;

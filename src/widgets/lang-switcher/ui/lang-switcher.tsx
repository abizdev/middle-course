import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui';

interface Props {
  collapsed: boolean;
  className?: string;
}

const LangSwitcher: React.FC<Props> = (props) => {
  const { collapsed, className = '' } = props;
  const {t, i18n} = useTranslation()

  const toggleLang = (): void => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <div className={className}>
      <Button
        variant={ButtonTheme.CLEAR}
        onClick={toggleLang}
      >
        {collapsed ? t('lang') : t('langCollapsed')}
      </Button>
    </div>
  )
};

export default LangSwitcher;

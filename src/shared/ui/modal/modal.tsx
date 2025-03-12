import React from 'react';

import styles from './modal.module.scss';
import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui';
import { useTheme } from 'app/providers/theme-provider';

interface Props {
  open: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = (props) => {
  const {
    open,
    onClose,
    className = '',
    children,
  } = props
  const { theme } = useTheme();

  const mods = {
    [styles.opened]: open,
  }

  React.useEffect(() => {
    if (open) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const onKeyDown = React.useCallback((event: KeyboardEvent) => {
    if (event.key !== 'Escape') {
      return;
    }

    onClose();
  }, [onClose]);

  const onContentCLick = (event: React.MouseEvent) => event.stopPropagation()

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [className, theme, 'app_modal'])}>
        <div className={classNames(styles.overlay)} onClick={onClose}>
           <div className={styles.content} onClick={onContentCLick}>
             {children}
           </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;

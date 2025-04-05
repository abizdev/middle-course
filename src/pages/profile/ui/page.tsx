import React from 'react';
import { classNames, DynamicModuleLoader, ReducersList, useAppDispatch } from 'shared/lib';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/profile';

interface Props {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = React.memo(({ className }: Props) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

ProfilePage.displayName = 'ProfilePage';
export default ProfilePage;

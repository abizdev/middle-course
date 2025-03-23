import React from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { profileReducer } from 'entities/profile';

interface Props {

}

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage: React.FC<Props> = React.memo(({}) => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>profile</div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;

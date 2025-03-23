import StoreProvider from './ui/store-provider';

export { StoreProvider }
export {
  StateSchema,
  ReduxStoreWithManager,
  StateSchemaKeys,
  ThunkExtraArg,
  ThunkConfig
} from './config/store-schema'
export { createReduxStore, AppDispatch } from './config/store'
export { useAppDispatch } from './model/hook'

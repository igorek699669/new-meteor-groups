import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { useTracker } from 'meteor/react-meteor-data';

export * from './useCurrentUser';
export * from './usePathFor';
export * from './useSubscription';
export * from './useUnmounted';
export * from './useUserId';

export const useRouteParameter = (name: string): string | undefined =>
  useTracker(() => FlowRouter.getParam(name), [name]);

export const useQueryStringParameter = (name: string): string | undefined =>
  useTracker(() => FlowRouter.getQueryParam(name), [name]);
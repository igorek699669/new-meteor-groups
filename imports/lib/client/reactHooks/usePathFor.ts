import { useMemo } from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

export const usePathFor = (routeName: string, params?: Record<string, string>, queryParams?: Record<string, string>) =>
  useMemo(() => FlowRouter.path(routeName, params, queryParams) as string, [routeName, params, queryParams]);

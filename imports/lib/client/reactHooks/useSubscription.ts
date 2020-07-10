import { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useUnmounted } from './useUnmounted';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const log = (name: string, ...params: any[]) =>
  console.log(`[${new Date().toLocaleTimeString()}][useSubscription] '${name}': `, ...params);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useSubscription(pubName: string, ...subOpts: any[]): boolean {
  const [loading, setLoading] = useState(true);
  const unmounted = useUnmounted();

  useTracker(() => {
    const s = Meteor.subscribe(pubName, ...subOpts, {
      onStop(error?: Meteor.Error) {
        if (error) {
          log(pubName, `sub stop with error:`, error.toString());
        }
      },
    });

    if (unmounted.current) return;

    setLoading(!s.ready());
  }, [pubName, ...subOpts]);

  return loading;
}

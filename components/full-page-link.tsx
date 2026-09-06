import type { ComponentPropsWithoutRef } from 'react';

/**
 * Sites currently normalizes Vinext's query-valued RSC navigation requests.
 * A plain anchor keeps every internal route reliable by requesting the page as
 * a complete document while preserving the same link semantics and styling.
 */
export function FullPageLink(props: ComponentPropsWithoutRef<'a'>) {
  return <a {...props} />;
}

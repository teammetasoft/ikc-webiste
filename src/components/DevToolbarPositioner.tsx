'use client';

import { useEffect } from 'react';

export default function DevToolbarPositioner() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const applyStyle = (el: Element) => {
      const portal = el as HTMLElement;

      // Style the host element itself
      portal.style.position = 'fixed';
      portal.style.bottom = '4.5rem';
      portal.style.right = '1.6rem';
      portal.style.zIndex = '99998';

      // Also inject into shadow root to override inner positioned elements
      if (portal.shadowRoot) {
        const existing = portal.shadowRoot.querySelector('#dev-positioner-style');
        if (!existing) {
          const style = document.createElement('style');
          style.id = 'dev-positioner-style';
          style.textContent = `
            :host { position: fixed !important; bottom: 4.5rem !important; right: 1.6rem !important; }
            [data-nextjs-toast], [class*="toast"], [class*="indicator"], div[style*="position"] {
              bottom: 4.5rem !important;
              right: 1.6rem !important;
            }
          `;
          portal.shadowRoot.appendChild(style);
        }
      }
    };

    // Apply to already-present portals
    document.querySelectorAll('nextjs-portal').forEach(applyStyle);

    // Watch for portals added dynamically
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if ((node as Element).nodeName?.toLowerCase() === 'nextjs-portal') {
            applyStyle(node as Element);
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}


'use client';

import { useEffect, useState } from 'react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const phone = '97143496392';
  const href = `https://wa.me/${phone}?text=Hello%20%F0%9F%91%8B%20Here%20to%20help%20you`;

  // Start hidden — show only after the preloader unmounts
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkPreloader = () => {
      const preloader = document.querySelector('[class*="preloaderWrapper"]');
      if (!preloader) {
        setVisible(true);
      }
    };

    // Check immediately (in case preloader already gone)
    checkPreloader();

    // Watch for preloader removal from DOM
    const observer = new MutationObserver(checkPreloader);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Chat with us on WhatsApp"
    >
      <div className={styles.iconWrap}>
        <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="wa-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path d="M0 0H24V24H0V0Z" fill="white" />
          </mask>
          <g mask="url(#wa-mask)">
            <path d="M17.415 14.382C17.117 14.233 15.656 13.515 15.384 13.415C15.112 13.315 14.914 13.267 14.715 13.565C14.517 13.862 13.948 14.531 13.775 14.729C13.601 14.928 13.428 14.952 13.131 14.804C12.834 14.654 11.876 14.341 10.741 13.329C9.858 12.541 9.261 11.568 9.088 11.27C8.915 10.973 9.069 10.812 9.218 10.664C9.352 10.531 9.515 10.317 9.664 10.144C9.813 9.971 9.862 9.846 9.961 9.647C10.061 9.449 10.011 9.276 9.936 9.127C9.862 8.978 9.268 7.515 9.02 6.92C8.779 6.341 8.534 6.42 8.352 6.41C8.178 6.402 7.98 6.4 7.782 6.4C7.584 6.4 7.262 6.474 6.99 6.772C6.717 7.069 5.95 7.788 5.95 9.251C5.95 10.713 7.014 12.126 7.163 12.325C7.312 12.524 9.258 15.525 12.239 16.812C12.949 17.118 13.502 17.301 13.933 17.437C14.645 17.664 15.293 17.632 15.805 17.555C16.375 17.47 17.563 16.836 17.811 16.142C18.059 15.448 18.058 14.853 17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382M11.992 21.785H11.988C10.217 21.785 8.479 21.309 6.956 20.407L6.596 20.193L2.854 21.175L3.853 17.527L3.618 17.153C2.628 15.577 2.104 13.754 2.107 11.893C2.109 6.443 6.543 2.009 11.996 2.009C14.642 2.009 17.124 3.041 18.984 4.908C20.845 6.775 21.878 9.259 21.876 11.9C21.874 17.35 17.44 21.785 11.992 21.785ZM20.404 3.488C18.168 1.241 15.17 0 11.992 0C5.438 0 0.102 5.335 0.1 11.892C0.097 13.979 0.644 16.03 1.687 17.837L0 24L6.304 22.346C8.048 23.295 10.002 23.793 11.988 23.794H11.993C18.547 23.794 23.883 18.459 23.885 11.901C23.885 8.728 22.641 5.736 20.404 3.488" fillRule="evenodd" clipRule="evenodd" fill="white" />
          </g>
        </svg>
      </div>
      <span className={styles.label}>Chat With Us</span>
    </a>
  );
}

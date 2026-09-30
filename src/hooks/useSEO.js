import { useEffect } from 'react';
import { SITE_NAME } from '../config';

const setMeta = (attribute, key, content) => {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

// Sets the tab title ("Page | ByteSpace New", or just the site name) and the page's meta tags.
export const useSEO = ({ title, description, keywords = [] }) => {
  const keywordList = keywords.join(', ');

  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywordList);
    setMeta('property', 'og:title', title || SITE_NAME);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:site_name', SITE_NAME);
  }, [title, description, keywordList]);
};

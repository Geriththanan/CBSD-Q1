import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'example-component',
        title: 'Example',
        translate: 'EXAMPLE',
        type: 'item',
        icon: 'whatshot',
        url: '/example',
      },
      {
        id: 'timeline-component',
        title: 'TimeLine',
        translate: 'TIMELINE',
        type: 'item',
        icon: 'access_time',
        url: '/timeline',
      },
      {
        id: 'custom-card-component',
        title: 'Custom-Card',
        translate: 'CARD',
        type: 'item',
        icon: 'aspect_ratio',
        url: '/custom-card',
      },
    ],
  },
];

export default navigationConfig;

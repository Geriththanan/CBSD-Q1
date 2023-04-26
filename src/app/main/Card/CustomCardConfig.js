import i18next from 'i18next';
import CustomCard from './CustomCard';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'card', en);
i18next.addResourceBundle('tr', 'card', tr);
i18next.addResourceBundle('ar', 'card', ar);

const CustomCardConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/custom-card',
      component: CustomCard,
    },
  ],
};

export default CustomCardConfig;
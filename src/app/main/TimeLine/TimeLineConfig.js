import i18next from 'i18next';
import TimeLine from './TimeLine';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'timeLine', en);
i18next.addResourceBundle('tr', 'timeLine', tr);
i18next.addResourceBundle('ar', 'timeLine', ar);

const TimeLineConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/timeline',
      component: TimeLine,
    },
  ],
};

export default TimeLineConfig;
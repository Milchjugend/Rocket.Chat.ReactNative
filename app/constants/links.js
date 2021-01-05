import { getBundleId, isIOS } from '../utils/deviceInfo';

import { appStoreID as APP_STORE_ID } from '../../app.json';

export const PLAY_MARKET_LINK = `https://play.google.com/store/apps/details?id=${ getBundleId }`;
export const APP_STORE_LINK = `https://itunes.apple.com/app/id${ APP_STORE_ID }`;
export const LICENSE_LINK = 'https://github.com/Milchjugend/Rocket.Chat.ReactNative/blob/single-server/LICENSE';
export const STORE_REVIEW_LINK = isIOS ? `itms-apps://itunes.apple.com/app/id${ APP_STORE_ID }?action=write-review` : `market://details?id=${ getBundleId }`;

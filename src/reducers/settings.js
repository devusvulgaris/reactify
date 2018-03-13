import {
  THEME_SETTINGS,
  SUCCESS
} from '../constants'

export default (settingsState = {
  showNotificationBar: false
}, action) => {
  const { type, response } = action
  switch (type) {
    case THEME_SETTINGS + SUCCESS:
      return {...settingsState, ...response}

    case 'TOGGLE_NOTIFICATION_BAR':
      return {
        ...settingsState,
        showNotificationBar: !settingsState.showNotificationBar
      }
  }

  return settingsState
}
import { FC, useReducer, useEffect, useMemo } from 'react';
import { initNavigator } from '@telegram-apps/sdk-react';
import { useIntegration } from '@telegram-apps/react-router-integration';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { StoreContext } from '../../services/store_context';
import { reducer } from '../../services/store_context';
import { initialState } from '../../services/store_context';
/* import { ProtectedAuthorized } from '../ProtectedAuthorized'; */
import Start from '../start/start';

if ('Telegram' in window) {
  import('@telegram-apps/sdk')
    .then((module) => {
      const { postEvent,initBackButton,initMiniApp } = module;
      postEvent('web_app_expand');
      const [backButton] = initBackButton();
      backButton.show();
      const [miniApp] = initMiniApp();
      backButton.on('click',()=>{miniApp.close()});
    })
    .catch((error) => {
      console.error('Ошибка при импорте модуля:', error);
    });
} else {
  console.log('Импорт не требуется');
}

export const PATH_MAIN = "/telegram-test";
/* export const PATH_LIST = "/telegram_test_bot/list";
export const PATH_COURSE = "/telegram_test_bot/list/course";
export const PATH_THEME = "/telegram_test_bot/list/course/theme";
export const PATH_PLAYER = "/telegram_test_bot/list/course/theme/player"; */


const App: FC = () => {

  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);

  const [store, setStore] = useReducer<any>(reducer, initialState);

  const colorScheme = 'Telegram' in window ? window.Telegram.WebApp.colorScheme : 'white';

  useEffect(() => {
    if (colorScheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [colorScheme]);

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <>
      <StoreContext.Provider value={{ store, setStore }}>
        <Routes>
          <Route path={PATH_MAIN} element={<Start />} />
        </Routes>
      </StoreContext.Provider>
    </>
  )
}

export default App;
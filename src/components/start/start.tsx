import React from 'react';
import { FC, useContext, useEffect } from 'react';
import styles from './start.module.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../services/store_context';
import { Loader } from '../loader/loader';
import { URL } from '../../utils/constants';
import { request } from '../../utils/api';
import { TRes } from '../../types/types';
import { PATH_MAIN } from '../app/app';

const Start: FC = () => {

  const { store, setStore } = useContext(StoreContext);

  const navigate = useNavigate();

  const onSubmitClick = () => {
    setStore({ type: "authRequest" });

    request<TRes>('')
      .then(res => {
        if (res && res.hasOwnProperty("quote")) {
          setStore({ type: "authSuccess", action: { user: res.quote } });
        } else {
          setStore({ type: "authFailed" });
        }
      })
      .catch(error => {
        setStore({ type: "authFailed" });
        console.log(error);
      });
    /*     console.log(window.Telegram.WebApp.InitData); */
  }

  useEffect(() => {
    if (!store.authRequest && !store.authFailed && store.authSuccess) {
      navigate(PATH_MAIN);
    }
  }, [store.user]);

  return (
    <div className={styles["start"]}>
      <h1 className={`${styles["start__title"]} text text_size_l text_weight_bold text_color_main`}>Профиль подписчика</h1>
      <menu className={styles["start__menu"]}>
        <li className={styles["start__link"]}>
          <div className={`${styles["start__icon"]} ${styles["start__icon_color_subscription"]}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 
            20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 
            56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
          </div>
          <span className={`${styles["start__text"]} text text_size_m text_weight_medium text_color_main text_overflow_one`}>Подписки</span>
          <span className={`text text_size_m text_weight_regular text_color_hint`}>0</span>
          <div className={styles["start__arrow"]}>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 
              0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 
              0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 
              0.683417 0.292893 0.292893Z" fill="#AAAAAA" />
            </svg>
          </div>
        </li>
        <li className={styles["start__link"]}>
          <div className={`${styles["start__icon"]} ${styles["start__icon_color_digital-products"]}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 
              0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" /></svg>
          </div>
          <span className={`${styles["start__text"]} text text_size_m text_weight_medium text_color_main text_overflow_one`}>Цифровые товары</span>
          <span className={`text text_size_m text_weight_regular text_color_hint`}>0</span>
          <div className={styles["start__arrow"]}>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#AAAAAA" />
            </svg>
          </div>
        </li>
        <li className={styles["start__divider"]}></li>
        <li className={styles["start__link"]}>
          <div className={`${styles["start__icon"]} ${styles["start__icon_color_faq"]}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M424-320q0-81 14.5-116.5T500-514q41-36 62.5-62.5T584-637q0-41-27.5-68T480-732q-51 0-77.5 31T365-638l-103-44q21-64 77-111t141-47q105 
              0 161.5 58.5T698-641q0 50-21.5 85.5T609-475q-49 47-59.5 71.5T539-320H424Zm56 240q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 
              23.5T560-160q0 33-23.5 56.5T480-80Z" /></svg>
          </div>
          <span className={`${styles["start__text"]} text text_size_m text_weight_medium text_color_main text_overflow_one`}>FAQ</span>
          <div className={styles["start__arrow"]}>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#AAAAAA" />
            </svg>
          </div>
        </li>
        <li className={styles["start__link"]}>
          <div className={`${styles["start__icon"]} ${styles["start__icon_color_support"]}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 
              0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 
              0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 
              56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>
          </div>
          <span className={`${styles["start__text"]} text text_size_m text_weight_medium text_color_main text_overflow_one`}>Поддержка</span>
          <div className={styles["start__arrow"]}>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#AAAAAA" />
            </svg>
          </div>
        </li>
        <li className={styles["start__link"]}>
          <div className={`${styles["start__icon"]} ${styles["start__icon_color_news"]}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 
              56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z" /></svg>
          </div>
          <span className={`${styles["start__text"]} text text_size_m text_weight_medium text_color_main text_overflow_one`}>Новости</span>
          <div className={styles["start__arrow"]}>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#AAAAAA" />
            </svg>
          </div>
        </li>
        <li className={styles["start__divider"]}></li>
        <li className={styles["start__link"]}>
          <div className={`${styles["start__icon"]} ${styles["start__icon_color_payment"]}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 
              160v240h640v-240H160Zm0 240v-480 480Z" /></svg>
          </div>
          <span className={`${styles["start__text"]} text text_size_m text_weight_medium text_color_main text_overflow_one`}>Способ оплаты</span>
          <div className={styles["start__arrow"]}>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#AAAAAA" />
            </svg>
          </div>
        </li>
        <li className={styles["start__divider"]}></li>
        <li className={styles["start__link"]}>
          <div className={`${styles["start__icon"]} ${styles["start__icon_color_author"]}`}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M280-120v-120h-80v-80h80v-80h-80v-80h80v-360h260q92 0 156 64t64 156q0 92-64 156t-156 64H360v80h160v80H360v120h-80Zm80-360h180q58 
            0 99-41t41-99q0-58-41-99t-99-41H360v280Z"/></svg>
          </div>
          <span className={`${styles["start__text"]} text text_size_m text_weight_medium text_color_main text_overflow_one`}>Автор?</span>
          <span className={`text text_size_m text_weight_regular text_color_hint`}>Зарабатывать</span>
          <div className={styles["start__arrow"]}>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 
              0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 
              0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 
              0.683417 0.292893 0.292893Z" fill="#AAAAAA" />
            </svg>
          </div>
        </li>
      </menu>
      <img src={'https://s3-alpha-sig.figma.com/img/5b34/fe6b/2624437e4948c0bcd96201873478a9d5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QZr7-p9-guWWJcY0ASFdSAis-0Nm1Mr7eEGv6Wzc4jUsZ6J6~UMBtYwIkE3fSYWCNG522wYXNXCXvf30tYBaMVnzHtYPSp8GvD6B5RZhaqghpueo7f-8O~z-8ssmsjAnZ1QA5iUf27Az8KeRUaFuspKYUkx1a-R74VxeiMcSp9sZxBbKyP7ohS9qiXTHgOspPG4EY0xHC5dabv7T8NK~XObvZbjsDfI5vAzeErCEfwq3pl~2SPQac9I323LGSgNp9Y8dcawIhQP~uAU5Lhx1R6KGSoIBCCWWP1utZvieS-tu-UYQuvXJhADI-zenYAKeXfHJpK1bhm-rLcDmyhq4Og__'} alt="картинка" className={styles["start__gif"]} />
    </div>
  )
}

export default Start;

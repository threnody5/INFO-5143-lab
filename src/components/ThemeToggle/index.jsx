import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './../../utils/redux/themeSlice';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div className={`${styles[theme]}`}>
      <button
        className={`${styles.themeButton}`}
        onClick={() =>
          dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'))
        }
      >
        {theme === 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
      </button>
    </div>
  );
};

export default ThemeToggle;

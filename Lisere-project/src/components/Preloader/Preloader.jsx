import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const MAX_WAIT = 10; // секунд: через сколько пускаем на сайт, даже если что-то не догрузилось

// Сам прелоадер (логотип, проценты, выход) живёт в index.html и работает ещё до загрузки React.
// Этот компонент ничего не рисует: он сообщает ему, как грузятся картинки,
// и запускает onReveal в момент, когда прелоадер начинает исчезать.
const Preloader = ({ assets = [], onReveal }) => {
  const onRevealRef = useRef(onReveal);
  onRevealRef.current = onReveal;
  const assetsRef = useRef(assets);

  useEffect(() => {
    const pl = window.__preloader;
    // HTML-прелоадера нет или он уже отработал (например, после HMR) — просто пускаем дальше
    if (!pl || pl.finished) {
      onRevealRef.current?.();
      return undefined;
    }

    let alive = true;
    pl.onExit = () => {
      if (alive) onRevealRef.current?.();
    };
    pl.mounted(); // JS-бандл загружен: первая половина прогресса пройдена

    const urls = assetsRef.current;
    const total = urls.length + 1; // +1 — шрифты
    let done = 0;
    const bump = () => {
      if (!alive) return;
      done += 1;
      pl.assets(Math.min(1, done / total));
    };
    urls.forEach((url) => {
      const img = new Image();
      img.onload = bump;
      img.onerror = bump; // битая картинка не должна вешать прелоадер
      img.src = url;
    });
    (document.fonts?.ready ?? Promise.resolve()).then(bump);
    const maxWait = setTimeout(() => pl.assets(1), MAX_WAIT * 1000);

    return () => {
      alive = false;
      clearTimeout(maxWait);
      pl.onExit = null;
    };
  }, []);

  return null;
};

Preloader.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.string),
  onReveal: PropTypes.func,
};

export default Preloader;

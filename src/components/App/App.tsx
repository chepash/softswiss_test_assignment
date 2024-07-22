import 'normalize.css';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.position}>
      <p className={s.bold}>Шрифт: Lato Bold</p>
      <p className={s.extrabold}>Шрифт: Lato Extra Bold</p>
    </div>
  );
}

export default App;

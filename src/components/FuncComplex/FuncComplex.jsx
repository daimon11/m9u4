import style from './FuncComplex.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const FuncComplex = ({ min, max }) => {
  const [state, setState] = useState({
    userNumber: '',
    count: 0,
  })

  const [userNumber, setUserNumber] = useState(10);
  const [result, setResult] = useState('Результат');
  const [count, setCount] = useState(0);
  const [randomNumber] = useState(Math.floor(Math.random() *
    (max - min + 1) + min));

  const handleSubmit = e => {
    e.preventDefault();

    setState(prevCount => ({...state, count: prevNumber + 1}));

    setResult(() => {
      if (!userNumber || userNumber < min || userNumber > max) {
        return `Введите число от ${min} до ${max}`;
      }

      if (userNumber > randomNumber) {
        return `${userNumber} больше загаданного числа`;
      }

      if (userNumber < randomNumber) {
        return `${userNumber} меньше загаданного числа`;
      }

      return `Вы угадали, загаданное число ${userNumber}`;
    });
  };

  const handleChange = e => {
    setState({...state, userNumber: e.target.value});
  };

  console.log('randomNumber', randomNumber);

  return (
    <div className={style.game}>
      <p className={style.result}>{result}</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor='user_number'>
          Попыток {count}
        </label>
        <input
          className={style.input}
          type='number'
          id='user_number'
          value={userNumber}
          onChange={handleChange} />
        <button className={style.btn}>Угадать</button>
      </form>
    </div>
  );
};

FuncComplex.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

import React from 'react';
import Proptypes from 'prop-types';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({ guardarCategoria }) => {

  const OPCIONES =[
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
  ];

  // Utilizar custom hook
  const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

  // Submit al form, pasar categoria a App.js
  const buscarCategoria = e => {
    e.preventDefault();

    guardarCategoria(categoria);
  }

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={buscarCategoria}
        >
          <h2 className={styles.heading}>Encuentra noticias por Categoría</h2>

          <SelectNoticias
          />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles['btn-block']} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarCategoria: Proptypes.func.isRequired
};

export default Formulario;
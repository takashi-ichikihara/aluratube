import React from 'react';
import { StyledRegisterVideo } from './styles';

function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (evento) => {
      console.log(evento.target);
      const value = evento.target.value;
      const name = event.target.name;
      setValues({
        ...values,
        titulo: value,
      });
    },
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: 'Frost punk', url: 'https://youtube.com' },
  });
  const [formVisivel, setFormVisivel] = React.useState(true);

  // O que precisamos para o form funcionar?
  // - pegar os dados, que precisam vir do state
  // titulo
  // video
  // precisamos ter um onSubmit do nosso form
  // Limpar o formulario após o Submit

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={(evento) => {
            evento.preventDefault();
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              x
            </button>
            <input
              placeholder="Titulo do video"
              name="Titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChance}
            />
            <input
              placeholder="Url"
              name="Url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}

// Falta o botão para adicionar video
// Modal
// Precisamos controlar o state
// Formulario em si

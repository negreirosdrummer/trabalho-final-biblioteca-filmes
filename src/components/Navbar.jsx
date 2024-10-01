import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"; // Ícones para o título e botão de busca
import styled from "styled-components"; // Biblioteca para estilização com styled-components

// Estilos do componente Navbar
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121212;
`;

// Estilos do título da Navbar
const NavbarTitle = styled.h2`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    text-decoration: none;
  }
`;

// Estilos do formulário de busca
const NavbarForm = styled.form`
  display: flex;
  gap: 0.5rem;
`;

// Estilos do input de busca
const NavbarInput = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  border: none;
`;

// Estilos do botão de busca
const NavbarButton = styled.button`
  background-color: #f7d354;
  border: 2px solid #f7d354;
  border-radius: 4px;
  color: #000;
  padding: 0.3rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Navbar = () => {
  const [search, setSearch] = useState(""); // Estado para armazenar o valor de busca
  const navigate = useNavigate(); // Hook para navegar entre páginas

  // Função chamada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página

    if (!search) return; // Se o campo de busca estiver vazio, não faz nada

    // Navega para a página de resultados da busca e reseta o campo de busca
    navigate(`/search?q=${search}`, { replace: true });
    setSearch(""); // Reseta o valor de busca após o envio
  };

  return (
    <NavbarContainer>
      <NavbarTitle>
        {/* Link para a página inicial */}
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </NavbarTitle>
      <NavbarForm onSubmit={handleSubmit}>
        {/* Campo de input para busca */}
        <NavbarInput
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)} // Atualiza o estado ao digitar
          value={search} // Valor atual do input de busca
        />
        {/* Botão de busca */}
        <NavbarButton type="submit">
          <BiSearchAlt2 />
        </NavbarButton>
      </NavbarForm>
    </NavbarContainer>
  );
};

export default Navbar;

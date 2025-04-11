# Portfólio Link Bio

## Descrição

Este projeto é uma página de links bio pessoal moderna e responsiva, criada com HTML, CSS e JavaScript. O site serve como um hub centralizado para apresentação profissional, exibindo informações pessoais, projetos, habilidades e meios de contato em um layout elegante e visualmente atraente.

## Funcionalidades

- **Design Responsivo**: Layout adaptável a diferentes tamanhos de tela (desktop, tablet e mobile)
- **Modo Claro/Escuro**: Alternância de tema com persistência via localStorage
- **Animações Suaves**: Efeitos de entrada e transição para melhor experiência do usuário
- **Navegação Intuitiva**: Links de ancoragem com rolagem suave para diferentes seções
- **Cartões de Projeto**: Exibição visual dos trabalhos com descrições detalhadas
- **Links para Redes Sociais**: Integração com plataformas como GitHub, LinkedIn, Twitter e Instagram

## Tecnologias Utilizadas

- **HTML5**: Estruturação semântica do conteúdo
- **CSS3**: Estilização moderna com variáveis CSS e flexbox/grid
- **JavaScript**: Interatividade, animações e persistência de preferências
- **Font Awesome**: Biblioteca de ícones para elementos visuais
- **Intersection Observer API**: Detecção de elementos visíveis para animações

## Estrutura do Projeto

```
/
├── index.html          # Arquivo HTML principal
├── style.css           # Estilos CSS do site
├── js/                 # Pasta de scripts JavaScript
│   └── script.js       # Funcionalidades interativas
├── imagens/            # Recursos visuais do site
│   ├── perfil.jpg      # Imagem de perfil do usuário
│   ├── projeto1.jpg    # Imagem do primeiro projeto
│   └── projeto2.jpg    # Imagem do segundo projeto
└── README.md           # Documentação do projeto
```

## Como Usar

1. Clone este repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/portifolio-link-bio.git
   ```

2. Abra o arquivo `index.html` em seu navegador de preferência.

3. Para personalizar:
   - Substitua as imagens na pasta `imagens/` pelas suas próprias
   - Edite o conteúdo em `index.html` para incluir suas informações
   - Ajuste os estilos em `style.css` conforme necessário
   - Modifique os links de redes sociais para apontarem para seus perfis

## Customização

### Alterando Cores do Tema

O arquivo `style.css` utiliza variáveis CSS que facilitam a personalização das cores:

```css
:root {
    --primary: #5D3FD3;       /* Cor principal */
    --primary-hover: #4B32A8; /* Cor hover */
    --bg-color: #121212;      /* Fundo (modo escuro) */
    --card-bg: #1E1E1E;       /* Fundo dos cartões (modo escuro) */
    --text-color: #FFFFFF;    /* Cor do texto (modo escuro) */
    --secondary-text: #CCCCCC; /* Cor de texto secundária (modo escuro) */
    --border-radius: 12px;    /* Arredondamento dos cantos */
}
```

### Adicionando Novos Projetos

Para adicionar novos projetos, duplique os blocos de código dos cartões de projeto no arquivo `index.html` e atualize as informações conforme necessário.

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Abra uma issue ou envie um pull request com suas melhorias.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Autor

Levi Ignacio - Desenvolvedor de Software & Analista de Sistemas
- GitHub: [Leviign](https://github.com/Leviign)
- LinkedIn: [Levi Ignacio](https://www.linkedin.com/in/leviignacio/)
- Twitter: [@Levi_ign](https://x.com/Levi_ign)

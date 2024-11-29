# amazon-ads-detector 

## Descrição
amazon-ads-detector é uma extensão do Chrome que facilita a identificação de itens patrocinados em resultados de pesquisa da Amazon, destacando-os com uma cor personalizada. A extensão oferece uma interface intuitiva para escolher a cor de destaque e definir as classes CSS dos elementos patrocinados. Desta forma, você pode facilmente modificar as configurações se a Amazon mudar a estrutura da página.

## Instalação

1. Faça download do projeto ou clone o repositório:

   ```bash
   git clone https://github.com/frotaadriano/amazon-ads-detector.gitv<URL_DO_REPOSITÓRIO>
   ```

2. Abra o Google Chrome e acesse `chrome://extensions/`.

3. Ative o "Modo do desenvolvedor" no canto superior direito.

4. Clique em "Carregar sem compactação" e selecione a pasta onde estão os arquivos da extensão.

## Arquivos

- `manifest.json`: Define a extensão e suas permissões.
- `popup.html`: Interface de configurações.
- `popup.js`: Lógica da interface de configurações.
- `content.js`: Script que realiza as alterações de destaque na página.
- `styles.css`: Define os estilos customizados para os elementos.

## Como Usar

1. Clique no ícone da extensão na barra do navegador.
2. Utilize a interface para definir a classe CSS dos elementos patrocinados.
3. Escolha a cor de destaque desejada e clique em "Salvar".
4. A extensão aplicará o destaque automaticamente aos itens patrocinados.

## Sugestões de Melhorias Futuras

1. **Detecção Automática de Itens Patrocinados**: Implementar uma lógica baseada em machine learning para identificar automaticamente elementos patrocinados, reduzindo a necessidade de ajustes manuais.
2. **Sincronização com Conta Google**: Permitir que as configurações sejam sincronizadas com a conta Google do usuário, para uso em múltiplos dispositivos.
3. **Modo Escuro**: Adicionar suporte para modo escuro na interface de configurações da extensão.
4. **Notificações**: Notificar o usuário quando os elementos patrocinados forem destacados em uma nova página.
5. **Multi-site**: Expandir o suporte para destacar elementos patrocinados em outros sites de e-commerce.

## Contribuição

Contribuições são bem-vindas! Se você tem sugestões ou encontrou algum bug, sinta-se à vontade para abrir um issue ou enviar um pull request.

## Licença

Este projeto é distribuído sob a licença MIT.

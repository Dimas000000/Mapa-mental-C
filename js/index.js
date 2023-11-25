$(document).ready(()=>{
    $('#header-show-btn').hide();
    $('body > h2').hide();
    $('.topico-container').hide();

    $('#header-hide-btn').click(()=>{
    $('#header-show-btn').show();
    $('header').hide();
        $('body').css({
            'height': '110vh',
            'grid-template': '0px 100vh 1fr / 1fr'
        });
        $('body > h2').css('top', 'min(0.5vw, 1vh)');
    });
    $('#header-show-btn').click(()=>{
    $('#header-show-btn').hide();
    $('header').show();
        $('body').css({
            'height': '120vh',
            'grid-template': 'min(5vw, 10vh) 100vh 1fr / 1fr'
        });
        $('body > h2').css('top', 'min(5.5vw, 11vh)');
    });
    $('.topico').hover(()=>{
        $('body > h2').show();
    },
    ()=>{
        $('body > h2').hide();
    });
    $('.topico').click(()=>{
        $('.topico-container').show(200);
    });
    $('#close-btn').click(()=>{
        $('.topico-container').hide(200);
    });
    
    $('#topico-1').click(()=>{
        $('#topico-title').text('Introdução à Linguagem C');
        $('#topico-p').text('A linguagem C foi desenvolvida por Dennis Ritchie nos laboratórios Bell Labs durante os anos 1970. É uma linguagem de programação de nível médio, conhecida por sua eficiência, portabilidade e poderosas capacidades de manipulação de hardware.');
    });
    $('#topico-2').click(()=>{
        $('#topico-title').text('Configuração do Ambiente de Desenvolvimento');
        $('#topico-p').text('Configurar o ambiente de desenvolvimento envolve a instalação de um compilador C, como o GCC para sistemas Unix-like ou MinGW para Windows. Além disso, é comum utilizar IDEs (Ambientes de Desenvolvimento Integrados) como Visual Studio Code ou Code::Blocks para facilitar o processo de escrita e compilação do código.');
    });
    $('#topico-3').click(()=>{
        $('#topico-title').text('Estrutura de um Programa em C');
        $('#topico-p').text('Um programa em C possui uma função principal denominada main(). Além disso, utiliza instruções de pré-processamento, como #include para incluir bibliotecas e #define para definir constantes. Comentários são usados para documentação e explicação do código.');
    });
    $('#topico-4').click(()=>{
        $('#topico-title').text('Tipos de Dados e Variáveis');
        $('#topico-p').text('C possui diversos tipos de dados, como inteiros (int), decimais (float, double), caracteres (char) e outros. Variáveis são declarações associadas a esses tipos de dados e podem armazenar valores mutáveis durante a execução do programa.');
    });
    $('#topico-5').click(()=>{
        $('#topico-title').text('Operadores em C');
        $('#topico-p').text('Os operadores em C são símbolos especiais utilizados para realizar operações matemáticas, lógicas e de atribuição em expressões. Eles incluem operadores aritméticos, relacionais, lógicos, de atribuição e bitwise.');
    });
    $('#topico-6').click(()=>{
        $('#topico-title').text('Estruturas de Controle');
        $('#topico-p').text('As estruturas de controle permitem controlar o fluxo de execução do programa. As instruções condicionais (if, else) permitem a execução condicional de blocos de código, enquanto os loops (for, while, do-while) permitem a repetição de blocos de código enquanto uma condição é verdadeira.');
    });
    $('#topico-7').click(()=>{
        $('#topico-title').text('Funções em C');
        $('#topico-p').text('As funções em C são blocos de código que realizam tarefas específicas. Elas podem receber argumentos, realizar operações e retornar valores. A função main() é a função principal que inicia a execução do programa.');
    });
    $('#topico-8').click(()=>{
        $('#topico-title').text('Arrays e Strings');
        $('#topico-p').text('Arrays são conjuntos de elementos do mesmo tipo. Strings em C são arrays de caracteres terminados por um caractere nulo "\\0". A manipulação de arrays é crucial para armazenar e manipular conjuntos de dados, enquanto as strings são amplamente usadas para manipular texto.');
    });
    $('#topico-9').click(()=>{
        $('#topico-title').text('Ponteiros em C');
        $('#topico-p').text('Ponteiros são variáveis que armazenam endereços de memória. Eles permitem acessar e manipular diretamente a memória do computador, facilitando operações avançadas, como alocação dinâmica de memória e passagem de parâmetros por referência.');
    });
    $('#topico-10').click(()=>{
        $('#topico-title').text('Estruturas de Dados em C');
        $('#topico-p').text('C permite a criação de estruturas de dados personalizadas usando structs, que são conjuntos de variáveis de diferentes tipos. Unions e enumerações também são utilizadas para representar tipos de dados especiais em C.');
    });
    $('#topico-11').click(()=>{
        $('#topico-title').text('Gerenciamento de Memória');
        $('#topico-p').text('Em C, o programador é responsável pelo gerenciamento de memória. Isso inclui alocação dinâmica de memória usando funções como malloc(), calloc(), realloc() e liberando essa memória alocada com free(), para evitar vazamentos de memória.');
    });
    $('#topico-12').click(()=>{
        $('#topico-title').text('Entrada e Saída em C');
        $('#topico-p').text('A entrada e saída em C são tratadas por funções como scanf() para entrada de dados e printf() para saída formatada. Além disso, o gerenciamento de arquivos é feito por funções como fopen(), fclose(), fread(), fwrite(), entre outras.');
    });
    $('#topico-13').click(()=>{
        $('#topico-title').text('Bibliotecas Padrão');
        $('#topico-p').text('C fornece várias bibliotecas padrão que contêm um conjunto de funções predefinidas para realizar operações comuns, como entrada/saída, alocação de memória, cálculos matemáticos, manipulação de strings, entre outros.');
    });
    $('#topico-14').click(()=>{
        $('#topico-title').text('Boas Práticas de Programação em C');
        $('#topico-p').html('Programar em C de forma eficiente e legível envolve seguir boas práticas, como:<br><br><ul style="margin: min(2vw, 4vh);"><li>Adotar uma nomenclatura clara e consistente para variáveis e funções.</li><li>Comentar o código para explicar partes complexas ou algoritmos não triviais.</li><li>Evitar o uso excessivo de macros e diretivas de pré-processamento.</li><li>Escrever funções curtas e modulares para facilitar a leitura e reutilização do código.</li><li>Tratar erros adequadamente e verificar limites de arrays para evitar estouro de buffer.</li><li>Utilizar variáveis, ponteiros e estruturas de dados de maneira segura e consistente.</li></ul>');
    });
    $('#topico-15').click(()=>{
        $('#topico-title').text('Debugging e Erros Comuns');
        $('#topico-p').html('Debugging é o processo de identificar e corrigir erros (bugs) em um programa. Alguns erros comuns em C incluem:<br><br><ul style="margin: min(2vw, 4vh);"><li>Segmentation faults: ocorrem quando um programa tenta acessar uma área de memória que não possui permissão.</li><li>Syntax errors: erros de sintaxe que impedem a compilação do programa.</li><li>Undefined behavior: comportamentos indefinidos que podem levar a resultados inesperados.</li><li>Memory leaks: alocação de memória sem a sua posterior liberação, resultando em perda progressiva de memória disponível. Para depurar um programa, são utilizadas ferramentas como gdb (GNU Debugger) ou técnicas como impressões (prints) para identificar a origem dos erros e corrigi-los. É fundamental compreender esses erros e saber como corrigi-los para criar programas mais estáveis e funcionais em C.</li>');
    });
});
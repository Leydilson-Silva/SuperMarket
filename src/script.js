var codCoin = 0;

var items = [];
//Seleção de moeda
var moeda = [
    {/*Real*/
        country: "pt-BR",
        coin: "BRL"
    },
    {/*Euro*/
        country: "pt-PT",
        coin: "EUR"
    },
    {/*Dollar*/
        country: "en-US",
        coin: "USD"
    }];


function selecionarMoeda(entradaUsuario) {
    codCoin = entradaUsuario;
    console.log(entradaUsuario);
    vizualizarProduto();



}

function vizualizarProduto() {

    let listaProdutos = document.querySelector('.lista-produtos');
    let totalCompras = 0;

    listaProdutos.innerHTML = '';

    items.map(produto => {
        totalCompras += parseFloat(produto.valor) * parseInt(produto.qtd)


        listaProdutos.innerHTML += `
                
                 
                <tr>
                    <td class="has-text-success">`+ produto.nome + `</h3></td>
                    <td class="has-text-success">`+ produto.qtd + `x</h3></td>
                    <td class="price-produto has-text-success"> <span>`+ currentCoin(produto.valor) + `</span></td>

                </tr>
                
                `;
    });

   

    let carrinho = document.querySelector('.soma-produtos');
    carrinho.innerHTML = `
            <abbr title="Total da compra"> Total: `+ currentCoin(totalCompras) + `</abbr>
                 
            `;
};

function cadastrarProduto() {
    var nomeProduto = document.querySelector("input[name='nome_produto']");
    var qtdProduto = document.querySelector("input[name='qtd_produto']");
    var precoProduto = document.querySelector("input[name='valor_produto']");



    if (nomeProduto.value == '' || precoProduto.value == '') {
        if (nomeProduto.value == '') {
            alert("Insira o nome do produto");
        } else
            alert("Insira o valor do produto");
    } else {

        items.push({
            nome: nomeProduto.value,
            qtd: qtdProduto.value,
            valor: precoProduto.value
        });

        vizualizarProduto();

        nomeProduto.value = '';
        qtdProduto.value = '';
        precoProduto.value = '';
    }
}




function currentCoin(value) {
    return new Intl.NumberFormat(moeda[codCoin].country, {
        style: 'currency',
        currency: moeda[codCoin].coin
    }).format(value);
}


document.querySelector("input[type=submit]")
    .addEventListener('click', () => cadastrarProduto());


document.querySelector("button[name=clear]")
    .addEventListener('click', () => {
        items = [];
        document.querySelector('.lista-produtos').innerHTML = "";
        document.querySelector('.soma-produtos').innerHTML = "";
    });

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});


var root = {
    data: 15,
    left: {
      data: 6,
      left: null,
      right: null
    },
    right: {
      data: 20,
      left: {
        data: 17,
        left: null,
        right: null
      },
      right: {
        data: 25,
        left: null,
        right: null
      }
    }
  };
  
  function addNodeTree(element, node) {
    let li = document.createElement("li");
    let p = document.createElement("div");
  
    p.innerHTML = node ? node.data : "null";
    li.appendChild(p);
    element.appendChild(li);
  
    if (node) {
      let ul = document.createElement("ul");
      li.appendChild(ul);
      addNodeTree(ul, node.left);
      addNodeTree(ul, node.right);
    }
  }
  
  function render() {
    let tree = document.querySelector("#ulRoot");
    tree.innerHTML = "";
  
    if (root) {
      addNodeTree(tree, root);
    }
  }
  
  function eraseTree() {
    let root = null;
    render();
  }
  
  function log(text) {
    var console = document.querySelector("#console");
    console.innerHTML = text;
  }
  
  //alterei o valor do let temp para newNode para inserir um novo nó, batendo com o que esta no insertNode
  function insert() {
    let item = parseInt(document.querySelector("#newData").value);
    let newNode = {
      data: item,
      left: null,
      right: null
    };
    root = insertNode(root, newNode);
    render();
  }
  
  // funcao para buscar valor na arvore, passo o parametro newNode para ser inserido,
  
  function insertNode(node, newNode) {
    if (node === null) {
      return newNode;
    }
  
    //se node for nulo podemos inserir um novo nó, newNode.data verifica se o valor é menor que node.data, caso possitivo um nó sera anexado a esquerda do nó atual. caso newNode.data for igual a node.data uma mensagem de 'ja existe' será criada.
    if (newNode.data < node.data) {
      node.left = insertNode(node.left, newNode);
    } else if (newNode.data > node.data) {
      node.right = insertNode(node.right, newNode);
    } else {
      console.log(`Item ${newNode.data} já existe`);
    }
  
    return node;
  }
  // aqui verifico se o node é nullo, caso seja a funcao retorna pq nao tem o que processar
  function sortedList() {
    if (node === null) {
      return;
    }
    // se houver o que processar o sortedList primeiro adicionaria um nó a esquerda, em seguida ele pode puxar o nó a direita.
    sortedList(node.left, list);
    list.push(node.data);
    sortedList(node.right, list);
  
    let list = [];
    let panel = document.querySelector("#console");
    panel.innerHTML = `lista ${list.valueOf()}`;
  }
  // function para buscar um valor na arvore, primeiro verifico se o valor existe, caso nao exista ele retorna null
  function search() {
    if (node === null) {
      return false;
    }
    // depois verificamos se o valor existe [buscando em node.data] e ele retorna true
    if (value == node.data) {
      return true;
    }
    // aqui utilizo a vale < node.data ? para definir se podemos percorrer para a esquerda ou direita, se value for menor que node.data a funcao search é chamada para o nó esquerdo, caso nao seja faz a busca no nó a direta.
    return value < node.data ? search(node.left, value) : search(node.right, value);
  
    let item = parseInt(document.querySelector("#search").value);
    let current = root;
  
    log(`${item} doesnt exists in tree`);
  }
  
  render();
  
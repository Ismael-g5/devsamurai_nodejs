

let customers =[
  {id: 1, name: "Ismael", site: "http://example1"},
  {id: 2, name: "Guedes", site: "http://example2"},
  {id: 3, name: "Miguel", site: "http://example3"},
];



class CustomersController {


  index(req, res) {
    return res.json(customers);
  }

  show(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404;
    //parseInt muda o valor de id para inteiro

    return res.status(status).json(customer);
  }

  create(req, res) {
    const { name, site } = req.body; // conteúdo JSON da requisição

    // Corrigido: pegar o último ID corretamente
    const id = customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;

    const newCustomer = { id, name, site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer); // Retornar o novo cliente criado
  }

  update(req, res) {
    const id = parseInt(req.params.id);
    const { name, site } = req.body;

    const index = customers.findIndex(item => item.id === id);

    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers[index] = { id: parseInt(id), name, site }
    }

    return res.status(status).json(customers[index]);

  }

  destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers.splice(index, 1); // Corrigido 'splic' para 'splice'
    }

    return res.status(status).json();
  }
}


export default new CustomersController(); 
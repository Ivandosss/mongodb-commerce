db.produtos.updateMany(
  {
    nome: "Big Mac",
  },
  { 
    $currentDate: 
      { 
        ultimaModificacao: { $type: "data" },
      },
  },
);

db.produtos.find(
  {},
  { 
    _id: false, 
    nome: true, 
    ultimaModificacao: true, 
  },
);

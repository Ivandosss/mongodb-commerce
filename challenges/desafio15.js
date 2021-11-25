db.produtos.countDocuments(
  { 
    nome: { $regex: /Mc/i },
  },
  { 
    _id: false, 
    nome: true, 
  },
);

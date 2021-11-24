db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateMany(
  { tags: {
      $in: ["bovino", "pao"],
    },
  },
  { $inc: { "vendasPorDia.6": 120 } },  
);

db.produtos.find(
  {},
  { 
    _id: false, 
    nome: true, 
    vendasPorDia: true, 
  },
);
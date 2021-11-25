db.produtos.countDocuments(
  { 
    ingredientes: { $size: 4 },
  },
  { 
    _id: false, 
    ingredientes: true, 
  },
);

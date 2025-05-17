const User = require('../models/userModel'); 
 
exports.index = (req, res) => { 
  User.getAll((err, rows) => { 
    if (err) throw err; 
    res.render('index', { users: rows }); 
  }); 
}; 
 
exports.form = (req, res) => { 
  res.render('form', { user: null }); 
}; 
 
exports.create = (req, res) => { 
  const { nombre, correo } = req.body; 
  User.create({ nombre, correo }, err => { 
    if (err) throw err; 
    res.redirect('/'); 
  }); 
}; 
 
exports.edit = (req, res) => { 
  const id = req.params.id; 
  User.getById(id, (err, rows) => { 
    if (err) throw err; 
    res.render('form', { user: rows[0] }); 
  }); 
};

exports.update = (req, res) => { 
  const id = req.params.id; 
  const { nombre, correo } = req.body; 
  User.update(id, { nombre, correo }, err => { 
    if (err) throw err; 
    res.redirect('/'); 
  }); 
}; 
 
exports.delete = (req, res) => { 
  const id = req.params.id; 
  User.delete(id, err => { 
    if (err) throw err; 
    res.redirect('/'); 
  }); 
};
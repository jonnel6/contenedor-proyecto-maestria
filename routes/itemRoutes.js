const express = require('express');
const Item = require('../models/item');
const router = express.Router();

// Crear un nuevo Item
router.post('/', async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener todos los Items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un Item por ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar un Item
router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un Item
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    res.json({ message: 'Item eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

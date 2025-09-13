import Qualification from "../models/Qualification.js";

export const list = async (_req, res) => {
  const items = await Qualification.find().sort({ startYear: -1 });
  res.json(items);
};

export const create = async (req, res) => {
  try {
    const item = await Qualification.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const update = async (req, res) => {
  try {
    const item = await Qualification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const remove = async (req, res) => {
  try {
    const item = await Qualification.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

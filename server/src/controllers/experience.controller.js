import Experience from "../models/Experience.js";

export const list = async (_req, res) => {
  const items = await Experience.find().sort({ startDate: -1 });
  res.json(items);
};

export const create = async (req, res) => {
  try {
    const item = await Experience.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const update = async (req, res) => {
  try {
    const item = await Experience.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const remove = async (req, res) => {
  try {
    const item = await Experience.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

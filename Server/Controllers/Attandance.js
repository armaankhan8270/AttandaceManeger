import Attandance from "../Models/Attandance.js";

export const AddAttandance = async (req, res, next) => {
  const NewEntry = new Attandance(req.body);
  console.log(NewEntry);
  try {
    const SavedEntry = await NewEntry.save();
    res.send(SavedEntry);
  } catch (err) {
    next(err);
    console.log(next(err));
  }
};
export const AllEntry = async (req, res, next) => {
  const Entry = await Attandance.find();
  try {
    res.send(Entry);
  } catch (error) {
    next(err.message.data);
  }
};

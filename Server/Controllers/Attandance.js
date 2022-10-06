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
  const Entry = await Attandance.find().sort({ _id: -1 });
  try {
    res.send(Entry);
  } catch (error) {
    next(err.message.data);
  }
};
export const SearchByRoll = async (req, res, next) => {
  const username = req.query.NameOfUser;
  try {
    const FindedRolls = await Attandance.find({ NameOfUser: username }).sort({
      _id: -1,
    });

    res.json(FindedRolls);
  } catch (error) {}
};

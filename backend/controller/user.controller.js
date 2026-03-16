import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res, next) => {
  try {
    const loggedInUserId = req.user.id;

    const allExceptLoggedIn = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(allExceptLoggedIn);
  } catch (error) {
    next(error);
  }
};

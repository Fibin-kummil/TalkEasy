export const tryCatch = (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
};



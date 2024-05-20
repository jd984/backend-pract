const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// high order async handler

/*
const asyncHandler = () => {}
const asyncHandler = (func) => {() => {}}
const asyncHandler = (func) => {async() => {}}
const asyncHandler = (func) => async() => {}
*/

// It is just a wrapper function which in takes function and wrap it inside try catch
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
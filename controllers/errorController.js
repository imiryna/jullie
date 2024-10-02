import { serverConfig } from "../config/serverConfig.js";

export const globalErrorHandler = (err, req, res, next) => {
  if (serverConfig === "production") {
    return res.status(err.status ?? 500).json({
      msg: !err.status || err.status === 500 ? "Internal server error" : err.message,
    });
  }
  res.status(err.status ?? 500).json({
    msg: err.message,
    stack: err.stack,
  });
};

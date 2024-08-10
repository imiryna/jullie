import app from "./app.js";

export default app.listen(3000, () => {
  // utils.prepareEnvironment();
  console.log("Server running. Use our API on port: 3000");
});

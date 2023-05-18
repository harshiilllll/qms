import connectDb from "../../utils/connectDb";
import Text from "../../models/Text";

export default async function handler(req, res) {
  const { method } = req;

  await connectDb();

  switch (method) {
    case "GET":
      try {
        const texts = await Text.findOne();
        res.status(200).json({ success: true, data: texts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const text = await Text.create(req.body);
        res.status(201).json({ success: true, data: text });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const updatedText = await Text.findByIdAndUpdate(
          req.query.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json({ success: true, data: updatedText });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

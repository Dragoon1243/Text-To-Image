import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;
        console.log("Received prompt:", prompt);  // Log the received prompt

        const user = await userModel.findById(userId);
        if (!user || !prompt) {
            console.log("Missing user or prompt");
            return res.json({ success: false, message: 'Missing Details' });
        }

        if (user.creditBalance === 0 || userModel.creditBalance < 0) {
            console.log("No Credit Balance:", user.creditBalance);
            return res.json({ success: false, message: 'No Credit Balance', creditBalance: user.creditBalance });
        }

        const formData = new FormData();
        formData.append('prompt', prompt);
        console.log("Form data prepared with prompt.");

        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
                ...formData.getHeaders()  // Ensure correct headers for FormData
            },
            responseType: 'arraybuffer'
        });

        console.log("API Response received.");

        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const result = `data:image/png;base64,${base64Image}`;
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

        console.log("Image Generated and user balance updated.");
        res.json({ success: true, message: "Image Generated", creditBalance: user.creditBalance - 1, result });
    } catch (error) {
        console.error("Error:", error.message);
        res.json({ success: false, message: error.message });
    }
};

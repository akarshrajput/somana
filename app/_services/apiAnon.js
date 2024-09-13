import axios from "axios";
import supabase from "../_lib/supabase";
const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;

export const SubmitFormData = async (formData) => {
  try {
    // Construct a unique file name
    const fileName = `${Math.random()}-${Date.now()}-${formData?.file?.name}`;
    const filePath = `${supabaseURL}/storage/v1/object/public/anon-file/${fileName}`;

    // Send the form data to your API
    const response = await axios.post(`/api/v1/anon`, {
      fileName: filePath,
      pin: formData?.pin,
      ip: formData?.ip,
      location: formData?.location,
      timeLimit: formData?.timeLimit,
    });

    const anonId = response?.data?.data?.newFile.anonId;

    // Upload the file to Supabase storage
    const avatarFile = formData?.file;
    await supabase.storage.from("anon-file").upload(fileName, avatarFile);

    return anonId;
  } catch (error) {
    throw new Error("Error submitting form data: " + error.message);
  }
};

export const CheckFilePin = async ({ anonId, inputPin }) => {
  try {
    const response = await axios.get(`/api/v1/anon/${anonId}`);
    const pin = response?.data?.data?.file?.pin;
    if (pin != inputPin) return NULL;
    return response;
  } catch (error) {
    throw new Error("Error getting file: " + error.message);
  }
};

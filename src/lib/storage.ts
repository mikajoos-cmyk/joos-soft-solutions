import { supabase } from './supabaseClient';

export const uploadImage = async (file: File, path: string) => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const deleteImage = async (url: string) => {
  try {
    // Extract path from URL
    // URL format: https://[project].supabase.co/storage/v1/object/public/images/[path]
    const parts = url.split('/storage/v1/object/public/images/');
    if (parts.length < 2) return;

    const filePath = parts[1];
    const { error } = await supabase.storage
      .from('images')
      .remove([filePath]);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error deleting image:', error);
  }
};

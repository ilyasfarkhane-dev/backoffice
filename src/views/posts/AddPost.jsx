import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const AddPostForm = () => {
  // Define state to handle form inputs
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    image: '',
    author: '',
    description: '',
    keyword1: '',
    keyword2: '',
    keyword3: '',
    keyword4: '',
    keyword5: '',
    keyword6: '',
    Metatitle: '',
    alt: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send formData to the server)
    console.log('Form submitted:', formData);

    toast.success('Blog créé avec succès !');
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Ajouter un nouveau blog</h2>

      <form onSubmit={handleSubmit}>
        {/* First Section: Post Details */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Détails du message</h3>

          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Titre:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Entrez  le  titre"
              required
            />
          </div>

          {/* Text */}
          <div className="mb-4">
            <label htmlFor="text" className="block text-gray-700 font-medium mb-2">
              Text:
            </label>
            <textarea
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Entrez  le  text"
              required
            ></textarea>
          </div>

          {/* Image */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
              Image :
            </label>
            <input
              type="file"
              id="fileUpload"
              name="fileUpload"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Author */}
          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
              Auteur:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Entrez  le  nom  d'auteur"
              required
            />
          </div>
        </div>

        {/* Second Section: SEO and Keywords */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">SEO et mots clés</h3>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Entrez  la  description"
              required
            ></textarea>
          </div>

          {/* Keywords */}
          <div className="mb-4">
            <label htmlFor="keywords" className="block text-gray-700 font-medium mb-2">
              Mots clés:
            </label>
            {/* Create an array of keywords input fields */}
            {Array.from({ length: 6 }, (_, index) => (
              <input
                key={index}
                type="text"
                name={`keyword${index + 1}`}
                value={formData[`keyword${index + 1}`]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                placeholder={`
Mots  clés  ${index + 1}`}
                required
              />
            ))}
          </div>

          {/* Metatitle */}
          <div className="mb-4">
            <label htmlFor="Metatitle" className="block text-gray-700 font-medium mb-2">
              Méta-titre:
            </label>
            <input
              type="text"
              id="Metatitle"
              name="Metatitle"
              value={formData.Metatitle}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Entrez  Méta-titre"
              required
            />
          </div>

          {/* Alt */}
          <div className="mb-4">
            <label htmlFor="alt" className="block text-gray-700 font-medium mb-2">
              Text du Alt:
            </label>
            <input
              type="text"
              id="alt"
              name="alt"
              value={formData.alt}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Entrez  le  text  du  alt"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="bg-[#ff8000] text-white px-4 py-2 rounded-lg transition">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;

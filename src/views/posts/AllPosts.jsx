import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
const BlogTable = () => {
  // Define static blog data
  const blogs = [
    {
      title: 'Blog Post 1',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Blog Post 2',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Blog Post 3',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Blog Post 4',
      image: 'https://via.placeholder.com/100',
    },
  ];

  // State to manage the visibility of the update form
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  // Event handler to show the update form
  const handleShowUpdateForm = (blog) => {
    setCurrentBlog(blog);
    setUpdateFormVisible(true);
  };

  // Event handler to hide the update form
  const handleHideUpdateForm = () => {
    setUpdateFormVisible(false);
    setCurrentBlog(null);
  };

  // Event handler for input changes in the form
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the currentBlog state with the new value of the changed input field
    setCurrentBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Save changes made to the current blog post
    // In a real application, you might want to send the updated data to a server or update a global state store

    // Update the blog data in your application's state
    // (For now, we'll just log the currentBlog state to the console)
    console.log('Updated Blog:', currentBlog);

    toast.success('Blog mis à jour avec succès !');

    // Hide the update form
    handleHideUpdateForm();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#ff8000] text-white">
              <th className="py-3 px-4 text-left text-sm font-semibold">Titre</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">Image</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="py-3 px-4 text-sm">{blog.title}</td>
                <td className="py-3 px-4">
                  <img
                    src={blog.image}
                    alt={`${blog.title}`}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="py-3 px-4 text-sm flex flex-row space-x-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-edit cursor-pointer"
                    onClick={() => handleShowUpdateForm(blog)}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                    <path d="M16 5l3 3" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-trash cursor-pointer"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Form Popup */}
      {isUpdateFormVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[400px] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Update Blog Post</h3>
            {/* Form for updating the blog post */}
            <form onSubmit={handleSubmit}>
              {/* Title */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                  Titre:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={currentBlog ? currentBlog.title : ''}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#ff8000]"
                  onChange={handleChange}
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
                  defaultValue={currentBlog ? currentBlog.text : ''}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#ff8000]"
                  onChange={handleChange}
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
                  defaultValue={currentBlog ? currentBlog.author : ''}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#ff8000]"
                  onChange={handleChange}
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={currentBlog ? currentBlog.description : ''}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#ff8000]"
                  onChange={handleChange}
                />
              </div>

              {/* Keywords */}
              <div className="mb-4">
                <label htmlFor="keywords" className="block text-gray-700 font-medium mb-2">
                  Mots clés:
                </label>
                {Array.from({ length: 6 }, (_, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`keyword${index + 1}`}
                    defaultValue={currentBlog ? currentBlog[`keyword${index + 1}`] : ''}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#ff8000] mb-2"
                    onChange={handleChange}
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
                  defaultValue={currentBlog ? currentBlog.Metatitle : ''}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#ff8000]"
                  onChange={handleChange}
                />
              </div>

              {/* Alt */}
              <div className="mb-4">
                <label htmlFor="alt" className="block text-gray-700 font-medium mb-2">
                  Alt Text:
                </label>
                <input
                  type="text"
                  id="alt"
                  name="alt"
                  defaultValue={currentBlog ? currentBlog.alt : ''}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#ff8000]"
                  onChange={handleChange}
                />
              </div>

              {/* URL */}
              <div className="mb-4">
                <label htmlFor="url" className="block text-gray-700 font-medium mb-2">
                  Image:
                </label>

                <input
                  type="file"
                  id="url"
                  name="url"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  onChange={handleChange}
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleHideUpdateForm}
                  className="mr-2 text-gray-700 bg-gray-200 px-4 py-2 rounded-lg"
                >
                  Close
                </button>
                <button type="submit" className="bg-[#ff8000] text-white px-4 py-2 rounded-lg">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogTable;

import React from 'react';

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

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Title</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Image</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="py-3 px-4 text-sm text-gray-800">{blog.title}</td>
              <td className="py-3 px-4">
                <img src={blog.image} alt={blog.title} className="w-20 h-20 object-cover rounded" />
              </td>
              <td className="py-3 px-4 text-sm text-gray-800">
                <button className="mr-2 bg-blue-500 text-white px-2 py-1 rounded">Update</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;

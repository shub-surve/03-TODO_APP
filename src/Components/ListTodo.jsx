import React, { useState } from 'react';

function ListTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle('');
    setDesc('');
  };

  const DeleteTask = (i) => {
    let copyTasks = [...mainTask];
    copyTasks.splice(i, 1);
    setMainTask(copyTasks);
  };

  const renderTask = mainTask.length > 0 ? (
    mainTask.map((t, i) => {
      return (
        <li className="mt-5 p-3 mb-3" key={i}>
          <div className="flex justify-between border-2 w-full p-4 border-double border-black bg-slate-200">
            <h4 className="text-xl font-semibold">{t.title}</h4>
            <h5>{t.desc}</h5>
            <div className="flex items-center">
              <button
                onClick={() => DeleteTask(i)}
                className="bg-red-400 rounded-lg p-2 mr-2"
              >
                Delete
              </button>
              <button
                onClick={() => DeleteTask(i)}
                className="bg-green-400 rounded-lg p-2"
              >
                Complete
              </button>
            </div>
          </div>
        </li>
      );
    })
  ) : (
    <h2 className="text-center">No Task Available</h2>
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mx-auto mt-5 rounded-lg w-1/2">
          <input
            type="text"
            className="w-1/4 mr-2 py-3 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:border-green-500 ml-12"
            value={title}
            placeholder="What's TODO?"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-1/2 mr-2 py-3 px-4 border border-gray-300 focus:outline-none"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-green-500 text-white font-semibold py-3 px-6 rounded-r-lg hover:bg-green-600 focus:outline-none mr-10"
          >
            Add
          </button>
        </div>
      </form>

      <hr />
      <div className="p-7 mt-5 mr-10 ml-10">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default ListTodo;


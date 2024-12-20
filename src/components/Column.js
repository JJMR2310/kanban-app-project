import React from 'react';

function Column({ title }) {
  return (
    <div className="w-1/3 bg-gray-100 p-4 rounded shadow">
      <h2 className="font-bold mb-4">{title}</h2>
      <div className="space-y-2">
        {/* Aquí se renderizarán las tareas */}
      </div>
    </div>
  );
}

export default Column;

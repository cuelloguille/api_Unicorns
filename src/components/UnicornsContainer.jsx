{response && (
    <div className="mt-6 p-4 border rounded bg-gray-100">
      <h3 className="font-bold mb-2">Respuesta de la API:</h3>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  )}
  
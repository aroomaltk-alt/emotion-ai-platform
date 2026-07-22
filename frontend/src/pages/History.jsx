import { useEffect, useState } from "react";
import axios from "axios";

export default function History() {

  const [history, setHistory] = useState([]);

  const loadHistory = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/history"
      );

      setHistory(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const clearHistory = async () => {

    if (!window.confirm("Clear all history?"))
      return;

    await axios.delete(
      "http://127.0.0.1:8000/history"
    );

    loadHistory();

  };

  useEffect(() => {

    loadHistory();

  }, []);

  return (

    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Analysis History
        </h1>

        <button
          onClick={clearHistory}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Clear History
        </button>

      </div>

      <div className="bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3 text-left">
                Date
              </th>

              <th className="p-3 text-left">
                Type
              </th>

              <th className="p-3 text-left">
                Emotion
              </th>

              <th className="p-3 text-left">
                Confidence
              </th>

            </tr>

          </thead>

          <tbody>

            {history.length === 0 ? (

              <tr>

                <td
                  colSpan="4"
                  className="text-center p-8"
                >
                  No history available.
                </td>

              </tr>

            ) : (

              history.map((item) => (

                <tr
                  key={item[0]}
                  className="border-t"
                >

                  <td className="p-3">
                    {item[4]}
                  </td>

                  <td className="p-3">
                    {item[1]}
                  </td>

                  <td className="p-3 font-semibold">
                    {item[2]}
                  </td>

                  <td className="p-3">
                    {(item[3] * 100).toFixed(1)}%
                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}
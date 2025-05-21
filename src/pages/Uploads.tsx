import { useState } from "react";
import { CheckCircle, RotateCcw, FileText, MoreVertical } from "lucide-react";

type Upload = {
  id: string;
  name: string;
  type: string;
  status: "indexed" | "pending";
  date: string;
};

const uploadsData: Upload[] = [
  { id: "1", name: "Mit18_05_s22_lec01", type: "application/pdf", status: "indexed", date: "9/21/2024" },
  { id: "2", name: "Basic-Probability", type: "application/pdf", status: "indexed", date: "9/21/2024" },
  { id: "3", name: "O1", type: "application/pdf", status: "indexed", date: "9/21/2024" },
  { id: "4", name: "Pandas", type: "application/pdf", status: "indexed", date: "9/21/2024" },
  { id: "5", name: "NumPy", type: "application/pdf", status: "indexed", date: "9/21/2024" },
  { id: "6", name: "Lab_01_Intro To Prolog", type: "application/pdf", status: "indexed", date: "9/21/2024" },
  { id: "7", name: "Python_Basics", type: "application/pdf", status: "indexed", date: "9/21/2024" },
  { id: "8", name: "Pandas", type: "application/pdf", status: "indexed", date: "9/21/2024" },
  { id: "9", name: "Python_Basics", type: "application/pdf", status: "pending", date: "9/21/2024" },
  { id: "10", name: "Basic-Probability", type: "application/pdf", status: "pending", date: "9/21/2024" },
];

export default function Uploads() {
  const [uploads, setUploads] = useState(uploadsData);

  const handleIndex = (id: string) => {
    setUploads((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: "indexed" } : u
      )
    );
  };

  return (
    <div className="w-full min-h-svh bg-gradient-to-br from-purple-50 to-white p-8">
      <div className="max-w-5xl mx-auto bg-white/70 rounded-2xl shadow p-8">
        <h1 className="text-4xl font-bold text-purple-600 flex items-center gap-3 mb-2">
          <FileText className="text-purple-400" size={36} />
          Uploads
        </h1>
        <p className="text-gray-500 mb-8">Manage all your uploads here!</p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-sm">
                <th className="px-4 py-3">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {uploads.map((upload) => (
                <tr key={upload.id} className="hover:bg-purple-50 transition">
                  <td className="px-4 py-3">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <FileText className="text-purple-400" size={20} />
                    <a href="#" className="text-purple-700 underline font-medium">{upload.name}</a>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{upload.type}</td>
                  <td className="px-4 py-3">
                    {upload.status === "indexed" ? (
                      <CheckCircle className="text-green-400" size={20} />
                    ) : (
                      <button
                        className="group"
                        title="Click to start indexing"
                        onClick={() => handleIndex(upload.id)}
                      >
                        <RotateCcw className="text-purple-400 group-hover:text-purple-600 transition" size={20} />
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-500">{upload.date}</td>
                  <td className="px-4 py-3">
                    <button>
                      <MoreVertical className="text-gray-400" size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-500 border-t border-gray-200">
            <span>0 of 34 row(s) selected.</span>
            <div className="flex items-center gap-2">
              <span>Rows per page</span>
              <select className="border rounded px-2 py-1">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              <span>Page 1 of 4</span>
              <button className="p-1 rounded hover:bg-purple-100">
                {"<<"}
              </button>
              <button className="p-1 rounded hover:bg-purple-100">
                {"<"}
              </button>
              <button className="p-1 rounded hover:bg-purple-100">
                {">"}
              </button>
              <button className="p-1 rounded hover:bg-purple-100">
                {">>"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
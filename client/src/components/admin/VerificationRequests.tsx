import React, { useState, useEffect } from 'react';
import axios from 'axios';

type VerificationRequest = {
  _id: string;
  user: string;
  idCardImage: string;
  status: string;
};

const BACKEND_URL = `${import.meta.env.VITE_BACKEND_BASE_URL}`;

const VerificationRequests: React.FC = () => {
  const [requests, setRequests] = useState<VerificationRequest[]>([]);
  const [viewImageUrl, setViewImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch verification requests
  const fetchVerificationRequests = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${BACKEND_URL}/api/all-status`);
      setRequests(response.data);
    } catch (err) {
      console.error('Error fetching verification requests:', err);
      setError('Failed to load verification requests');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVerificationRequests();
  }, []);

  const handleApprove = async (user: string) => {
    try {
      await axios.post(`${BACKEND_URL}/api/verify-approve/${user}`);
      // Update local state to reflect the change
      setRequests((prev) =>
        prev.map((req) =>
          req.user === user ? { ...req, status: 'Approved' } : req,
        ),
      );
      alert('Verification approved successfully');
    } catch (err) {
      console.error('Error approving verification:', err);
      alert('Failed to approve verification');
    }
  };

  const handleReject = async (user: string) => {
    try {
      await axios.post(`${BACKEND_URL}/api/verify-reject/${user}`);
      // Update local state to reflect the change
      setRequests((prev) =>
        prev.map((req) =>
          req.user === user ? { ...req, status: 'Rejected' } : req,
        ),
      );
      alert('Verification rejected successfully');
    } catch (err) {
      console.error('Error rejecting verification:', err);
      alert('Failed to reject verification');
    }
  };

  // Helper function to get the full image URL
  const getFullImageUrl = (imagePath: string) => {
    // Handle already absolute URLs
    if (imagePath.startsWith('http')) {
      return imagePath;
    }

    // Ensure the path starts with a slash
    const normalizedPath = imagePath.startsWith('/')
      ? imagePath
      : `/${imagePath}`;
    return `${BACKEND_URL}${normalizedPath}`;
  };

  const openImagePreview = (imagePath: string) => {
    setViewImageUrl(getFullImageUrl(imagePath));
  };

  if (loading) {
    return (
      <div className="text-center py-8">Loading verification requests...</div>
    );
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  return (
    <div className="p-1">
      <h2 className="text-xl md:text-2xl font-bold text-center text-indigo-700 mb-6">
        ID Verification Requests
      </h2>
      {requests.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No pending verification requests
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  User ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  ID Card
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req._id} className="border-t">
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {req.user}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      className="text-blue-600 font-semibold hover:underline text-xs md:text-sm"
                      onClick={() => openImagePreview(req.idCardImage)}
                    >
                      View ID Card
                    </button>
                  </td>
                  <td className="px-4 py-3 text-sm text-center capitalize">
                    {req.status}
                  </td>
                  <td className="px-4 py-3 flex justify-center gap-4">
                    <button
                      onClick={() => handleApprove(req.user)}
                      className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 text-xs md:text-sm"
                      disabled={req.status !== 'Pending'}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(req.user)}
                      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 text-xs md:text-sm"
                      disabled={req.status !== 'Pending'}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Image Preview Modal */}
      {viewImageUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 rounded shadow-md max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-red-600 font-bold text-xl"
              onClick={() => setViewImageUrl(null)}
            >
              ×
            </button>

            <img
              src={viewImageUrl}
              alt="ID Card"
              className="w-full h-auto max-h-[80vh] object-contain rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/fallback-image.jpg';
                console.error('Image failed to load:', viewImageUrl);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VerificationRequests;

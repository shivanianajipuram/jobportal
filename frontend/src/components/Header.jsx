import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Header = () => {
  const { user, logoutUser } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="font-bold">Job Portal</h1>

      <div className="relative">
        {user ? (
          <>
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
            >
              {user?.email?.[0]?.toUpperCase()}
            </button>

            {open && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md w-40">
                <p className="px-3 py-2 border-b">{user.email}</p>

                <button
                  onClick={logoutUser}
                  className="w-full text-left px-3 py-2 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <a href="/login" className="px-4 py-2 bg-blue-500 rounded">
            Login
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
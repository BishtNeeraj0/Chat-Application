import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/users", {
          credentials: "include",
        });

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(Array.isArray(data) ? data : []);
      } catch (error) {
        toast.error(error.messages);
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;

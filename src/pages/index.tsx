import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [response, setResponse] = useState("");

  const handleResponse = async (answer: string) => {
    setResponse(answer);
    if (answer === "yes") {
      const downloadLink = document.getElementById("val-id") as HTMLAnchorElement;
    
      if (downloadLink) {
        setTimeout(() => {
          downloadLink.click(); // Programmatically trigger the download
        }, 1000);
      }
    } else {
      alert("Be like you dey ment. Come on choose joor ")
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
      <div className="text-center mb-5">
        <motion.h1 
          className="text-4xl font-bold text-gray-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
            Mrs Abolarin
          </motion.h1>
        <motion.div
          className="text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img className="h-[200px] w-[200px] object-cover rounded-full" src="/images/tee-baby.JPG" alt="" />
        </motion.div>
      </div>
      <motion.h1 
        className="text-4xl font-bold text-red-600 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Will you be my Valentine? 💖
      </motion.h1>

      <div className="flex space-x-6">
        <motion.button 
          className="bg-red-500 text-white px-6 py-2 rounded-lg text-xl"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleResponse("yes")}
        >
          Yes ❤️
        </motion.button>

        <motion.button 
          className="bg-gray-500 text-white px-6 py-2 rounded-lg text-xl"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleResponse("no")}
        >
          No 💔
        </motion.button>
      </div>

      <motion.a 
          target="_blank"
          href="/images/valentine.pdf"
          id="val-id"
          className="bg-red-500 text-white px-6 py-2 rounded-lg text-xl hidden"
          whileHover={{ scale: 1.1 }}
        >
         Download
        </motion.a>

      {response && (
        <motion.p 
          className="mt-4 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {response === "yes" ? "Yay! 🎉 You have been Val'd" : ""}
        </motion.p>
      )}
    </div>
  );
}

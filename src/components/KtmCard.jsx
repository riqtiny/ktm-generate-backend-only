import React, { useEffect, useRef } from "react";
import { downloadKtm } from "../utils/downloadKtm";

const KtmCard = ({ student, onClose }) => {
  const cardRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!student) return null;

  const getImageUrl = (path) => {
    if (!path) return "";
    return `http://localhost:8080${path}`;
  };

  const handleDownload = () => {
    downloadKtm("ktm-card", student.name);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={cardRef} className="relative">
        <div id="ktm-card" className="frame-parent">
          <div className="relative bg-[#753995] rounded-3xl w-[850px] h-[550px]">
            <div className="relative h-full">
              <div className="absolute top-1 left-0 rounded-3xl bg-gradient-to-b from-[#fae303] to-transparent w-[850px] h-[275px]" />

              <div className="relative">
                <div className="flex justify-between p-8">
                  <img src="/chip.png" alt="Chip" className="h-14" />
                  <img src="/logo-ug.png" alt="UG Logo" className="h-32" />
                </div>

                <div className="flex px-8 gap-6">
                  <img
                    src={getImageUrl(student.photo_url)}
                    alt={student.name}
                    className="w-[200px] h-[225px] rounded-2xl object-cover"
                  />
                  <div className="space-y-5 text-white font-bold">
                    <div>{student.nim}</div>
                    <div>{student.name}</div>
                    <div>{student.major}</div>
                    <div>{student.faculty}</div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-4xl font-bold text-white">
                      prepaid
                    </span>
                    <img src="/chip-symbol.png" alt="Symbol" className="h-11" />
                  </div>
                </div>

                <div className="absolute bottom w-full flex justify-between items-end">
                  <div className="py-8 space-y-2">
                    <div className="px-8 text-right">
                      <span className="text-4xl text-white">
                        U<span className="text-[#f47820]">G</span>
                      </span>{" "}
                      <span className="text-xl">
                        <span className="text-[#592971]">CO</span>
                        <span className="text-[#ee2824]">LO</span>
                        <span className="text-[#fae303]">RING</span>{" "}
                        <span className="text-white">THEGLOBAL FUTURE</span>
                      </span>
                    </div>
                    <div className="h-2.5 w-[425px] rounded bg-gradient-to-r from-[#592971] via-[#ee2824] to-[#fae303]" />
                  </div>
                  <div className="p-8">
                    <img src="/barcode.png" alt="Barcode" className="h-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KtmCard;

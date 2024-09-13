import QRCode from "qrcode.react";
import React from "react";

const QRcode = ({ link }) => {
  return (
    <div>
      <QRCode className="border p-2 rounded-md" size={100} value={link} />
    </div>
  );
};

export default QRcode;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import ShareModal from "./ShareModal/ShareModal";
import "./Share.scss";

const Share = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <button className="share-button" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faShareNodes} size="lg"></FontAwesomeIcon>
      </button>
      {isOpen && <ShareModal visible={isOpen} setVisible={setIsOpen} />}
    </React.Fragment>
  );
};

export default Share;

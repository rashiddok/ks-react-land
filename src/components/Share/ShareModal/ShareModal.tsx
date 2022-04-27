import React from "react";
import {
  faFacebook,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShareDialogLink } from "../../../utils/models/ShareDialogLink";
import ShareModalButton from "./ShareModalButton";
import "./ShareModal.scss";
import Modal from "../../UI/Modal/Modal";

type ComponentProps = {
  visible: boolean;
  setVisible: (...args: any) => void;
};

const ShareModal = ({ visible, setVisible }: ComponentProps) => {
  const url = document.location.href;

  const shareItems = [
    new ShareDialogLink(
      "Facebook",
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      faFacebook,
      "facebook-icon"
    ),
    new ShareDialogLink(
      "LinkedIn",
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      faLinkedin,
      "linkedin-icon"
    ),
    new ShareDialogLink(
      "Telegram",
      `https://t.me/share/url?url=${url}`,
      faTelegram,
      "telegram-icon"
    ),
    new ShareDialogLink("Email", getMailLink(url), faEnvelope, "ff"),
  ];

  function getMailLink(url: string): string {
    const subject =
      "?subject=" + encodeURIComponent("Checkout Ksenya Lanina projects");
    const body =
      "&body=" +
      encodeURIComponent("Here you take a look at Ksenya Lanina projects: ") +
      encodeURIComponent(url);
    const link: string = "mailto:" + subject + body;
    return link;
  }

  function copyLinkClick() {
    navigator.clipboard.writeText(url);
  }
  return (
    <Modal setVisible={setVisible}>
      <div className="share-dialog">
        <header>
          <h3 className="dialog-title color-default">
            Поделиться в соц. сетях
          </h3>
          <button className="close-button" onClick={() => setVisible(false)}>
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              className="color-default"
            />
          </button>
        </header>
        <div className="share__list">
          {shareItems.map((v, index) => (
            <ShareModalButton
              url={v.shareUrl}
              key={index}
              text={v.name}
              icon={v.faIcon}
              iconSize="lg"
              iconClass={["icon", v.faIconClass].join("")}
            />
          ))}
        </div>
        <div className="link-share" onClick={copyLinkClick}>
          <div className="link-url">{url}</div>
          <button className="copy-link">Скопировать</button>
        </div>
      </div>
    </Modal>
  );
};

export default ShareModal;

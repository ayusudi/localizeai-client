import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import SwitchOverview from "../../components/SwitchOverview";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loading from "../../assets/loading.json";
import fetchDetail from "../../helpers/fetchDetail";
import {
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,
} from "react-share";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalShare({ id, setModalUrl }) {
  let str = "https://localizeai.online/" + id;

  return (
    <>
      <div id="background-popup"></div>
      <div id="popup" className="popup">
        <div className="content">
          <FontAwesomeIcon
            onClick={() => setModalUrl("")}
            icon={faClose}
            color="grey"
            style={{ alignSelf: "flex-end", paddingTop: 5, cursor: "pointer" }}
          />
          <p style={{ marginTop: 10 }}>
            <b>Share this link via</b>
          </p>
          <ul
            className="icons"
            style={{ display: "flex", gap: 4, marginTop: 5, marginBottom: 5 }}
          >
            <li>
              <FacebookShareButton title={"Check it out!"} url={str}>
                <FontAwesomeIcon
                  className="buttonIconSocMed"
                  icon={faFacebook}
                />
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton title={"Check it out!"} url={str}>
                <FontAwesomeIcon
                  className="buttonIconSocMed"
                  icon={faTwitter}
                />
              </TwitterShareButton>
            </li>
            <li>
              <FontAwesomeIcon
                className="buttonIconSocMed"
                icon={faInstagram}
              />
            </li>
            <li>
              <WhatsappShareButton title={"Check it out!"} url={str}>
                <FontAwesomeIcon
                  className="buttonIconSocMed"
                  icon={faWhatsapp}
                />
              </WhatsappShareButton>
            </li>
            <li>
              <TelegramShareButton title={"Check it out! " + str}>
                <FontAwesomeIcon
                  className="buttonIconSocMed"
                  icon={faTelegram}
                />
              </TelegramShareButton>
            </li>
          </ul>
          <p>Or copy link</p>
          <div className="field">
            <i className="url-icon uil uil-link"></i>
            <input type="text" readOnly defaultValue={str} />
          </div>
          <button className="button-radius" id="modal">
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default function Layout() {
  const [modal, setModalUrl] = useState("");
  let [isLoading, setLoading] = useState(true);
  let [data, setData] = useState({});
  let { id } = useParams();
  let location = useLocation();
  const navigate = useNavigate();
  const [checkStatus, setCheckStatus] = useState(
    location.pathname.split("/").length === 3 ? false : true
  );
  const changePage = () => {
    setCheckStatus(!checkStatus);
    if (location.pathname.split("/").length === 3)
      navigate(`/places/${id}/reviews`);
    else navigate(`/places/${id}`);
  };
  useEffect(() => {
    fetchDetail(id)
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" page flex flex-col pb-6">
      <div className="bg-white relative flex justify-center pt-6 pb-3 border-b-[1px]">
        <button
          onClick={() => navigate("/places")}
          className="absolute top-6 bg-white left-4 rounded-full flex justify-center items-center h-12 w-12 border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.4447 6.60384C15.2833 6.72573 14.8016 7.08963 14.5239 7.30636C13.9677 7.74043 13.2286 8.33354 12.4917 8.97335C11.7511 9.61639 11.0298 10.2919 10.4995 10.892C10.2337 11.1929 10.0316 11.4573 9.90013 11.6754C9.77645 11.8805 9.75073 12.0017 9.75073 12.0017C9.75073 12.0017 9.77645 12.1194 9.90012 12.3245C10.0316 12.5426 10.2337 12.807 10.4995 13.1079C11.0298 13.708 11.7511 14.3835 12.4917 15.0265C13.2286 15.6663 13.9677 16.2595 14.5239 16.6935C14.8016 16.9103 15.2827 17.2737 15.4441 17.3955C15.7776 17.6412 15.8495 18.1112 15.6039 18.4447C15.3583 18.7782 14.8888 18.8495 14.5552 18.6038L14.5527 18.6019C14.3834 18.4741 13.8844 18.0972 13.6011 17.876C13.0323 17.4322 12.2714 16.8217 11.5083 16.1592C10.7489 15.4999 9.97021 14.7742 9.37546 14.1011C9.07884 13.7654 8.81212 13.4251 8.6155 13.0989C8.43128 12.7933 8.25 12.4065 8.25 11.9999C8.25 11.5934 8.43129 11.2065 8.6155 10.901C8.81213 10.5748 9.07884 10.2345 9.37546 9.89881C9.97021 9.22569 10.7489 8.50002 11.5083 7.8407C12.2714 7.17815 13.0323 6.56772 13.601 6.12384C13.8846 5.90256 14.3836 5.52563 14.5525 5.39805L14.5547 5.3964C14.8882 5.15077 15.3582 5.22166 15.6038 5.55518C15.8495 5.88869 15.7782 6.3582 15.4447 6.60384Z"
              fill="#0D0D0D"
            />
          </svg>
        </button>
        <SwitchOverview
          checked={checkStatus}
          uncheckedLabel="Overview"
          checkedLabel="Review"
          handleToggle={() => changePage()}
        />
        <button
          onClick={() => setModalUrl(id)}
          className="absolute top-6 bg-white right-4 rounded-full flex justify-center items-center h-12 w-12 border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.9983 14.75H12.0002L12.0012 14.749C12.4142 14.749 12.7502 14.415 12.7512 14.001L12.7772 3.53995C13.5207 4.32608 14.3207 5.28314 14.4151 5.39607C14.4205 5.40252 14.4242 5.40697 14.4242 5.40697C14.6882 5.72597 15.1612 5.76997 15.4802 5.50497C15.7982 5.24097 15.8422 4.76796 15.5782 4.44896C15.5092 4.36496 13.8752 2.39996 12.9352 1.60096C12.6862 1.38996 12.3792 1.26596 12.0712 1.25096H12.0572C11.7062 1.23796 11.3662 1.35696 11.0752 1.59496C11.0722 1.59696 11.0682 1.59996 11.0652 1.60296C10.1262 2.40196 8.49225 4.36696 8.42325 4.44996C8.15825 4.76896 8.2022 5.24197 8.5212 5.50597C8.8402 5.77097 9.31216 5.72697 9.57716 5.40797C9.58916 5.39297 10.4762 4.32597 11.2762 3.48497L11.2502 13.998C11.2492 14.412 11.5843 14.749 11.9983 14.75Z"
              fill="#0D0D0D"
            />
            <path
              d="M12.998 22.75C16.967 22.75 18.959 22.75 20.346 21.427C21.748 20.089 21.748 18.182 21.748 14.38C21.748 10.578 21.748 8.67005 20.345 7.33205C19.786 6.80005 19.089 6.46103 18.152 6.26503C17.746 6.18103 17.349 6.44104 17.264 6.84604C17.18 7.25204 17.44 7.64905 17.845 7.73405C18.507 7.87305 18.959 8.08404 19.311 8.41904C20.249 9.31303 20.249 11.007 20.249 14.3799C20.249 17.7528 20.249 19.447 19.311 20.341C18.359 21.25 16.567 21.25 12.999 21.25H10.999C7.43102 21.25 5.64001 21.25 4.68701 20.341C3.74902 19.447 3.74902 17.7531 3.74902 14.3802C3.74902 11.0072 3.74904 9.31404 4.68604 8.42004C5.03904 8.08504 5.49203 7.87305 6.15303 7.73505C6.55903 7.65005 6.81898 7.25204 6.73398 6.84704C6.64898 6.44104 6.252 6.18203 5.846 6.26604C4.909 6.46203 4.21195 6.80105 3.65195 7.33305C2.25 8.67101 2.25 10.5789 2.25 14.3797C2.25 18.1804 2.25 20.0891 3.65195 21.427C5.03995 22.75 7.03199 22.75 11 22.75H12.998Z"
              fill="#0D0D0D"
            />
          </svg>
        </button>
      </div>
      {isLoading ? (
        <Lottie
          loop={true}
          className="m-auto"
          animationData={loading}
          style={{ minWidth: 330, maxWidth: "80%", aspectRatio: "1/1" }}
        />
      ) : (
        <>
          <Outlet context={[data, setData]} />

          {modal.length ? (
            <ModalShare id={id} setModalUrl={setModalUrl} />
          ) : null}
        </>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import UploadImage from "../../components/UploadImage";
import { postImage } from "../../api/imageDetect";
import { redirect, Link } from "react-router-dom";
import ShowNutrition from "./ShowNutrition";
import Spinner from "../../components/Spinner";

const Scan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [res, setRes] = useState(null);
  const handleScan = () => {
    if (result) {
      setIsLoading(!isLoading);
      postImage(result, setRes);
    }
  };

 
  useEffect(() => {
    if(res)
    setIsLoading(!isLoading);
    redirect("/show-nutrition");
  }, [res]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {!res && (
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-xxl-4 col-xl-4 col-lg-4">
                  <UploadImage setResult={setResult} />
                  <button
                    className="btn-primary"
                    style={{ display: "block", margin: "auto", width: "140px" }}
                    onClick={handleScan}
                  >
                    Quét món ăn
                  </button>
                  {res && (
                    <img
                      src={"data:image/png;base64," + res}
                      alt="sdasdsadsadsa"
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {res  && <ShowNutrition imageSource={res} />}
    </>
  );
};

export default Scan;

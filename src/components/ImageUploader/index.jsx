import React, { useState } from "react";
import styles from "./ImageUploader.module.scss";
import XButton from "./svgs/XButton";

const ImageUploader = ({ className = "" }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = [];
    let hasError = false;
    files.forEach((file) => {
      if (file.size > 1 * 1024 * 1024) {
        setError("Each file must be less than 1MB.");
        hasError = true;
        return;
      }
      const validTypes = ["image/jpeg", "image/png", "image/gif", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        setError("Only JPG, PNG, and GIF files are allowed.");
        hasError = true;
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...newImages]);
          setError("");
        }
      };
      reader.readAsDataURL(file);
    });

    if (hasError) {
      setImages([]);
    }
  };
  function handleFileRemoving(indexToRemove, event) {
    event.preventDefault();
    setImages((oldImages) => {
      return oldImages.filter((_, index) => index !== indexToRemove);
    });
  }

  return (
    <div className={styles.inputImageWrapper}>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        id="file-upload"
        className={`${className} ${styles.imageUploader}`}
        style={{ display: "none" }}
      />
      <label htmlFor="file-upload" className={styles.fileUploadLabel}>
        <div className={`${styles.imagesWrapper + " d-flex"}`}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageButtonWrapper}>
              <img
                src={image}
                alt={`Uploaded ${index}`}
                className={styles.imageDisplayed}
                onClick={(event) => {
                  event.preventDefault();
                }}
              />
              <button
                type="button"
                onClick={(event) => handleFileRemoving(index, event)}
              >
                <XButton />
              </button>
            </div>
          ))}
        </div>
        <span>+ Upload images or drag and drop</span>
      </label>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default ImageUploader;

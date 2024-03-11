'use client'

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@/node_modules/react-bootstrap/esm/Button';

function Dropzone({ onDrop, selectedImages, setSelectedImages, alertDropzone, setAlertDropzone, borderDropzone, setBorderDropzone }) {

  const handleDrop = useCallback((acceptedFiles) => {
    onDrop(acceptedFiles);
  }, [onDrop]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  const removeImage = file => () => {
    const newImages = [...selectedImages];
    newImages.splice(newImages.indexOf(file), 1);
    setSelectedImages(newImages);
  };

  const removeAll = () => {
      setSelectedImages([]);
  };

  const selectedImagesRender = selectedImages?.map(file => (
      <div className="col-3 dropzone-image-container" key={file.name}>
          <div id="dropzone-x-div"><Button className="dropzone-deletebutton-ind" onClick={removeImage(file)}>x</Button></div>
          <img className="dropzone-image" src={URL.createObjectURL(file)}  alt={file.name}></img>
          <div className="dropzone-image-name">{file.name}</div>
      </div>
  ));

  if (selectedImagesRender.length > 6) {
      setAlertDropzone("danger-alert");
      setBorderDropzone("danger-border");
      setSelectedImages([]);
  } 

  return (
      <div className="dropzone-container" id={borderDropzone}>
          <div {...getRootProps()}>
              <input {...getInputProps()} />
              <span className="dropzone-text">Drag and drop images here or click to select files.</span>
          </div>
          {
              selectedImagesRender.length > 0 && 
              <div>
                  <div id="container-todas-imagenes" className="row">
                      {selectedImagesRender}
                  </div>
                  <div>
                      <Button className="dropzone-deletebutton-all" onClick={removeAll}>BORRAR TODO</Button>
                  </div>
              </div>
          }
          <div className="dropzone-alert" id={alertDropzone}>
              You can only upload 6 images per product. Re-upload images without exceeding the allowed limit.
          </div>
      </div>
  );

}

export default Dropzone;




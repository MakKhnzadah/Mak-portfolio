import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';

interface ProfileUploadProps {
  currentImagePath: string;
  onImageChange?: (newPath: string) => void;
}

const ProfileImageUpload: React.FC<ProfileUploadProps> = ({ currentImagePath, onImageChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // For a real application, this would upload the file to a server
  // Here we're just demonstrating the UI since we can't actually save files in this demo
  const handleUpload = () => {
    if (selectedFile) {
      // In a real app, you would upload the file to your server here
      console.log('Uploading file:', selectedFile.name);
      
      // For demo purposes, we'll just use the preview URL
      if (previewUrl && onImageChange) {
        onImageChange(previewUrl);
      }
      
      setShowModal(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create a preview URL for the selected image
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          setPreviewUrl(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-image-upload">
      <Button 
        variant="outline-light" 
        size="sm" 
        onClick={() => setShowModal(true)}
        className="position-absolute bottom-0 end-0 m-2"
      >
        Change Photo
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Profile Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select an image file (JPG or PNG recommended)</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} accept="image/*" />
            </Form.Group>
            
            {previewUrl && (
              <div className="text-center my-3">
                <p>Preview:</p>
                <img 
                  src={previewUrl} 
                  alt="Preview" 
                  style={{ maxWidth: '100%', maxHeight: '200px' }} 
                  className="rounded"
                />
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Upload Photo
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProfileImageUpload;

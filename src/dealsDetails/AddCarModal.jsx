import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import "./AddCarModal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCarModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    carName: "",
    carNumber: "",
    carType: "",
    phoneNumber: "",
    seats: "",
    ratePerDay: "",
    driverName: "",
    bookingType: "",
    gearType: "",
    airCondition: "",
    photos: [],
  });

  const [previewUrls, setPreviewUrls] = useState([]);

  const carTypes = ["Sedan", "SUV", "Mini Van", "Mini Van (EV)"];
  const gearTypes = ["Manual", "Automatic"];
  const acOptions = ["Yes", "No"];

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, photos: files });

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(previews);
  };

  const resetForm = () => {
    setFormData({
      carName: "",
      carNumber: "",
      carType: "",
      phoneNumber: "",
      ratePerDay: "", // ✅ renamed
      driverName: "",
      seats: "",
      bookingType: "",
      gearType: "",
      airCondition: "",
      photos: [],
    });
    setPreviewUrls([]);
  };

  const notify = (message, type = "info") => {
    toast(`${message}`, {
      position: "top-center",
      type: type,
      autoClose: 3000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "carName",
      "carNumber",
      "carType",
      "phoneNumber",
      "ratePerDay", // ✅ renamed
      "driverName",
      "seats",
      "bookingType",
      "gearType",
      "airCondition",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        notify("Bijay Dai Says: Please fill all required fields.", "error");
        return;
      }
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "photos") {
        value.forEach((file) => data.append("photos", file));
      } else {
        data.append(key, value);
      }
    });

    try {
      await axios.post("http://localhost:5000/api/cars/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      notify("Bijay Dai Says: Car added successfully!", "success");
      resetForm();
    } catch (err) {
      console.error("Error adding car:", err);
      notify("Bijay Dai Says: Failed to add car. Please try again.", "error");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="modal-overlay">
        <div className="modal-container">
          <button onClick={onClose} className="close-button">
            <X size={20} />
          </button>

          <form onSubmit={handleSubmit} className="form-container">
            <div className="photo-section">
              <h3>Car photos</h3>
              <div className="photo-upload-area">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                />
                {previewUrls.length > 0 && (
                  <div className="preview-container">
                    {previewUrls.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={`Preview ${index + 1}`}
                        className="preview-image"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Car Name</label>
                <input
                  type="text"
                  value={formData.carName}
                  onChange={(e) =>
                    setFormData({ ...formData, carName: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Car Number</label>
                <input
                  type="text"
                  value={formData.carNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, carNumber: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Car Type</label>
                <select
                  value={formData.carType}
                  onChange={(e) =>
                    setFormData({ ...formData, carType: e.target.value })
                  }
                >
                  <option value="">Select Type</option>
                  {carTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Seats</label>
                <input
                  type="number"
                  value={formData.seats}
                  onChange={(e) =>
                    setFormData({ ...formData, seats: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Booking Type</label>
                <input
                  type="text"
                  value={formData.bookingType}
                  onChange={(e) =>
                    setFormData({ ...formData, bookingType: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Driver Name</label>
                <input
                  type="text"
                  value={formData.driverName}
                  onChange={(e) =>
                    setFormData({ ...formData, driverName: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Rate / Day</label>
                <input
                  type="text"
                  value={formData.ratePerDay}
                  onChange={(e) =>
                    setFormData({ ...formData, ratePerDay: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Gears Type</label>
                <select
                  value={formData.gearType}
                  onChange={(e) =>
                    setFormData({ ...formData, gearType: e.target.value })
                  }
                >
                  <option value="">Select Type</option>
                  {gearTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Air Condition</label>
                <select
                  value={formData.airCondition}
                  onChange={(e) =>
                    setFormData({ ...formData, airCondition: e.target.value })
                  }
                >
                  <option value="">Select Option</option>
                  {acOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" onClick={onClose} className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="add-car-btn">
                Add Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCarModal;

import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import fruits from "./image/fruits.jpg";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const isToggle = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const isToggle1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const isToggle2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen(false);
    setIsOpen1(false);
    setIsOpen3(false);
  };

  const isToggle3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen(false);
    setIsOpen1(false);
    setIsOpen2(false);
  };

  return (
    <>
      <div className="container">
        {/* Kashmiri Apple */}
        <div className="header">
          <FaArrowLeftLong />
          <h1>Kashmiri Apple</h1>
        </div>

        {/* All Content */}
        <div className="content">
          {/* Buttons */}
          <div className="button-group">
            {/* General Information */}
            <div
              className={
                isOpen ? "button-active button-top-left" : "button-inactive button-top-left"
              }
              onClick={isToggle}
            >
              <p>General Information</p>
            </div>

            {/* Pricing & Tax */}
            <div
              className={isOpen1 ? "button-active" : "button-inactive"}
              onClick={isToggle1}
            >
              <p>Pricing & Tax</p>
            </div>

            {/* Description & Media */}
            <div
              className={isOpen2 ? "button-active" : "button-inactive"}
              onClick={isToggle2}
            >
              <p>Description & Media</p>
            </div>

            {/* Variants */}
            <div
              className={isOpen3 ? "button-active button-last" : "button-inactive button-last"}
              onClick={isToggle3}
            >
              <p>Variants</p>
            </div>
          </div>

          {/* Toggle Sections */}
          <div className="toggle-section">
            {isOpen && (
              <div className="section-container">
                {/* Heading */}
                <div className="section-header">
                  <div className="section-title">
                    <div className="icon-container">
                      <FaShoppingBag />
                    </div>
                    <div>
                      <h1 className="section-title-text">Kashmiri Apple</h1>
                      <p className="section-subtitle">
                        SKU-KAPL-021 • Goods • Available Qty - 76kg
                      </p>
                    </div>
                  </div>
                  <div className="edit-icon">
                    <FaPencilAlt />
                  </div>
                </div>

                {/* All Categories */}
                <div className="categories">
                  {/* Category */}
                  <div className="category">
                    <div className="category-item">
                      <p className="label">Category</p>
                      <p className="value">FRUITS</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Supplier SKU</p>
                      <p className="value">KAPL-011</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Reorder Level</p>
                      <p className="value">12 QTY</p>
                    </div>
                  </div>

                  {/* Brands */}
                  <div className="category">
                    <div className="category-item">
                      <p className="label">Brands/Manufacturer</p>
                      <p className="value">Kashmiri Apple</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Barcode</p>
                      <p className="value">UPC - 1234 5678 9090</p>
                      <p className="value">EAN - 1234 5678 9090</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Initial Stock Quantity</p>
                      <p className="value">448</p>
                    </div>
                  </div>

                  {/* Product Type */}
                  <div className="category">
                    <div className="category-item">
                      <p className="label">Product Type</p>
                      <p className="value">Simple</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Warehouse Location</p>
                      <p className="value">Noida Sector 62</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Track by</p>
                      <p className="value">Serial No.</p>
                    </div>
                  </div>

                  {/* Supplier */}
                  <div className="category">
                    <div className="category-item">
                      <p className="label">Supplier</p>
                      <p className="value">Alok Ranjan</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Lead Time</p>
                      <p className="value">16</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Status</p>
                      <p className="value">Returnable</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isOpen1 && (
              <div className="section-container">
                {/* Heading */}
                <div className="section-header">
                  <div className="section-title">
                    <div className="icon-container">
                      <FaShoppingBag />
                    </div>
                    <div>
                      <h1 className="section-title-text">Kashmiri Apple</h1>
                      <p className="section-subtitle">
                        SKU-KAPL-021 • Goods • Available Qty - 76kg
                      </p>
                    </div>
                  </div>
                  <div className="edit-icon">
                    <FaPencilAlt />
                  </div>
                </div>

                {/* All Categories */}
                <div className="categories">
                  {/* Category */}
                  <div className="category">
                    <div className="category-item">
                      <p className="label">Purchase Price</p>
                      <p className="value">FRUITS</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Unit</p>
                      <p className="value">KAPL-011</p>
                    </div>
                    <div className="category-item">
                      <p className="label">HSN / SAC</p>
                      <p className="value">16 days</p>
                    </div>
                  </div>

                  {/* Brands */}
                  <div className="category">
                    <div className="category-item">
                      <p className="label">Selling price</p>
                      <p className="value">Kashmiri Apple</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Discount</p>
                      <p className="value">UPC - 1234 5678 9090</p>
                      <p className="value">EAN - 1234 5678 9090</p>
                    </div>
                    <div className="category-item">
                      <p className="label">GST Rate</p>
                      <p className="value">12 QTY</p>
                    </div>
                  </div>

                  {/* Product Type */}
                  <div className="category">
                    <div className="category-item">
                      <p className="label">Wholesale Price / Bulk Price</p>
                      <p className="value">Simple</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Discount Period</p>
                      <p className="value">Noida Sector 62</p>
                    </div>
                  </div>

                  {/* Supplier */}
                  <div className="category">
                    <div className="category-item">
                      <p className="label">Quantity</p>
                      <p className="value">Alok Ranjan</p>
                    </div>
                    <div className="category-item">
                      <p className="label">Tax Rate</p>
                      <p className="value">KG</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isOpen2 && (
              <div className="section-container">
                {/* Description & Media Content */}
                <div className="section-header">
                  <div className="section-title">
                    <div className="icon-container">
                      <FaShoppingBag />
                    </div>
                    <div>
                      <h1 className="section-title-text">Kashmiri Apple</h1>
                      <p className="section-subtitle">
                        SKU-KAPL-021 • Goods • Available Qty - 76kg
                      </p>
                    </div>
                  </div>
                  <div className="edit-icon">
                    <FaPencilAlt />
                  </div>
                </div>
                <div>
                  <div className="media-content">
                    <img src={fruits} alt="fruits" className="media-image" />
                    <div>
                      <div className="seo-content">
                        <div>
                          <p className="label">SEO META TITLE</p>
                          <p className="value">Raseele Aam</p>
                        </div>
                        <div>
                          <p className="label">SEO META Description</p>
                          <p className="value">Ratnagiri Ke Raseele Aam</p>
                        </div>
                      </div>

                      <div className="keywords">
                        <p className="label">Keywords</p>
                        <p className="value">
                          Mango, Fruits, Kashmiri aam, Ratnagiri aam, langra
                          aam, keshri aam
                        </p>
                      </div>

                      <div>
                        <p className="label">Description</p>
                        <p className="value">
                          Mangoes, Often referred to as the "king of fruits,"
                          are not only delicious but also packed with nutrients.
                          They are rich in vitamins A and C, which are essential
                          for maintaining healthy skin and boosting the immune
                          system. Additionally, mangoes contain antioxidants
                          that help combat free radicals in the body. Their
                          sweet, juicy smoothies, salads, and desserts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isOpen3 && (
              <div className="section-container">
                {/* Variants Content */}
                <div className="section-header">
                  <div className="section-title">
                    <div className="icon-container">
                      <FaShoppingBag />
                    </div>
                    <div>
                      <h1 className="section-title-text">Kashmiri Apple</h1>
                      <p className="section-subtitle">
                        SKU-KAPL-021 • Goods • Available Qty - 76kg
                      </p>
                    </div>
                  </div>
                  <div className="edit-icon">
                    <FaPencilAlt />
                  </div>
                </div>

                <div className="variants-header">
                  <p className="label">Color</p>
                  <p className="label">Quantity</p>
                </div>
                <div className="variants-content">
                  <p>Red</p>
                  <p>00</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

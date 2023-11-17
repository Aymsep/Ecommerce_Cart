import React from 'react';
import { useFormik } from 'formik';

const Adder = () => {
  const [dataOptions] = React.useState([
    { value: 'size', label: 'Size', options: ['S', 'M', 'L', 'XL'] },
    { value: 'color', label: 'Color', options: ['Red', 'Black', 'Blue', 'Green'] },
  ]);

  const [dynamicOptions, setDynamicOptions] = React.useState([]);

  const formik = useFormik({
    initialValues: {
      dynamicOptions: [{ selectedCategory: '', selectedOption: '' }],
    },
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form submitted:', values.dynamicOptions);
    },
  });

  const addOptionFields = () => {
    setDynamicOptions((prevOptions) => [
      ...prevOptions,
      { selectedCategory: '', selectedOption: '' },
    ]);
    formik.setFieldValue('dynamicOptions', [...formik.values.dynamicOptions, { selectedCategory: '', selectedOption: '' }]);
  };

  const handleCategoryChange = (index, value) => {
    setDynamicOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index].selectedCategory = value;
      return newOptions;
    });
    formik.setFieldValue(`dynamicOptions.${index}.selectedCategory`, value);
  };

  const handleOptionChange = (index, value) => {
    setDynamicOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index].selectedOption = value;
      return newOptions;
    });
    formik.setFieldValue(`dynamicOptions.${index}.selectedOption`, value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <button type="button" onClick={addOptionFields}>
          Add Option
        </button>
      </div>

      {formik.values.dynamicOptions.map((option, index) => (
        <div key={index}>
          <label htmlFor={`categoryDropdown${index}`}>Select Category:</label>
          <select
            id={`categoryDropdown${index}`}
            onChange={(e) => handleCategoryChange(index, e.target.value)}
            value={option.selectedCategory}
          >
            <option value="">Select a category</option>
            {dataOptions.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          <label htmlFor={`optionDropdown${index}`}>Select Option:</label>
          <select
            id={`optionDropdown${index}`}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            value={option.selectedOption}
          >
            {dataOptions.find((category) => category.value === option.selectedCategory)?.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Adder;

import React from 'react';

const AddProducts = () => {
    return (
        <div>

            <form>

          <p><span>name</span><input type="text" /></p>
          <p><span>cost</span><input type="text" /></p>
          <p><span>type</span><input type="text" /></p>
          <p><span>details</span><input type="text" /></p>
          <p><span>shortDescription</span><input type="text" /></p>
          <p><span>fullDescription</span><input type="text" /></p>
          <p><span>upload Image</span><input type="file" /></p>
          <p><span>upload Image</span><input type="file" /></p>
          <p><span>upload Image</span><input type="file" /></p>

            </form>
            
        </div>
    );
};

export default AddProducts;
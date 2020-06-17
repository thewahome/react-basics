import React, { useState } from 'react';
import Rainbow from '../hoc/Rainbow';
import { FormInput, SubmitButton } from '../components/form-elements/index';

const Home = () => {

  const [loading, setLoading] = useState(false);

  const formSubmitted = () => {
    setLoading(true);
    setTimeout(() => {
      alert('Form has been submitted');
      setLoading(false);
    }, 3000);
  };
  
  return (
    <div className="container">
      <h4 className="center">Home</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        corrupti ipsam natus quis fugit sed nisi amet. Placeat voluptas quam
        magnam quisquam, consequatur esse doloribus ipsa, error ipsam cumque
        aperiam!
      </p>
      <div class="span3">
        <h2>Sign Up </h2>
        <div>
          <FormInput
            label={'First name'}
            type={'text'}
            placeholder={'Enter your first name'}
          />
          <FormInput
            label={'Last name'}
            type={'text'}
            placeholder={'Enter your last name'}
          />
          <FormInput
            label={'Email Address'}
            type={'text'}
            placeholder={'Enter a valid email'}
          />

          <SubmitButton
            title={'Sign Up here'}
            styling={'btn btn-success'}
            loading={loading}
            buttonHasBeenClicked={() => formSubmitted()}
          />

          <div class="clearfix" />
        </div>
      </div>
    </div>
  );
};

export default Rainbow(Home);

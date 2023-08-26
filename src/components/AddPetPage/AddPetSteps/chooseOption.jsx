import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import {
  Container,
  CategoryButton,
  CategoryForm,
  TitleInput,
  CheckedLabel,
} from '../Styles/chooseOption.styled';
import {
  BtnNextDone, LinkCancelBack, LinkTitle, BtnBox, BtnTitle
} from '../Styles/buttonStyles';
import { Link, useNavigate } from 'react-router-dom';
import { AddPetHeader } from 'components/AddPetPage/AddPetSteps/addHeader';


const categories = [
  { category: 'your pet', id: 1 },
  { category: 'sell', id: 2 },
  { category: 'lost/found', id: 3 },
  { category: 'in good hands', id: 4 }
];

export const ChooseOption = ({onSubmit}) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('')

  useEffect(() => {
   }, [category]);

  const handleChange = evt => {
    const { value } = evt.target;
    setCategory(value);
  };

  const onClick= evt => {
    evt.preventDefault();
    onSubmit(category);

// navigate('/:`${category}`')

    switch (category) {
      case 'sell':
        navigate('/:sell');
        break;
      case 'your pet':
        navigate('/:your pet');
        break;
      case 'lost/found':
        navigate('/:lost/found');
        break;
      case 'in good hands':
        navigate('/:in good hands');
        break;
      default:
        alert('Select a category');
    }
  };

  return (
    <Container>
      <AddPetHeader />
      <form>
        {/* <Formik
          initialValues={'your pet'}
        > */}
        <CategoryForm>
          {categories.map(({ category , id}) => (
            <CheckedLabel >
              <CategoryButton
                type="radio"
                name="category"
                value={category}
                onChange={handleChange}
                id={id}
              />
              {category}
            </CheckedLabel>
          ))}
        </CategoryForm>
        {/* </Formik>  */}
      </form>
      <BtnBox>
        <BtnNextDone type="button" onClick={onClick}>
          <BtnTitle>Next</BtnTitle>
          {/* <BtnIcon></BtnIcon> */}
        </BtnNextDone>
        <Link to="UserPage">
          <LinkCancelBack type="button">
            {/* <BtnIcon></BtnIcon> */}
            <LinkTitle>Back</LinkTitle>
          </LinkCancelBack>
        </Link>
      </BtnBox>
      {/* </Formik> */}
    </Container>
  );
};

import {
  Formik, Field,
  ErrorMessage
} from 'formik';
import { useState,  useEffect } from 'react';
import { Link,  useNavigate } from 'react-router-dom';

import {
  AddHeader,
  AddPetHeader,
} from 'components/AddPetPage/AddPetSteps/addHeader';
 import {ValidSchema} from '../ValidateAddPetPage/ValidateSchemaAdd';
 import { TitlePage } from '../Styles/addHeader.styled';
import {
  Container,
 InputBox,
  TitleLabel,
  Label,
  Input,
  Form,
} from '../Styles/personalDetalis.styled';
import {
  BtnBox,
  BtnNextDone,
  LinkCancelBack,
  BtnTitle,
  LinkTitle,
} from 'components/AddPetPage/Styles/buttonStyles';

export const PersonalDetals = ({category, onSubmit}) => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');

  
  // useEffect(() => {
  //   try {
 
    
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }, [category, title, name, date, type]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'type':
        setType(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ title, name, date, type })
     navigate('MoreInfo');
  };

  return (
    <Container>
      {category === 'your pet' ? (
        <AddPetHeader  />
      ) : (
        <AddHeader category={category} />
      )}
      <Formik
        initialValues={{ title: '', name: '', date: '', type: '' }}
        validationSchema={ValidSchema}
        onSubmit={handleSubmit}
      >
        {({ title, name, date, type, errors, touched }) => (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <InputBox>
              {category !== 'your pet' && (
                <Label>
                  <TitleLabel>Title of add</TitleLabel>
                  <Input
                    type="text"
                    value={title}
                    onChange={handleChange}
                    placeholder="Add title"
                    name="title"
                  />
                </Label>
              )}
              <Label>
                <TitleLabel>Pet`s name</TitleLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={handleChange}
                  placeholder="Type name pet"
                  name="name"
                />
                {errors.name && <div >{ErrorMessage.name}</div>}
              </Label>
              <Label>
                <TitleLabel>Date of birth</TitleLabel>
                <Input
                  type="text"
                  value={date}
                  onChange={handleChange}
                  placeholder="Date of birth, DD-MM-YYYY"
                  name="date"
                />
                {/* {errors.date && <div id="feedback">{ErrorMessage.date}</div>} */}
              </Label>
              <Label>
                <TitleLabel>Type</TitleLabel>
                <Input
                  type="text"
                  value={type}
                  onChange={handleChange}
                  placeholder="Type of pet"
                  name="type"
                />
                {/* {errors.type && <div id="feedback">{ErrorMessage.type}</div>} */}
              </Label>
            </InputBox>
            <BtnBox>
              <BtnNextDone type="submit">
                <BtnTitle>Next</BtnTitle>
                {/* <BtnIcon></BtnIcon> */}
              </BtnNextDone>
              <Link onClick={() => navigate(-1)}>
                <LinkCancelBack type="button">
                  {/* <BtnIcon></BtnIcon> */}
                  <LinkTitle>Back</LinkTitle>
                </LinkCancelBack>
              </Link>
            </BtnBox>
          </form>
        )}
      </Formik>
    </Container>
  );
};

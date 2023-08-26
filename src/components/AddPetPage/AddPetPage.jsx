import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ChooseOption } from 'components/AddPetPage/AddPetSteps/chooseOption';
import { PersonalDetals } from 'components/AddPetPage/AddPetSteps/personalDetalis';
import { MoreInfo } from 'components/AddPetPage/AddPetSteps/moreInfo';

import { NotFound } from 'components/AddPetPage/NotFound';
import { CategoryButton } from './Styles/chooseOption.styled';

export const AddPetPage = () => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [sex, setSex] = useState('');
  const [comments, setComments] = useState('');

 const step = ["ChooseOption","PersonalDetals" ,"MoreInfo"];
 let pet = []
  const navigate = useNavigate();

  const addElem = category => {
    setCategory(category);
  };

  const addElemTwoStep = ({name, date, type, title}) => {
    setName(name);
    setDate(date);
    setType(type);
    setTitle(title);
  };

  const handleSubmit = ({ file, sex, price, city, comments }) => {
    setSex(sex);
    setFile(file);
    setPrice(price);
    setCity(city);
    setComments(comments);

    pet = {
      category,
      name,
      date,
      type,
      title,
      file,
      sex,
      price,
      city,
      comments,
    };
    console.log(pet);


    const formData = new FormData();

    formData.append('category', pet.category);
        console.log(pet.category)

    for (const key of pet) {
      console.log([key, pet[key]]);

      if (pet[key] !== '') {
        formData.append(`${key}`, pet[key]);
      }
    }
    const entries = Object.entries(formData);
    console.log(entries);
    // try {
    //   const request = new XMLHttpRequest();
    //   await request.open('POST', formData, 'https://localhost:3000/api/pets');
    //   await request.open('POST', formData, 'https://localhost:3000/api/');
    //   return request.send(formData);
    // } catch (error) {
    //   return error.message;
    // }
    category === 'your pet' ? navigate('UserPage') : navigate('NoticesPage');
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<ChooseOption onSubmit={addElem} category={category} />}
        />
        {/* <Route
          path= ""/:" + "`${category}`" + " " "
          element={
            <PersonalDetals
              onSubmit={addElemTwoStep}
              category={category}
              title={title}
              name={name}
              type={type}
              date={date}
            />
          }
        />
        <Route
          path="/:`${caterory}`/MoreInfo"
          element={
            <MoreInfo
              onSubmit={handleSubmit}
              category={category}
              price={price}
              sex={sex}
              city={city}
              comments={comments}
              file={file}
            />
          }
        /> */}
        <Route
          path="/:your pet"
          element={
            <PersonalDetals
              onSubmit={addElemTwoStep}
              category={category}
              title={title}
              name={name}
              type={type}
              date={date}
            />
          }
        />
        <Route
          path="/:your pet/MoreInfo"
          element={
            <MoreInfo
              onSubmit={handleSubmit}
              category={category}
              price={price}
              sex={sex}
              city={city}
              comments={comments}
              file={file}
            />
          }
        />
        <Route
          path="/:sell"
          element={
            <PersonalDetals
              onSubmit={addElemTwoStep}
              category={category}
              title={title}
              name={name}
              type={type}
              date={date}
            />
          }
        />
        <Route
          path="/:sell/MoreInfo"
          element={
            <MoreInfo
              onSubmit={handleSubmit}
              category={category}
              price={price}
              name={name}
              city={city}
              comments={comments}
              file={file}
            />
          }
        />
        <Route
          path="/:lost/found"
          element={
            <PersonalDetals
              onSubmit={addElemTwoStep}
              category={category}
              title={title}
              name={name}
              type={type}
              date={date}
            />
          }
        />
        <Route
          path="/:lost/found/MoreInfo"
          element={
            <MoreInfo
              onSubmit={handleSubmit}
              category={category}
              price={price}
              sex={sex}
              city={city}
              comments={comments}
              file={file}
            />
          }
        />
        <Route
          path="/:in good handls"
          element={
            <PersonalDetals
              onSubmit={addElemTwoStep}
              category={category}
              title={title}
              name={name}
              type={type}
              date={date}
            />
          }
        />
        <Route
          path="/:in good handls/MoreInfo"
          element={
            <MoreInfo
              onSubmit={handleSubmit}
              category={category}
              price={price}
              sex={sex}
              city={city}
              comments={comments}
              file={file}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

// const formData = new FormData();
//     formData.append('category', category);
//     formData.append('title',  title);
//     formData.append('name',  name );
//     formData.append('date',  date );
//     formData.append('type',  type );
//     formData.append('sex',  sex );
//     formData.append('file',  file );
//     formData.append('location',  location );
//     formData.append('price',  price );
// formData.append('comments', comments);
//   const entries = Object.entries(formData);
//   console.log(entries);

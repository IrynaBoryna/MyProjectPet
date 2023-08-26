import { Formik } from 'formik';
import { useState, useRef} from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AddHeader, AddPetHeader } from './addHeader';
import {ValidSchema } from '../ValidateAddPetPage/ValidateSchemaAdd';
import {
  Container,
  Forma,
  TitleLabel,
  Label,
  Input,
  ImageBox,
  InputImage,
  SexLabel,
  InputComments,
  SexBox,
  SexInput,
  SexTitle,
  Icon
} from '../Styles/moreInfo.styled';
import { TitlePage } from '../Styles/addHeader.styled';
import {
  BtnBox,
  BtnNextDone,
  LinkCancelBack,
  BtnTitle,
  LinkTitle,
} from '../Styles/buttonStyles';


export const MoreInfo = ({ category, onSubmit }) => {

  // const location = useLocation();
  // const backTo = useRef(location.state?.from ?? '/');
  const navigate = useNavigate();
 
  const [comments, setComments] = useState('');
  const [file, setFile] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [sex, setSex] = useState('');

  // useEffect(() => {
  //   try (  )
  //   } catch (error) {
  //     alert(error.message);

  // }, [category, title, name, date, type, sex, city, price, file, comments]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'sex':
        setSex(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'file':
        setFile(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'comments':
        setComments(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    onSubmit({price, city, comments, file, sex})
  };

  return (
    <Container>
      {category === 'your pet' ? (
        <AddPetHeader />
      ) : (
        <AddHeader category={category} />
      )}
      <Forma>
        <Formik
          initialValues={{
            sex: '',
            city: '',
            file: '',
            price: '',
            comments: '',
          }}
          validationSchema={ValidSchema }
          onSubmit={handleSubmit}
        >
          {({ sex, city, file, price, comments }) => (
            <form autoComplete="off" onSubmit={handleSubmit}>
              {category !== 'your pet' && (
                <SexBox>
                  <SexTitle>The sex</SexTitle>
                  <SexLabel>
                    <SexInput
                      type="radio"
                      name="sex"
                      value="Female"
                      onChange={handleChange}
                    />
                    Female
                  </SexLabel>
                  <SexLabel>
                    <SexInput
                      type="radio"
                      name="sex"
                      value="Male"
                      onChange={handleChange}
                    />
                    Male
                  </SexLabel>
                </SexBox>
              )}
              <ImageBox>
                {file ? "Add foto" : "Load the pets image" }
                <TitleLabel>
                  {!file ? <Icon alt="Photo" /> :
                    <image src={URL.createObjectURL(file)} alt="pet" />}    
                  
                  <InputImage
                    type="file"
                    name="file"
                    value={file}
                    onChange={handleChange}
                    multiple={false}
                    // accept=".png, .jpg"
                    hidden
                  />
                </TitleLabel>
              </ImageBox>
              {category !== 'your pet' && (
                <Label>
                  <TitleLabel>Location</TitleLabel>
                  <Input
                    type="text"
                    value={city}
                    placeholder="City"
                    name="city"
                    onChange={handleChange}
                  />
                </Label>
              )}
              {category === 'sell' && (
                <Label>
                  <TitleLabel>Price</TitleLabel>
                  <Input
                    type="number"
                    value={price}
                    placeholder="Price"
                    name="price"
                    onChange={handleChange}
                    required
                  />
                </Label>
              )}
              <Label>
                <TitleLabel>Comments</TitleLabel>
                <InputComments
                  type="text"
                  value={comments}
                  onChange={handleChange}
                  placeholder="Type of pet"
                  name="comments"
                />
              </Label>
              <BtnBox>
                <BtnNextDone type="submit">
                  <BtnTitle>Done</BtnTitle>
                  {/* <BtnIcon></BtnIcon> */}
                </BtnNextDone>
                <Link onClick={() => navigate(-1)}>
                  <LinkCancelBack>
                    {/* <BtnIcon></BtnIcon> */}
                    <LinkTitle>Back</LinkTitle>
                  </LinkCancelBack>
                </Link>
              </BtnBox>
            </form>
          )}
        </Formik>
      </Forma>
    </Container>
  );
};


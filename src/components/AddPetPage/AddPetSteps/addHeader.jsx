
import {
  Options,
  OptionDecor,
  OptionName,
  OptionBox,
  TitlePage,
} from '../Styles/addHeader.styled';

const options = [
  { option: 'Choose option', id: 1 },
  { option: 'Personal detalis', id: 2 },
  { option: 'More info', id: 3 },
];

export const AddPetHeader = () => {
  return (
    <div styled={{ alignItems: 'start' }}>
      <TitlePage>Add pet</TitlePage>
      <Options>
        {options.map(({ option, id }) => (
          <li>
            <OptionBox id={id}>
              <OptionName>{option}</OptionName>
              <OptionDecor></OptionDecor>
            </OptionBox>
          </li>
        ))}
      </Options>
    </div>
  );
};

export const AddHeader = ({category}) => {


  return (
    <div>
      {category === 'sell' ? <TitlePage>Add pet for sell</TitlePage> : null}
      {category === 'lost/found' ? <TitlePage>Add lost pet</TitlePage> : null}
      {category === 'in good hands' ? (
        <TitlePage>Add in good hands</TitlePage>
      ) : null}
      <Options>
        {options.map(({ option, id }) => (
          <li>
            <OptionBox id={id}>
              <OptionName>{option}</OptionName>
              <OptionDecor></OptionDecor>
            </OptionBox>
          </li>
        ))}
      </Options>
    </div>
  );
};

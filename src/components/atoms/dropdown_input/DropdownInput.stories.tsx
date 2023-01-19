import { OptionList } from "../../organism/dropdown/Dropdown";
import { DropdownInput, DropdownInputProps } from "./DropdownInput";

export default {
  title: "molecules/dropdownInput/DropdownInputMultySelect",
  component: DropdownInput,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: "",
      },
    },
  },
};

const optionListType: OptionList[] = [
  {
    icon: "Rus",
    title: "Русский",
  },
  {
    icon: "Britain",
    title: "Английский",
  },
];

const Template = (args: DropdownInputProps) => <DropdownInput {...args} />;

export const DropdownInputMultySelect = Template.bind({});
DropdownInputMultySelect.args = {
  listItems: optionListType,
};

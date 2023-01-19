import { OptionList } from "../molecules/OptionsList/OptionsList.stories";
import { Dropdown, DropdownProps } from "./Dropdown";
const optionListType: OptionList[] = [
  {
    icon: "Rus",
    title: "Русский",
  },
  {
    icon: "Britain",
    title: "Английский",
  },
  {
    icon: "Spain",
    title: "Испанский",
  },
  {
    icon: "Germany",
    title: "Немецкий",
  },
  {
    icon: "Italy",
    title: "Итальянский",
  },
  {
    icon: "Poland",
    title: "Польский",
  },
];

export default {
  title: "templates/Dropdown",
  component: Dropdown,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: "",
      },
    },
  },
};

const Template = (args: DropdownProps) => <Dropdown {...args} />;
export const DropdownByCountry = Template.bind({});
DropdownByCountry.args = {
  data: optionListType,
};

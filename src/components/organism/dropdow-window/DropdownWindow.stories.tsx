import { OptionList } from "../dropdown/Dropdown";
import { DropdownWindow } from "./DropdownWindow";

const optionListTypeWithIcons: OptionList[] = [
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
const optionListTypeWithoutIcons: OptionList[] = [
  {
    title: "Русский",
  },
  {
    title: "Английский",
  },
  {
    title: "Испанский",
  },
  {
    title: "Немецкий",
  },
  {
    title: "Итальянский",
  },
  {
    title: "Польский",
  },
];

export default {
  title: "organism/DropdownWindow",
  component: DropdownWindow,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: "",
      },
    },
  },
};

export type DropdownWindowProps = {
  data: OptionList[];
  onChange: object;
  className?: string;
  selected?: (item: OptionList, index: number) => void;
  checked?: boolean;
};

const Template = (args: DropdownWindowProps) => <DropdownWindow {...args} />;
export const DropdownWindowWithIcons = Template.bind({});
DropdownWindowWithIcons.args = {
  data: optionListTypeWithIcons,
};

export const DropdownWindowWithoutIcons = Template.bind({});
DropdownWindowWithoutIcons.args = {
  data: optionListTypeWithoutIcons,
};

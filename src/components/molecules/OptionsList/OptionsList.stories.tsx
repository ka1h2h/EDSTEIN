import { OptionListProps, OptionsList } from "./OptionsList";

export type OptionList = {
  icon?: string;
  title: string;
  checked?: boolean;
};

type TOptionListData = Array<OptionList>;

const optionListTypeWithFlags: TOptionListData = [
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
const optionListTypeWithoutFlags: TOptionListData = [
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

const Template = (args: OptionListProps) => <OptionsList {...args} />;

export const OptionsListWithoutFlags = Template.bind({});
OptionsListWithoutFlags.args = {
  data: optionListTypeWithoutFlags,
};

export const OptionsListWithFlags = Template.bind({});
OptionsListWithFlags.args = {
  data: optionListTypeWithFlags,
};

export default {
  title: "molecules/OptionsList",
  component: OptionsList,
  argTypes: {},
};

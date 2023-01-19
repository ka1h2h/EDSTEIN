import { InputProps, SearchInput } from "./Input";

export default {
  title: "atoms/SearchInput",
  component: SearchInput,
  argTypes: {},
};

const Template = (args: InputProps) => <SearchInput {...args} />;
export const Input = Template.bind({});

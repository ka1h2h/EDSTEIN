import { Title, TitleProps } from "./OptionsListTitle";

export default {
  title: "atoms/Title",
  component: Title,
  argTypes: {},
};

const Template = (args: TitleProps) => <Title {...args} />;

export const CountryTitle = Template.bind({});
CountryTitle.args = {};

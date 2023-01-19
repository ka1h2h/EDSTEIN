import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    variant: {
      type: "string",
      description: "Варианты внешнего вида чекбокса",

      control: {
        type: "radio",
      },
    },
  },
};

const Template = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};

export const DisabledNotChecked = Template.bind({});
DisabledNotChecked.args = {
  variant: "Not checked, disabled",
  checked: false,
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  variant: "Checked",
  checked: true,
  disabled: true,
};

export const EnabledNotChecked = Template.bind({});
EnabledNotChecked.args = {
  variant: "Checked123",
  checked: false,
  disabled: true,
};

export const EnabledChecked = Template.bind({});
EnabledNotChecked.args = {
  variant: "Checked321",
  checked: true,
  disabled: true,
};

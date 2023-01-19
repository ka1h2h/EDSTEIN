import { CountryFlag, FlagProps } from "./Flag";
import { IconsSet } from "./svgies/Countries";

interface IconsRec {
  [key: string]: string;
}

export const IconsList: IconsRec = Object.keys(IconsSet).reduce(
  (acc, k) => ({
    ...acc,
    [k]: k,
  }),
  {} as IconsRec
);

export default {
  title: "atoms/Flags",
  component: CountryFlag,
  argTypes: {
    icon: {
      control: { type: "select", options: IconsList },
    },
  },
};

const Template = (args: FlagProps) => <CountryFlag {...args} />;

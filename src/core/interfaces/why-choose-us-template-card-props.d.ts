export interface IWhyChooseUsTemplateCardProps extends React.PropsWithChildren {
  className?: string;
  title: string;
  subtitle: string;
  content: Array<string>;
  reverseContent?: boolean;
}

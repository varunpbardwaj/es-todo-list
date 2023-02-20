import IconType from "../types/components/icon";

const Icon = ({ children, onClick }: IconType) => {
  return <div onClick={() => onClick()}>{children}</div>;
};

export default Icon;

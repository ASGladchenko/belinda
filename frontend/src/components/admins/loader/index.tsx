import './styles.css';

const Loader = ({ style }: { style?: string }) => (
  <span
    className={`absolute loader top-[50%] rotate-45  ${style && style}`}
  ></span>
);

export { Loader };

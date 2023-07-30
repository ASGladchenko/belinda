import { getStyles } from './style';
import { IAdvantagesCard } from './types';

export const AdvantagesCard = ({
  text,
  title,
  bgImg,
  background,
}: IAdvantagesCard) => {
  const { card, head, content } = getStyles(background);

  return (
    <>
      {bgImg && (
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className={card}
        ></div>
      )}

      {background && (
        <div className={card}>
          <h3
            style={{ fontSize: 'calc(calc(1.325rem + .9vw))' }}
            className={head}
          >
            {title}
          </h3>

          <p className={content}>{text}</p>
        </div>
      )}
    </>
  );
};

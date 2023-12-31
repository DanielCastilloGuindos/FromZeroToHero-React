import { Title } from "./Title";

export const Section = ({ id, title, subtitle, extraClass='', extraTitleClass = '', children }) => {

  let titleElement = <Title
    title={ title }
    subtitle={ subtitle }
    extraClass={ extraTitleClass }/>;

  return (
    <section className={`flex flex-col justify-center items-center gap-4 sm:gap-8 w-full mx-auto pt-8 sm:pt-20 mt-6 sm:mt-12 ${ extraClass }`} id={ id }>
      {title && titleElement}
      
      { children }
    </section>
  );
}
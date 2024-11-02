import Image from 'next/image';
import parse, { domToReact } from 'html-react-parser';

const ParserImgToImage =({ htmlContent, classType }) => {
   // Definir el transformador que convierte <img> en <Image>
   const options = {
    replace: (domNode) => {
      if (domNode.name === 'img') {
        const { src, alt, width, height, class: className } = domNode.attribs;
        return (
          <div className={className}>
            <Image
              src={src}
              alt={alt || 'Image'}
              width={0}
              height={0}
              sizes='100%'
              style={{
                layout: width === '100%' ? 'responsive' : 'intrinsic',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
        );
      }
    },
  };

  // Usar html-react-parser para convertir el HTML a JSX
  const content = parse(htmlContent, options);

  return <div>{content}</div>;
};

export default ParserImgToImage;

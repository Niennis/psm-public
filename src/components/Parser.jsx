import Image from 'next/image';
import parse, { domToReact } from 'html-react-parser';

const ParserImgToImage = ({ htmlContent, classType, size }) => {
  // Definir el transformador que convierte <img> en <Image>

  const prepareImg = (src) => {
    if (!src || typeof src !== 'string') return src;
    return src;
  }

  const options = {
    replace: (domNode) => {
      if (domNode.name === 'img') {
        const { src, alt, width, height, class: className } = domNode.attribs;
        return (
          <div className={className}>
            <Image
              src={prepareImg(src)}
              // src={src.includes(process.env.NEXT_PUBLIC_KEY_IMG) ? src :  `${src}${process.env.NEXT_PUBLIC_KEY_IMG}`}
              alt={alt || 'Image'}
              width={0}
              height={0}
              sizes='100%'
              style={{
                layout: width === '100%' ? 'responsive' : 'intrinsic',
                maxWidth: '100%',
                width: size ? '50%' : '100%',
                height: 'auto'
              }}
            />
          </div>
        );
      }
    },
  };

  // Usar html-react-parser para convertir el HTML a JSX
  if (!htmlContent) return null;
  const content = parse(htmlContent, options);

  return <div>{content}</div>;
};

export default ParserImgToImage;

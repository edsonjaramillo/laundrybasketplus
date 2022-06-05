import { NodeRendererType, RichText } from '@graphcms/rich-text-react-renderer';
import { BlurImage } from '@/components/index';

interface RichTextRenderProps {
  content: any;
}

const richTextOverrides: NodeRendererType = {
  h1: ({ children }) => <h1 className='store__h1'>{children}</h1>,
  h2: ({ children }) => <h2 className='store__h2'>{children}</h2>,
  h3: ({ children }) => <h3 className='store__h3'>{children}</h3>,
  p: ({ children }) => <p className='store__p'>{children}</p>,
  a: ({ children, href }) => (
    <a
      target='_blank'
      rel='noreferrer external nofollow noopener'
      className='store__link'
      href={href}>
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className='store__ul'>{children}</ul>,
  ol: ({ children }) => <ol className='store__ol'>{children}</ol>,
  li: ({ children }) => <li className='store__li'>{children}</li>,
  code: ({ children }) => <code className='store__code'>{children}</code>,
  code_block: ({ children }) => <pre className='store__codeblock'>{children}</pre>,
  img: ({ src, width, height, altText }) => (
    <div className='store__image'>
      <BlurImage
        src={src!}
        width={width}
        height={height}
        layout='responsive'
        alt={altText}
        quality={15}
      />
    </div>
  ),
};

const RichTextRender = ({ content }: RichTextRenderProps) => (
  <RichText content={content} renderers={richTextOverrides} />
);

export default RichTextRender;

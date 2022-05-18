import { NodeRendererType, RichText } from '@graphcms/rich-text-react-renderer';
import { BlurImage } from '@/components/index';

interface RichTextRenderProps {
  content: any;
}

const richTextOverrides: NodeRendererType = {
  h1: ({ children }) => <h1 className='apply__h1'>{children}</h1>,
  h2: ({ children }) => <h2 className='apply__h2'>{children}</h2>,
  h3: ({ children }) => <h3 className='apply__h3'>{children}</h3>,
  p: ({ children }) => <p className='apply__p'>{children}</p>,
  a: ({ children, href }) => (
    <a
      target='_blank'
      rel='noreferrer external nofollow noopener'
      className='apply__link'
      href={href}>
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className='apply__ul'>{children}</ul>,
  ol: ({ children }) => <ol className='apply__ol'>{children}</ol>,
  li: ({ children }) => <li className='apply__li'>{children}</li>,
  code: ({ children }) => <code className='apply__code'>{children}</code>,
  code_block: ({ children }) => <pre className='apply__codeblock'>{children}</pre>,
  img: ({ src, width, height, altText }) => (
    <div className='apply__image'>
      <BlurImage src={src!} width={width} height={height} layout='responsive' alt={altText} />
    </div>
  ),
};

const JobListingRichTextRender = ({ content }: RichTextRenderProps) => (
  <RichText content={content} renderers={richTextOverrides} />
);
export default JobListingRichTextRender;

import type { VFC } from 'react';
import ReactMarkdown, { ReactMarkdownOptions } from 'react-markdown';

/** The inline markdown component */
const Component: VFC<ReactMarkdownOptions> = ({
  children,
  components,
  ...props
}) => (
  <ReactMarkdown
    className="markdown text-gray-700 dark:text-gray-200"
    components={{ p: ({ children: c }) => <>{c}</>, ...components }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </ReactMarkdown>
);
Component.displayName = 'InlineMarkdown';

export default Component;

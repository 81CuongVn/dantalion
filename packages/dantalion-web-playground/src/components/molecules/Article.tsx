import type { ReactNode, VFC } from 'react';
import ReactMarkdown from 'react-markdown';
import Details from './Details';
import ExternalAnchor from './ExternalAnchor';

/** Type definition of the required attributes. */
export interface Props {
  /** Specifies the main article text as a Markdown format */
  readonly children: string;
  /** Specifies the body of feature text */
  readonly featureBody?: string[];
  /** Specifies the heading of feature text */
  readonly featureHeading?: ReactNode;
  /** The tooltip on hover the feature. */
  readonly tooltipFeatureDetails?: string;
}

/** The main article component */
const Component: VFC<Props> = ({
  children,
  featureBody,
  featureHeading,
  tooltipFeatureDetails,
}) => (
  <article>
    <ReactMarkdown
      components={{
        // eslint-disable-next-line react/jsx-props-no-spreading
        a: ({ children: c, href }) => (
          <ExternalAnchor href={href as string} nofollow>
            {c}
          </ExternalAnchor>
        ),
        // eslint-disable-next-line react/jsx-props-no-spreading
        p: ({ node, ...props }) => <p className="py-3" {...props} />,
      }}
      className="font-light leading-loose p-3 text-lg sm:px-2"
      linkTarget="_blank"
    >
      {children}
    </ReactMarkdown>
    <Details
      caption={featureHeading}
      headingLevel="h2"
      tooltip={tooltipFeatureDetails}
    >
      {featureBody}
    </Details>
  </article>
);
Component.displayName = 'Article';

export default Component;

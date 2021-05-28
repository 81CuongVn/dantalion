import {
  Children,
  ComponentType,
  LiHTMLAttributes,
  ReactNodeArray,
  VFC,
} from 'react';

/** Type definition of the required attributes. */
export interface Props {
  /** The children items. */
  readonly children?: ReactNodeArray;
  /** If you need the CSS classes, specify them. */
  readonly className?: string;
  /** If you need a list item component, specify it. */
  readonly itemType?: ComponentType<LiHTMLAttributes<HTMLLIElement>>;
  /** Whether the use as an order list. */
  readonly order?: boolean;
}

/** The generical list component */
const Component: VFC<Props> = ({ children, className, itemType, order }) => {
  const List = order ? 'ol' : 'ul';
  const Item = itemType ?? 'li';
  return (
    <List className={className}>
      {Children.toArray(children).map((child, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item key={index}>{child}</Item>
      ))}
    </List>
  );
};
Component.displayName = 'List';

export default Component;
